"use client";
import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactSection() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailCopy = () => {
    navigator.clipboard
      .writeText("Vinciferrer78@gmail.com")
      .then(() => {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000); // Oculta a mensagem após 2 segundos
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  };

  return (
    <section id="contact" className="bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="mt-8 text-center">
          <p>Email: Vinciferrer78@gmail.com</p>
          <p>Cidade: Castanhal, PA, Brasil</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://linkedin.com/in/vicentedesousa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/Vicente-ferrer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
              aria-label="GitHub"
            >
              <Github />
            </a>
            <button
              onClick={handleEmailCopy}
              className="text-gray-400 hover:text-white focus:outline-none"
              aria-label="Email"
            >
              <Mail />
            </button>
          </div>
          {emailCopied && (
            <p className="mt-2 text-green-500">
              Email copiado para a área de transferência!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
