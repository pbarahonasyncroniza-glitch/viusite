import { CALENDLY_URL } from '../../config/contact';

export default function CalendlyButton({
  children = 'Agendar reunión',
  className = '',
}) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-xl bg-[#1F4E8C] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 ${className}`}
    >
      {children}
    </a>
  );
}
