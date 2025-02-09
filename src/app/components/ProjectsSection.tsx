"use client";
import { motion } from "framer-motion";
import useGitHubProjects from "../hook/useGitHubProjects";

export default function ProjectsSection() {
  const projectNames = [
    "gerador-de-password",
    "gestor-de-alunos-curso-logos",
    "Calculadora-de-rendimentos-imobiliarios",
    "projects-manager-backend",
    "fumaca-express-backend"
  ];

  const { projects, loading } = useGitHubProjects(projectNames);

  if (loading) {
    return <p>Carregando projetos...</p>;
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Principais projetos
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              key={index}
              className="bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all border border-slate-700"
            >
              <div className="relative w-full h-48 mb-4 bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
                <img
                  src={`/projects/${project.title.toLowerCase()}.jpg`}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-contain p-2"
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    e.currentTarget.src = "/projects/project-placeholder.jpg"
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-200">{project.title}</h3>
              <p className="mb-4 text-slate-300">{project.desc}</p>
              <p className="text-sm text-slate-400">
                Tecnologia: {project.language}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-indigo-600 transition-colors"
              >
                Ver Projeto
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
