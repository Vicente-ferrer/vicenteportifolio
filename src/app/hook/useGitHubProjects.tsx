import { useEffect, useState } from "react";

interface Project {
  title: string;
  desc: string;
  language: string;
  url: string;
}

interface GitHubRepo {
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
}

const useGitHubProjects = (projectNames: string[]) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/Vicente-ferrer/repos"
        );
        const data: GitHubRepo[] = await response.json();

        const filteredProjects = data
          .filter(repo => projectNames.includes(repo.name))
          .map(repo => ({
            title: repo.name,
            desc: repo.description || "No description provided",
            language: repo.language || "language stack unknown",
            url: repo.html_url,
          }));

        setProjects(filteredProjects);
      } catch (error) {
        console.error("Erro ao buscar os repositórios:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [projectNames]);

  return { projects, loading };
};

export default useGitHubProjects;
