"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 bg-slate-900 border-b border-slate-800">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Portfólio</h1>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>
        <ul
          className={`md:flex space-x-6 ${
            isMenuOpen
              ? "block absolute top-16 right-0 bg-slate-900 w-full p-4 border-b border-slate-800"
              : "hidden"
          }`}
        >
          <li>
            <a href="#home" className="text-slate-300 hover:text-blue-400 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 text-white">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 text-white">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 text-white">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
