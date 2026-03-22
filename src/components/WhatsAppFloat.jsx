import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_URL } from '../config/contact';

const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed right-5 bottom-5 z-[60] flex items-center gap-3"
    >
      <span className="hidden rounded-full border border-white/10 bg-slate-950/90 px-4 py-2 text-sm font-medium text-white shadow-xl backdrop-blur-md transition group-hover:translate-x-0 md:inline-flex">
        Solicitar demo
      </span>

      <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-green-600/30 transition duration-300 hover:scale-110 hover:bg-[#1ebe5d]">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-20" />
        <FaWhatsapp className="relative text-[2rem]" />
      </span>
    </a>
  );
};

export default WhatsAppFloat;
