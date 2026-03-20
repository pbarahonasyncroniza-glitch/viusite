import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiAlertTriangle, FiRefreshCw, FiUsers, FiTruck, FiMapPin, FiMoreHorizontal } from 'react-icons/fi'

const risks = [
  { icon: FiAlertTriangle, title: 'Cambios tardíos',        desc: 'Modificaciones de diseño en fase de ejecución multiplican los costos del proyecto.' },
  { icon: FiRefreshCw,     title: 'Errores de secuencia',   desc: 'Actividades mal ordenadas generan retrabajos y pérdidas de tiempo.' },
  { icon: FiUsers,         title: 'Descoordinación',        desc: 'Especialidades desincronizadas crean conflictos difíciles de resolver en obra.' },
  { icon: FiTruck,         title: 'Conflictos logísticos',  desc: 'Accesos, acopios y maquinaria sin planificación espacial generan interrupciones.' },
  { icon: FiMapPin,        title: 'Impactos no previstos',  desc: 'Afectaciones al entorno, vecinos, tráfico o áreas protegidas no detectadas a tiempo.' },
  { icon: FiMoreHorizontal,title: 'Otros factores',         desc: 'Riesgos de seguridad y condicionantes no anticipadas que impactan plazo y costo.' },
]

export default function Problem() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="problema" ref={ref} className="py-24 px-6 bg-vs-bg-light relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity:0, y:30 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.6 }}
          className="text-center mb-16">
          <span className="text-vs-orange text-sm font-semibold uppercase tracking-widest">El problema</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3 mb-4">
            El cambio se encarece <span className="text-gradient">con el tiempo</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            La Curva de MacLeamy demuestra que cuanto más tarde se detecta un problema, más costoso es corregirlo.
          </p>
        </motion.div>

        {/* MacLeamy Chart */}
        <motion.div initial={{ opacity:0 }} animate={inView ? { opacity:1 } : {}} transition={{ duration:0.8, delay:0.3 }}
          className="bg-vs-surface border border-white/5 rounded-2xl p-6 md:p-10 mb-16 max-w-3xl mx-auto">
          <p className="text-center text-gray-400 text-sm mb-4 uppercase tracking-widest">Curva de MacLeamy</p>
          <svg viewBox="0 0 600 300" className="w-full h-auto">
            {/* Grid */}
            {[1,2,3,4].map(i => (
              <line key={i} x1="60" y1={20 + i*55} x2="560" y2={20 + i*55} stroke="#1f2937" strokeWidth="1" strokeDasharray="4,4"/>
            ))}
            {/* Axes */}
            <line x1="60" y1="260" x2="560" y2="260" stroke="#374151" strokeWidth="1.5"/>
            <line x1="60" y1="20"  x2="60"  y2="260" stroke="#374151" strokeWidth="1.5"/>
            {/* Axis labels */}
            <text x="310" y="292" textAnchor="middle" fill="#6B7280" fontSize="11">Fases del Proyecto →</text>
            <text x="18" y="140" textAnchor="middle" fill="#6B7280" fontSize="10" transform="rotate(-90 18 140)">Impacto</text>
            {/* Phase markers */}
            {['Diseño', 'Anteproyecto', 'Proyecto', 'Construcción', 'Entrega'].map((phase, i) => (
              <text key={i} x={80 + i * 110} y="276" textAnchor="middle" fill="#4B5563" fontSize="9">{phase}</text>
            ))}
            {/* Costo del cambio (orange — rises) */}
            <motion.path
              d="M 80 245 C 160 235, 230 195, 290 155 C 350 115, 420 55, 540 22"
              fill="none" stroke="#e8621a" strokeWidth="2.5" strokeLinecap="round"
              initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 2, delay: 0.6, ease: 'easeInOut' }}
            />
            {/* Capacidad de influir (blue — falls) */}
            <motion.path
              d="M 80 28 C 160 33, 220 65, 280 108 C 340 150, 420 205, 540 252"
              fill="none" stroke="#2a3faa" strokeWidth="2.5" strokeLinecap="round"
              initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 2, delay: 0.9, ease: 'easeInOut' }}
            />
            {/* Area fill */}
            <motion.path
              d="M 80 245 C 160 235, 230 195, 290 155 C 350 115, 420 55, 540 22 L 540 252 C 420 205, 340 150, 280 108 C 220 65, 160 33, 80 28 Z"
              fill="rgba(232,98,26,0.05)"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 2 }}
            />
            {/* Legend */}
            <circle cx="100" cy="13" r="5" fill="#e8621a"/>
            <text x="112" y="17" fill="#e8621a" fontSize="10" fontWeight="500">Costo del cambio (↑)</text>
            <circle cx="280" cy="13" r="5" fill="#2a3faa"/>
            <text x="292" y="17" fill="#4a6cf7" fontSize="10" fontWeight="500">Capacidad de influir (↓)</text>
          </svg>
        </motion.div>

        {/* Risks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {risks.map((risk, i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:20 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.5, delay: 0.1 + i * 0.1 }}
              className="bg-vs-surface border border-white/5 rounded-xl p-5 card-hover">
              <risk.icon className="text-vs-orange mb-3" size={22} />
              <h3 className="font-semibold text-white text-sm mb-1">{risk.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{risk.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* The Gap */}
        <motion.div initial={{ opacity:0, y:20 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.6, delay:0.8 }}
          className="text-center">
          <h3 className="font-display font-bold text-3xl text-white mb-8">La brecha actual</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
            <div className="bg-vs-navy/20 border border-vs-navy/40 rounded-2xl p-7 w-full md:w-64">
              <div className="text-vs-navy-light font-bold text-xs uppercase tracking-widest mb-2">GANTT</div>
              <div className="text-white text-xl font-semibold mb-2">Muestra el tiempo</div>
              <div className="text-gray-400 text-sm">Secuencias, duraciones e hitos del proyecto</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="text-5xl font-black text-gray-700">+</div>
              <div className="text-vs-orange text-xs font-bold uppercase tracking-widest">¿Integrados?</div>
            </div>
            <div className="bg-vs-orange/10 border border-vs-orange/30 rounded-2xl p-7 w-full md:w-64">
              <div className="text-vs-orange font-bold text-xs uppercase tracking-widest mb-2">BIM</div>
              <div className="text-white text-xl font-semibold mb-2">Muestra el espacio</div>
              <div className="text-gray-400 text-sm">Modelo 3D, geometría y especialidades</div>
            </div>
          </div>
          <p className="text-gray-400 mt-8 text-lg">
            El proyecto enfrenta <strong className="text-white">ambas dimensiones</strong>. ¿Están realmente integradas?
          </p>
        </motion.div>
      </div>
    </section>
  )
}
