import { Code, GraduationCap, Briefcase, Languages } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <p className="text-lg mb-8">
              Sou um desenvolvedor focado em JavaScript, com habilidades
              práticas em frameworks modernos como React.js, React Native e
              Next.js. Tenho aprimorado minhas habilidades através do meu
              estágio atual, projetos pessoais e acadêmicos, sempre focando em
              soluções eficientes para front-end e mobile. Gosto de colaborar em
              equipes ágeis, utilizando metodologias como Scrum e Kanban,
              buscando sempre inovação e resultados concretos. Fora da
              tecnologia, sou apaixonado por ciclismo, música e vôlei, hobbies
              que me ajudam a manter a criatividade em alta e o equilíbrio entre
              trabalho e vida pessoal.
            </p>
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Code className="mr-2" /> Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "JavaScript",
                "React.js",
                "React Native",
                "Next.js",
                "Vue.js",
                "Tailwind CSS",
                "Git",
                "Github",
                "Docker",
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-700 rounded-full px-4 py-2 text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/3 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <GraduationCap className="mr-2" /> Education
              </h3>
              <p className="font-semibold">Engenharia da computação</p>
              <p>Universidade Federal do Pará</p>
              <p className="text-sm text-gray-400">2019 - 2025</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Briefcase className="mr-2" /> Experiências
              </h3>
              <p className="font-semibold">
                Estágio de desenvolvimento Front-end
              </p>
              <p>Tribunal de contas da união</p>
              <p className="text-sm text-gray-400">2023 - Emprego atual</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Languages className="mr-2" /> Idiomas
              </h3>
              <p>Português - Nativo</p>
              <p>Inglês - Intermediário</p>
              <p>Espanhol - Básico</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
