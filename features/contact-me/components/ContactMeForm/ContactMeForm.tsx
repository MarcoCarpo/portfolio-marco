'use client';

import { FC } from 'react';

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

const ContactMeForm: FC = () => {
  const form = useContactMeForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(sendEmail)} className="space-y-8 min-w-[400px] text-left">
        <FormField
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default ContactMeForm;
