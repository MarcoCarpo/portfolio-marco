import React from 'react';
import { education } from '@/features/education/data';
import PageWrapper from '@/components/PageWrapper';
import { GraduationCap } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

const Education = () => {
  const t = useTranslations('Education');
  const locale = useLocale() as keyof typeof education;

  return (
    <PageWrapper title={t('education')}>
      <p className="text-sm text-gray-600">{t('education_text')}</p>
      <div className="relative border-l-2 border-gray-300">
        {education[locale].map((edu) => (
          <div key={edu.id} className="relative flex items-start gap-4 mb-10">
            <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>

            <div className="hidden md:inline-block text-sm text-gray-500 font-medium min-w-[100px] text-right pr-4 mx-2">
              {edu.period}
            </div>

            <div className="flex flex-col items-start gap-2 p-4 bg-white shadow-md rounded-lg w-full ml-4 md:ml-0">
              <GraduationCap
                size={40}
                className="shadow-lg bg-slate-800 p-1 rounded-full text-white"
              />
              <h4 className="text-lg font-bold">{edu.title}</h4>
              <p className="text-sm text-gray-700">{edu.subtitle}</p>
              {edu.vote && (
                <p className="text-sm text-gray-500">
                  <span className="font-bold">{t('vote')}:</span> {edu.vote}
                </p>
              )}
              {edu.period && (
                <p className="text-sm text-gray-500 md:hidden">
                  <span className="font-bold">{t('period')}:</span> {edu.period}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Education;
