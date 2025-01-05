import ContactMeForm from '@/features/contact-me/components/ContactMeForm/ContactMeForm';
import React from 'react';

const page = () => {
  return (
    <div className="flex flex-1 pt-10 gap-10 text-center flex-col max-w-3xl mx-auto">
      <h2 className="text-4xl font-extrabold">Contattami</h2>
      <ContactMeForm />
    </div>
  );
};

export default page;
