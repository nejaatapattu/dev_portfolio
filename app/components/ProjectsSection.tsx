'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;    // repo link
  download?: string;  // build link (only Summit)
  website?: string; // website link (optional)
};
const projects: Project[] = [
	{
		
		title: 'Rosetta Phone - Translation Messaging App',
		description: 'Chat app with automatic translation into the recipient\'s preferred language. Integrated tone detection and emoji reactions for nuanced communication.',
		image: '/rosetta_both.png',
		tags: ['React', 'TypeScript', 'Google Gemini API'],
		github: 'https://github.com/nejaatapattu/summit',
		website: 'https://sites.google.com/view/ui-project1-team1?usp=sharing',
		
	},
	{
		title: 'Summit - Unity 3D platformer Game',
		description: 'Mario-inspired 3D platformer where you play Agent Luna recovering Bowser\’s Star, featuring polished animations/UI.',
		image: '/dungeon.png',
		tags: ['Unity', 'C#', 'Game AI', 'Chart.js'],
		github: 'https://github.com/nejaatapattu/summit',
		download: 'https://drive.google.com/drive/folders/1cu3OZ5R2C8W827jpXaREl_xh_b2AmhHN?usp=sharing',},
];

export default function ProjectsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent transition-transform duration-300 group-hover:scale-105" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-sm px-3 py-1 bg-gray-800 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm px-4 py-2 rounded-lg border border-gray-700 hover:bg-gray-800"
                      aria-label={`View code for ${project.title}`}
                    >
                      GitHub
                    </a>
                  )}
                  {project.download && (
                    <a
                      href={project.download}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20"
                      aria-label={`Download build for ${project.title}`}
                    >
                      Download
                    </a>
                  )}
				  {project.website && (
					<Link
					  href={project.website}
					  target="_blank"
					  rel="noopener noreferrer"
					  className="inline-flex items-center text-sm px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
					  aria-label={`Visit website for ${project.title}`}
					>
					  Website
					</Link>
				  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}