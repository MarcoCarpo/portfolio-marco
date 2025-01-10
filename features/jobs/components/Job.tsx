import React from 'react';
import { Job } from '../types';
import Image from 'next/image';
import { CodeIcon } from '@radix-ui/react-icons';

const JobComponent: React.FC<Job> = (job) => {
  return (
    <div key={job.id} className="relative flex items-start gap-4 mb-10">
      <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>

      <div className="hidden md:block text-sm text-gray-500 font-medium min-w-[100px] text-right pr-4 mx-2">
        {job.period}
      </div>

      <div className="ml-4 md:ml-0 flex flex-col gap-2 p-4 bg-primary shadow-md rounded-lg w-full text-slate-50">
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

            <p className="text-sm text-left md:hidden">📅 {job.period}</p>
          </div>
        </div>
        <p className="md:text-sm text-justify">{job.description}</p>
      </div>
    </div>
  );
};

export default JobComponent;
