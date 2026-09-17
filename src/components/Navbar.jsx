function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold text-white hover:text-cyan-400 transition"
        >
          Sakthi<span className="text-cyan-400">.</span>
        </a>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">

          <a
            href="#home"
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            About
          </a>

          <a
            href="#education"
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            Education
          </a>

          <a
            href="#skills"
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            Projects
          </a>
          <a
  href="#contact"
  className="text-slate-300 hover:text-cyan-400 transition"
>
  Contact
</a>

        </div>

      </div>

    </nav>
  )
}

export default Navbar