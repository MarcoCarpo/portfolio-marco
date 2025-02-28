import Email from '@/components/Email';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { data } from '@/data';

import {
  DownloadIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <PageWrapper>
      <div className="w-52 h-52 relative overflow-hidden rounded-full mx-auto shadow-lg shadow-gray-500/50">
        <Image
          src="/images/profile.png"
          alt="Marco Carpona"
          width={520}
          height={520}
          style={{
            objectPosition: 'bottom',
          }}
          priority={true}
        />
      </div>
      <h2 className="text-4xl">
        {t('hello')} <span className="animate-wave inline-block">✋🏻</span>
        {t.rich('i_am_name', {
          name: () => <span className="font-extrabold main-gradient">{data.name}</span>,
        })}
        !
      </h2>
      <div>
        <h2 className="text-xl">
          {t.rich('frontend_developer', {
            frontend: (frontend) => <span className="main-gradient">{frontend}</span>,
          })}
        </h2>
        <h2 className="text-xl"> 🍃 {t('global_change_ecology_gratuated')}</h2>
        <h2 className="text-xl"> 📍 {data.location}</h2>
        <Email />
      </div>
      <div className="flex flex-col gap-2 md:gap-4 md:flex-row md:justify-center">
        <a
          href={data.social.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white w-full md:w-fit"
          aria-label="LinkedIn"
        >
          <Button className="bg-gray-800 w-full">
            <LinkedInLogoIcon />
            {t('linkedin')}
          </Button>
        </a>
        <Separator orientation="vertical" />
        <a
          href={data.social.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white md:w-fit w-full"
          aria-label="GitHub"
        >
          <Button className="bg-gray-800 w-full">
            <GitHubLogoIcon /> {t('github')}
          </Button>
        </a>
        <Separator orientation="vertical" />
        <a href="/cv.pdf" target="_blank" download>
          <Button className="bg-gray-800 w-full md:w-fit md:px-8">
            <DownloadIcon /> {t('resume')}
          </Button>
        </a>
        <Separator orientation="vertical" />

        <a
          href={`mailto:${data.email}`}
          className="hover:text-white"
          aria-label="Email"
          target="_blank"
        >
          <Button className="bg-gray-800 w-full">
            <EnvelopeClosedIcon /> {t('email')}
          </Button>
        </a>
      </div>
      <div>
        <Link href="/contact-me">
          <Button
            size="lg"
            className="mt-10 md:mt-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold shadow-lg hover:shadow-xl hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all w-full md:w-fit"
          >
            🚀 {t('contact_me')}
          </Button>
        </Link>
      </div>
    </PageWrapper>
  );
}
