import PageWrapper from '@/components/PageWrapper';
import ContactMeForm from '@/features/contact-me/components/ContactMeForm/ContactMeForm';
import React from 'react';

const page = () => {
  return (
    <PageWrapper title="Contattami">
      <ContactMeForm />
    </PageWrapper>
  );
};

export default page;
