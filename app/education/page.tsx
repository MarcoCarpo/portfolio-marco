import React from 'react';
import { education } from '@/features/education/data';
import Image from 'next/image';

const Education = () => {
  return (
    <div className="flex flex-1 pt-10 gap-10 text-center flex-col max-w-3xl mx-auto">
      <h2 className="text-4xl font-extrabold">Istruzione e Formazione</h2>
      <p className="text-sm text-gray-600">
        Ecco una panoramica del mio percorso accademico e formativo, che ha contribuito a plasmare
        le mie competenze e la mia passione per il mondo dello sviluppo web.
      </p>
      <div className="relative border-l-2 border-gray-300">
        {education.map((edu) => (
          <div key={edu.id} className="relative flex items-start gap-4 mb-10">
            {/* Nodo della timeline */}
            <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>

            {/* Data a sinistra */}
            <div className="text-sm text-gray-500 font-medium min-w-[100px] text-right pr-4 mx-2">
              {edu.period}
            </div>

            {/* Contenuto principale */}
            <div className="flex flex-col items-start gap-2 p-4 bg-white shadow-md rounded-lg w-full">
              {edu.logo && (
                <Image
                  width={48}
                  height={48}
                  src={edu.logo}
                  alt={`${edu.title} logo`}
                  className="w-10 h-10 rounded-full object-cover"
                />
              )}
              <h4 className="text-lg font-bold">{edu.title}</h4>
              <p className="text-sm text-gray-700">{edu.subtitle}</p>
              {edu.vote && (
                <p className="text-sm text-gray-500">
                  <span className="font-bold">Voto:</span> {edu.vote}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
