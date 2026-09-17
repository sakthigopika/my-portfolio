import Navbar from './components/Navbar'
import Home from './sections/home'
import About from './sections/About'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/contact'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />

      <footer className="bg-slate-950 text-slate-500 text-center py-6 border-t border-slate-800">
        <p>
          © 2026 Sakthi Gopika Raj. Built with React & Tailwind CSS.
        </p>
      </footer>
    </>
  )
}

export default App