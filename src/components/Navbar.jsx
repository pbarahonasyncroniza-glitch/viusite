import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const LOGO_URL = '/logo-viusite.png'


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Solución',     href: '#solucion' },
    { label: 'Proyectos',    href: '#proyectos' },
    { label: 'Metodología',  href: '#metodologia' },
    { label: 'Casos de Uso', href: '#casos' },
    { label: 'Contacto',     href: '#contacto' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#080d1a]/90 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img src={LOGO_URL} alt="ViuSite Logo" className="h-10 w-auto drop-shadow-lg" />
          <span className="font-display font-bold text-xl text-white">
            Viu<span className="text-gradient">Site</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200">
              {link.label}
            </a>
          ))}
          <a href="#contacto"
            className="bg-vs-orange hover:bg-vs-orange-light text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25">
            Solicitar Demo
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2">
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#080d1a]/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4 border-t border-white/10">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white py-2 text-sm font-medium">
              {link.label}
            </a>
          ))}
          <a href="#contacto" onClick={() => setMenuOpen(false)}
            className="bg-vs-orange text-white text-sm font-semibold px-5 py-3 rounded-lg text-center">
            Solicitar Demo
          </a>
        </div>
      )}
    </nav>
  )
}
