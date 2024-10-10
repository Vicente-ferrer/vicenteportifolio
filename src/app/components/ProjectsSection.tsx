"use client";
import { useEffect, useState } from "react";
import useGitHubProjects from "../hook/useGitHubProjects";

export default function ProjectsSection() {
  const categories = {
    web: ["lingoduo", "gerador-de-password"],
    mobile: [
      "gestor-de-alunos-curso-logos",
      "Calculadora-de-rendimentos-imobiliarios",
    ],
    backend: ["projects-manager-backend", "fumaca-express-backend"],
  };

  const { projects, loading } = useGitHubProjects(categories);

  if (loading) {
    return <p>Carregando projetos...</p>;
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Principais projetos
        </h2>

        <h3 className="text-2xl font-semibold mb-4">Projetos Web</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.web.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.desc}</p>
              <p className="text-sm text-gray-400">
                linguagem: {project.language}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Ver Projeto
              </a>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold mb-4">Projetos Mobile</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.mobile.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.desc}</p>
              <p className="text-sm text-gray-400">
                linguagem: {project.language}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Ver Projeto
              </a>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold mb-4">Projetos Backend</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.backend.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.desc}</p>
              <p className="text-sm text-gray-400">
                linguagem: {project.language}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Ver Projeto
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
