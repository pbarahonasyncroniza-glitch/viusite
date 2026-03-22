import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_URL } from '../config/contact';

const LOGO_URL = '/logo-viusite.png';

const navLinks = [
  { label: 'Solución', href: '#solucion' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Casos de Uso', href: '#casos-de-uso' },
  { label: 'Contacto', href: '#contacto' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3" onClick={closeMobileMenu}>
          <img
            src={LOGO_URL}
            alt="ViuSite Logo"
            className="h-10 w-auto object-contain md:h-11"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/85 transition hover:text-orange-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/20 transition hover:scale-[1.02] hover:bg-[#1ebe5d]"
          >
            <FaWhatsapp className="text-lg" />
            Solicitar demo
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white md:hidden"
          aria-label="Abrir menú"
        >
          {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 backdrop-blur-md md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className="rounded-lg px-3 py-3 text-base text-white/90 transition hover:bg-white/5 hover:text-orange-400"
              >
                {link.label}
              </a>
            ))}

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/20 transition hover:bg-[#1ebe5d]"
            >
              <FaWhatsapp className="text-lg" />
              Solicitar demo por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
