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

const ContactMeForm = () => {
  const form = useContactMeForm();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const message = await sendEmail(values);
      alert(message);
      form.reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 min-w-[400px] text-left">
        <FormField
          disabled={form.formState.isSubmitting}
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Nome" {...field} />
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} type="email" />
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
              <FormLabel>Messaggio</FormLabel>
              <FormControl>
                <Textarea placeholder="Messaggio" className="resize-none" rows={5} {...field} />
              </FormControl>
              <FormMessage />
              <FormDescription>Max 1000 caratteri</FormDescription>
            </FormItem>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting} className="w-full">
          {form.formState.isSubmitting ? (
            <LoadingSpinner className="w-6 h-6 text-white" />
          ) : (
            'Invia'
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactMeForm;
