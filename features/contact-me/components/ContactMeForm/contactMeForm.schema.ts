'use client';

import { z } from 'zod';

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Inserisci almeno due caratteri' })
    .max(50, { message: 'Inserisci massimo cinquanta caratteri' }),
  email: z.string().email('Inserisci un indirizzo email valido'),
  message: z
    .string()
    .min(10, { message: 'Inserisci almeno dieci caratteri' })
    .max(1000, { message: 'Inserisci massimo mille caratteri' }),
});

export default formSchema;
