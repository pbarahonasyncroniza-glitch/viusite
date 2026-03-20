const LOGO_URL = '/logo-viusite.png'


const services  = ['Simulación 4D', 'Análisis de Interferencias', 'Planificación Constructiva', 'Presentaciones']
const company   = ['Metodología', 'Proyectos', 'Casos de Uso', 'Diferenciadores', 'Contacto']
const contact   = ['info@viusite.com', 'Santiago, Chile']

export default function Footer() {
  return (
    <footer className="bg-vs-bg border-t border-white/5">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-vs-orange to-transparent opacity-30" />

      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <img src={LOGO_URL} alt="ViuSite" className="h-10 w-auto" />
              <span
                className="font-display font-bold text-2xl text-white"
                style={{ WebkitBackgroundClip: undefined }}>
                Viu<span style={{
                  background: 'linear-gradient(135deg,#e8621a,#ff7c35)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>Site</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm italic mb-1">"See it before it's built"</p>
            <p className="text-gray-500 text-sm mb-4">Simulación 4D para proyectos de construcción.</p>
            <p className="text-gray-600 text-xs">
              Visualizamos tu proyecto antes de construirlo — integrando BIM y Gantt en una simulación que reduce riesgos y mejora decisiones.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Servicios</h4>
            <ul className="space-y-2">
              {services.map(s => (
                <li key={s}>
                  <a href="#solucion" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Empresa</h4>
            <ul className="space-y-2">
              {company.map(s => (
                <li key={s}>
                  <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">{s}</a>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-semibold text-sm mt-6 mb-3">Contacto</h4>
            <ul className="space-y-1">
              {contact.map(c => (
                <li key={c} className="text-gray-500 text-sm">{c}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">© 2025 ViuSite. Todos los derechos reservados.</p>
          <p className="text-gray-600 text-xs">Visualizamos tu proyecto antes de construirlo</p>
        </div>
      </div>
    </footer>
  )
}
