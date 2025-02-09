import { Code, GraduationCap, Briefcase, Languages } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-200">Sobre mim</h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <p className="text-lg mb-8">
              Sou um desenvolvedor de software que está sempre em busca de novos
              desafios. Possuo cerca de 2 anos de experiência, tenho adiquirido
              conhecimentos no desenvolvimento front-end e mobile, com foco em
              tecnologias como React.js, React Native e Next.js. Minha
              experiência abrange desde a criação de interfaces de usuário
              intuitivas e responsivas até o desenvolvimento de aplicativos
              móveis completos. Possuo um sólido conhecimento em JavaScript e
              TypeScript, além de experiência com bancos de dados como MySQL e
              PostgreSQL. Habilidades Linguagens: JavaScript, TypeScript
              Frameworks/Bibliotecas: React.js, React Native, Next.js, Redux,
              React Router, React Navigation Bancos de dados: MySQL, PostgreSQL,
              Oracle Ferramentas: Docker, Jest, React Testing, Tailwind CSS e
              Styled Components Conceitos: Componentização, Consumo de API1s,
              Hooks, Gerenciamento de estado, Roteamento, SSR, Testes,
              Otimização de desempenho. Se tiver interesse em conversar, estou à
              disposição!
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
                  className="bg-slate-800 border border-slate-700 rounded-full px-4 py-2 text-center text-slate-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/3 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <GraduationCap className="mr-2" /> Educação
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
