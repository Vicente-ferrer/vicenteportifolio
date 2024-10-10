export default function HeroSection() {
  return (
    <section
      id="home"
      className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center"
    >
      <div className="md:w-1/2">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Vicente de Sousa
        </h2>
        <p className="text-xl mb-8">Desenvolvedor mobile e front-end</p>
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Entre em contato
        </a>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0">
        <img
          src="/perfil.jpg"
          alt="Vicente de Sousa"
          className="w-full max-w-md mx-auto rounded-full"
        />
      </div>
    </section>
  );
}
