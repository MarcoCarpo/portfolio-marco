import PageWrapper from '@/components/PageWrapper';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import SkillSection from '@/features/about-me/components/SkillSection';
import { skills } from '@/features/about-me/data';
import { useTranslations } from 'next-intl';

const Page = () => {
  const t = useTranslations('Bio');

  return (
    <PageWrapper title={t('bio')}>
      <div className="text-sm text-justify">
        {t.rich('bio_text', {
          react: (react) => <Badge className="bg-react">{react}</Badge>,
          angular: (angular) => <Badge className="bg-angular">{angular}</Badge>,
          next: (next) => <Badge>{next}</Badge>,
        })}
        <Separator className="max-w-20 mx-auto my-4" />
        {t('current_bio_text')}
      </div>

      <div className="flex flex-col gap-5 my-4">
        <SkillSection title={t('languages')} skills={skills.languages} />
        <SkillSection title={t('frameworks_libraries')} skills={skills.frameworks} />
        <SkillSection title={t('tools')} skills={skills.tools} />
      </div>
    </PageWrapper>
  );
};

export default Page;
