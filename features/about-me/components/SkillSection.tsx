import React from 'react';
import { Skill } from '../types';

const SkillSection = ({ title, skills }: { title: string; skills: Skill[] }) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-xl font-extrabold">{title}</h4>
      <div className="flex flex-wrap gap-3 justify-center">
        {skills.map(({ name, color, level }) => (
          <SkillBadge key={name} name={name} color={color} level={level} />
        ))}
      </div>
    </div>
  );
};

const SkillBadge = ({ name, color, level }: { name: string; color: string; level: number }) => {
  return (
    <div className={`flex items-center gap-2 px-2 py-2 rounded-md text-white ${color} text-sm`}>
      <span className="font-bold">{name}</span>
      <LevelIndicator level={level} />
    </div>
  );
};

const LevelIndicator = ({ level }: { level: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`h-1 w-1 rounded-full ${i < level ? 'bg-white' : 'bg-gray-400'}`}
        ></span>
      ))}
    </div>
  );
};
export default SkillSection;
