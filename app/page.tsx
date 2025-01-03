import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { DownloadIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex justify-center flex-1 gap-10 text-center pt-20">
      <div className="flex flex-col gap-4 max-w-lg">
        <div className="w-52 h-52 relative overflow-hidden rounded-full mx-auto shadow-lg shadow-gray-500/50">
          <Image src="/images/profile.png" alt="Marco Carpona" layout="fill" objectFit="cover" />
        </div>
        <h2 className="text-4xl">
          Ciao <span className="animate-wave inline-block">✋🏻</span> sono{' '}
          <span className="font-extrabold main-gradient">Marco Carpona</span>!
        </h2>
        <div>
          <h2 className="text-xl">
            {' '}
            💻 Sviluppatore web <span className="main-gradient">Frontend</span>
          </h2>
          <h2 className="text-xl"> 🍃 Laureato in Global Change Ecology</h2>
          <h2 className="text-xl"> 📍 Trieste (TS), Italia</h2>
        </div>
        <div className="flex gap-4 h-8 justify-center">
          <Button size={'sm'}>
            <LinkedInLogoIcon />
            Linkedin
          </Button>
          <Separator orientation="vertical" />
          <Button size={'sm'}>
            <GitHubLogoIcon /> GitHub
          </Button>
          <Separator orientation="vertical" />
          <Button size={'sm'}>
            <DownloadIcon /> CV
          </Button>
        </div>
        <div>
          <Button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold shadow-lg hover:shadow-xl hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all">
            Contattami
          </Button>
        </div>
      </div>
    </div>
  );
}
