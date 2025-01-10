'use client';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { useContactMeForm } from './hooks/useContactMeForm';
import { sendEmail } from '../../actions/send-email';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import LoadingSpinner from '@/components/LoadingSpinner';
import formSchema from './contactMeForm.schema';
import { z } from 'zod';
import { toast } from 'sonner';
import { useTranslations } from 'next-intl';

const ContactMeForm = () => {
  const t = useTranslations('ContactMe');
  const form = useContactMeForm();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const message = await sendEmail(values);
      toast.success(message);
      form.reset();
    } catch (error: unknown) {
      toast.error(error as string);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full text-left mx-auto max-w-lg"
      >
        <FormField
          disabled={form.formState.isSubmitting}
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('name')}</FormLabel>
              <FormControl>
                <Input placeholder={t('enter_your_name')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('email')}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t('enter_your_email')}
                  {...field}
                  type="email"
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('message')}</FormLabel>
              <FormControl>
                <Textarea
                  disabled={form.formState.isSubmitting}
                  placeholder={t('enter_your_message')}
                  className="resize-none"
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
              <FormDescription>{t('max_length', { chars: 1000 })}</FormDescription>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={form.formState.isSubmitting || !form.formState.isValid}
          className="w-full bg-gray-800"
        >
          {form.formState.isSubmitting ? (
            <LoadingSpinner className="w-6 h-6 text-white" />
          ) : (
            t('send')
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactMeForm;
