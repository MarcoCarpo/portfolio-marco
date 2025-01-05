import React from 'react';
import { jobs } from '@/features/jobs/data';
import Image from 'next/image';
import PageWrapper from '@/components/PageWrapper';
import { CodeIcon } from '@radix-ui/react-icons';

const page = () => {
  return (
    <PageWrapper title="Lavoro">
      <div className="relative border-l-2 border-gray-300">
        {jobs.map((job) => (
          <div key={job.id} className="relative flex items-start gap-4 mb-10">
            {/* Nodo della timeline */}
            <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>

            {/* Data a sinistra */}
            <div className="text-sm text-gray-500 font-medium min-w-[100px] text-right pr-4 mx-2">
              {job.period}
            </div>

            {/* Contenuto principale */}
            <div className="flex flex-col gap-2 p-4 bg-primary shadow-md rounded-lg w-full text-slate-50">
              <div className="flex items-left gap-2 justify-start items-center">
                {job.logo ? (
                  <Image
                    width={60}
                    height={60}
                    src={job.logo}
                    alt={`${job.title} logo`}
                    className="w-16 h-16 rounded-full object-contain shadow-lg bg-white p-1"
                  />
                ) : (
                  <CodeIcon className="w-16 h-16 rounded-full object-contain shadow-lg bg-primary p-1" />
                )}
                <div className="flex flex-col items-start">
                  <h4 className="text-lg font-bold">{job.title}</h4>
                  <p className="text-sm  font-black">
                    <a
                      href={job.url}
                      className="hover:underline"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      💻 <span className="main-gradient">{job.company}</span>
                    </a>
                  </p>
                  <p className="text-sm">📍 {job.location}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-left">{job.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default page;
