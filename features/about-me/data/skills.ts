import { Skill } from "../types";

export const skills: Record<string, Skill[]> = {
	languages: [
		{ name: 'HTML', color: 'bg-red-500', level: 5 },
		{ name: 'CSS', color: 'bg-blue-500', level: 4 },
		{ name: 'JavaScript', color: 'bg-yellow-500', level: 4 },
	],
	frameworks: [
		{ name: 'React', color: 'bg-react', level: 4 },
		{ name: 'Angular', color: 'bg-angular', level: 4 },
		{ name: 'Next.js', color: 'bg-gray-800', level: 4 },
	],
	tools: [
		{ name: 'Git', color: 'bg-green-500', level: 4 },
		{ name: 'TypeScript', color: 'bg-blue-600', level: 4 },
		{ name: 'Tailwind CSS', color: 'bg-teal-400', level: 4 },
		{ name: 'Sass', color: 'bg-pink-500', level: 3 },
		{ name: 'Unit testing', color: 'bg-orange-400', level: 3 },
		{ name: 'Docker', color: 'bg-blue-300', level: 3 },
		{ name: 'PostgreSQL', color: 'bg-indigo-500', level: 2 },
		{ name: 'Prisma', color: 'bg-blue-400', level: 2 },
		{ name: 'ESLint', color: 'bg-purple-500', level: 4 },
		{ name: 'Prettier', color: 'bg-gray-500', level: 4 },
		{ name: 'VSCode', color: 'bg-blue-700', level: 5 },
		{ name: 'GitHub Copilot', color: 'bg-black', level: 3 },
	],
};