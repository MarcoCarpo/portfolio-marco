import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import SkillSection from '@/features/about-me/components/SkillSection';
import { skills } from '@/features/about-me/data/skills';

const Page = () => {
  return (
    <div className="flex flex-1 pt-10 gap-5 text-center flex-col max-w-3xl mx-auto">
      <h2 className="text-4xl font-extrabold">Chi Sono</h2>
      <div className="text-sm">
        Sono un appassionato sviluppatore web specializzato in tecnologie frontend, con competenze
        in <Badge className="bg-react">React</Badge>, <Badge className="bg-angular">Angular</Badge>{' '}
        e <Badge>Next.js</Badge>. Laureato in Scienze e Tecnologie per l&apos;Ambiente e la Natura
        in triennale e successivamente in Global Change Ecology presso l&apos;Università di Trieste,
        porto avanti una duplice passione per l&apos;informatica e la natura.
        <Separator className="max-w-20 mx-auto my-4" />
        Attualmente, lavoro nel settore dell&apos;IT come Sviluppatore Web, contribuendo al successo
        dei progetti di cui faccio parte. Ho collaborato a progetti di rilevanza, utilizzando
        metodologie Agile per garantire una gestione efficiente e flessibile dei progetti.
      </div>

      <div className="flex flex-col gap-5 mt-4">
        <SkillSection title="Linguaggi" skills={skills.languages} />
        <SkillSection title="Frameworks/Librerie" skills={skills.frameworks} />
        <SkillSection title="Tool" skills={skills.tools} />
      </div>
    </div>
  );
};

export default Page;
