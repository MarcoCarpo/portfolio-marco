import PageWrapper from '@/components/PageWrapper';
import ContactMeForm from '@/features/contact-me/components/ContactMeForm/ContactMeForm';
import { useTranslations } from 'next-intl';
import React from 'react';

const Page = () => {
  const t = useTranslations('ContactMe');
  return (
    <PageWrapper title={t('contact_me')}>
      <ContactMeForm />
    </PageWrapper>
  );
};

export default Page;
