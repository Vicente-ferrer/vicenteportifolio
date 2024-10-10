import { useEffect, useState } from "react";

interface Project {
  title: string;
  desc: string;
  language: string;
  url: string; // Adicionado o campo url
}

interface GitHubRepo {
  name: string;
  description: string | null;
  language: string | null;
  html_url: string; // Adicionado o campo html_url
}

const useGitHubProjects = (categories: { [key: string]: string[] }) => {
  const [projects, setProjects] = useState<{ [key: string]: Project[] }>({
    web: [],
    mobile: [],
    backend: [],
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/Vicente-ferrer/repos"
        );
        const data: GitHubRepo[] = await response.json();

        const filteredProjects: { [key: string]: Project[] } = {
          web: [],
          mobile: [],
          backend: [],
        };

        data.forEach((repo) => {
          const project: Project = {
            title: repo.name,
            desc: repo.description || "No description provided",
            language: repo.language || "language stack unknown",
            url: repo.html_url, // Atribuição da url
          };

          // Verifique se o nome do repositório está nas listas de categorias
          if (categories.web.includes(repo.name)) {
            filteredProjects.web.push(project);
          } else if (categories.mobile.includes(repo.name)) {
            filteredProjects.mobile.push(project);
          } else if (categories.backend.includes(repo.name)) {
            filteredProjects.backend.push(project);
          }
        });

        setProjects(filteredProjects);
      } catch (error) {
        console.error("Erro ao buscar os repositórios:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects(); // Chama a função para buscar os projetos
  }, []); // Array de dependências vazio para rodar apenas uma vez

  return { projects, loading };
};

export default useGitHubProjects;
