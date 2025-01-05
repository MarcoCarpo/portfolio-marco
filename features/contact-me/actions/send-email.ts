import { z } from 'zod';
import formSchema from '../components/ContactMeForm/contactMeForm.schema';

export const sendEmail = async (values: z.infer<typeof formSchema>) => {
  const apiEndpoint = '/api/email';

  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(values),
    });
    const data = await response.json();

    return data.message;
  } catch (error) {
    alert(error);
  }
};
