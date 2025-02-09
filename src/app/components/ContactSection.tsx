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
    <section id="contact" className="bg-slate-900 py-20 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="mt-8 text-center">
          <p className="text-slate-300">Email: Vinciferrer78@gmail.com</p>
          <p className="text-slate-300">Cidade: Castanhal, PA, Brasil</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://linkedin.com/in/vicentedesousa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/Vicente-ferrer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github />
            </a>
            <button
              onClick={handleEmailCopy}
              className="text-slate-400 hover:text-blue-400 transition-colors focus:outline-none"
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
