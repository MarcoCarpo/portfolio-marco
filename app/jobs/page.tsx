import React from 'react';
import { jobs } from '@/features/jobs/data';
import PageWrapper from '@/components/PageWrapper';
import { useLocale, useTranslations } from 'next-intl';
import JobComponent from '@/features/jobs/components/Job';

const Page = () => {
  const locale = useLocale() as keyof typeof jobs;
  const t = useTranslations('Work');

  return (
    <PageWrapper title={t('work')}>
      <div className="relative border-l-2 border-gray-300">
        {jobs[locale].map((job) => (
          <JobComponent {...job} key={job.id} />
        ))}
      </div>
    </PageWrapper>
  );
};

export default Page;
