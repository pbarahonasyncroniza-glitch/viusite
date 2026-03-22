import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiCheck } from 'react-icons/fi'

const LOGO_URL = '/logo-viusite.png'

const reasons = [
  'Primera sesión sin compromiso',
  'Respuesta en menos de 24 horas',
  'Propuesta a medida de tu proyecto',
  'Equipo con experiencia real en construcción',
]

export default function ContactForm() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const [form, setForm] = useState({ name: '', email: '', company: '', project: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!form.name.trim())    errs.name    = 'El nombre es requerido'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Ingresa un email válido'
    if (!form.company.trim()) errs.company = 'La empresa es requerida'
    return errs
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: undefined })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSubmitted(true)
  }

  const inputClass = (field) =>
    `w-full bg-vs-bg border ${errors[field] ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-vs-orange'} text-white placeholder-gray-500 rounded-xl px-4 py-3 outline-none transition-colors text-sm`

  return (
    <section id="contacto" ref={ref} className="py-24 px-6 bg-vs-bg-light relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-vs-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity:0, y:30 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.6 }}
          className="text-center mb-12">
          <img
            src={LOGO_URL}
            alt="ViuSite"
            className="h-16 w-auto mx-auto mb-6"
            style={{ filter: 'drop-shadow(0 0 20px rgba(232,98,26,0.4))' }}
          />
          <h2 className="font-display font-bold text-4xl text-white mb-3">
            ¿Listo para <span className="text-gradient">ver tu proyecto</span>
            <br />antes de construirlo?
          </h2>
          <p className="text-gray-400 text-lg">
            Agenda una demo y te mostramos cómo funciona con tu propio proyecto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 items-start">

          {/* Formulario */}
          {!submitted ? (
            <motion.form
              initial={{ opacity:0, y:20 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.6, delay:0.2 }}
              onSubmit={handleSubmit}
              noValidate
              className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text" name="name" placeholder="Nombre completo *"
                    value={form.name} onChange={handleChange}
                    className={inputClass('name')}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email" name="email" placeholder="Email corporativo *"
                    value={form.email} onChange={handleChange}
                    className={inputClass('email')}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <input
                  type="text" name="company" placeholder="Empresa *"
                  value={form.company} onChange={handleChange}
                  className={inputClass('company')}
                />
                {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company}</p>}
              </div>

              <textarea
                name="project"
                placeholder="Cuéntanos sobre tu proyecto (opcional)"
                value={form.project} onChange={handleChange}
                rows={4}
                className="w-full bg-vs-bg border border-white/10 focus:border-vs-orange text-white placeholder-gray-500 rounded-xl px-4 py-3 outline-none transition-colors text-sm resize-none"
              />

              <button
                type="submit"
                className="w-full bg-vs-orange hover:bg-vs-orange-light text-white font-bold text-lg py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/30 glow-orange">
                Solicitar Demo Gratuita →
              </button>

              <p className="text-center text-gray-500 text-xs">
                Sin compromisos. Te contactamos en menos de 24 horas.
              </p>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.4 }}
              className="text-center py-16 bg-vs-surface border border-vs-orange/20 rounded-2xl">
              <div className="text-6xl mb-5">🎉</div>
              <h3 className="font-display font-bold text-2xl text-white mb-3">¡Solicitud enviada!</h3>
              <p className="text-gray-400 text-lg">
                Gracias, <strong className="text-white">{form.name}</strong>.
                <br />Te contactaremos a la brevedad.
              </p>
            </motion.div>
          )}

          {/* Bloque ¿Por qué escribirnos? */}
          <motion.div
            initial={{ opacity:0, x:20 }} animate={inView ? { opacity:1, x:0 } : {}} transition={{ duration:0.6, delay:0.4 }}
            className="bg-vs-surface border border-white/5 rounded-2xl p-8">
            <h3 className="font-display font-bold text-lg text-white mb-6 uppercase tracking-widest text-vs-orange">
              ¿Por qué escribirnos?
            </h3>
            <ul className="space-y-4">
              {reasons.map((reason, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                  <FiCheck className="text-vs-orange mt-0.5 shrink-0" size={16} />
                  {reason}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
