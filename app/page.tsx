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
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
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
        />
      </div>
      <h2 className="text-4xl">
        Ciao <span className="animate-wave inline-block">✋🏻</span> sono{' '}
        <span className="font-extrabold main-gradient">{data.name}</span>!
      </h2>
      <div>
        <h2 className="text-xl">
          {' '}
          💻 Sviluppatore web <span className="main-gradient">Frontend</span>
        </h2>
        <h2 className="text-xl"> 🍃 Laureato in Global Change Ecology</h2>
        <h2 className="text-xl"> 📍 {data.location}</h2>
        <Email />
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href={data.social.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
          aria-label="LinkedIn"
        >
          <Button size={'sm'} className="bg-gray-800">
            <LinkedInLogoIcon />
            Linkedin
          </Button>
        </a>
        <Separator orientation="vertical" />
        <a
          href={data.social.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
          aria-label="GitHub"
        >
          <Button size={'sm'} className="bg-gray-800">
            <GitHubLogoIcon /> GitHub
          </Button>
        </a>
        <Separator orientation="vertical" />
        <Button size={'sm'} className="bg-gray-800" disabled={true}>
          <DownloadIcon /> CV
        </Button>
        <Separator orientation="vertical" />

        <a
          href={`mailto:${data.email}`}
          className="hover:text-white"
          aria-label="Email"
          target="_blank"
        >
          <Button size={'sm'} className="bg-gray-800">
            <EnvelopeClosedIcon /> Email
          </Button>
        </a>
      </div>
      <div>
        <Link href="/contact-me">
          <Button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold shadow-lg hover:shadow-xl hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all">
            Contattami
          </Button>
        </Link>
      </div>
    </PageWrapper>
  );
}
