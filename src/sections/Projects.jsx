function Projects() {
  const projects = [
    {
      title: 'Real vs AI Image Detector',
      description:
        'A web-based AI project that analyzes images and predicts whether an image is real or AI-generated.',
      technologies: 'Python • Flask • HTML • CSS • JavaScript',
    },
    {
      title: 'Personal Portfolio',
      description:
        'A modern personal portfolio website designed to showcase my skills, projects, education and career interests.',
      technologies: 'React • Vite • Tailwind CSS',
    },
  ]

  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-900 text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-cyan-400 font-semibold mb-2">
          MY PROJECTS
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Things I've <span className="text-cyan-400">Built</span>
        </h2>

        <p className="text-slate-400 text-lg mb-12">
          A collection of projects I have created while learning and
          exploring technology.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-7 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-slate-400 leading-7 mb-6">
                {project.description}
              </p>

              <p className="text-cyan-400 text-sm font-semibold">
                {project.technologies}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects