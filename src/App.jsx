import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Benefits from './components/Benefits'
import UseCases from './components/UseCases'
import Projects from './components/Projects'
import Methodology from './components/Methodology'
import Differentiators from './components/Differentiators'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-vs-bg min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <UseCases />
      <Projects />
      <Methodology />
      <Differentiators />
      <ContactForm />
      <Footer />
    </div>
  )
}
