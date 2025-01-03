import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { DownloadIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-1 gap-10 text-center">
      <div className="flex flex-col gap-4 max-w-lg">
        <div className="w-52 h-52 relative overflow-hidden rounded-full mx-auto shadow-lg shadow-gray-500/50">
          <Image
            src="/images/profile.png"
            alt="Marco Carpona"
            layout="fill" // Rende l'immagine responsive
            objectFit="cover"
          />
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

        <Separator />

        <div>
          Sono un appassionato sviluppatore web specializzato in tecnologie frontend, con competenze
          in <Badge className="bg-react">React</Badge>,{' '}
          <Badge className="bg-angular">Angular</Badge> e <Badge>Next.js</Badge>. Laureato in{' '}
          <span className="font-bold">Scienze e Tecnologie per l&apos;Ambiente e la Natura</span> in
          triennale e successivamente in <span className="font-bold">Global Change Ecology</span>{' '}
          con il massimo dei voti presso l&apos;Università di Trieste, porto avanti una duplice
          passione per l&apos;informatica e la natura.
        </div>
      </div>
    </div>
  );
}
