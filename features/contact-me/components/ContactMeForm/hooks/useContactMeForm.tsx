import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import formSchema from '../contactMeForm.schema';
import { z } from 'zod';

export const useContactMeForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  return form;
};
