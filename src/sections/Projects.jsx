function Projects() {
  const projects = [
    {
      number: '01',
      title: 'Real vs AI Image Detector',
      description:
        'A web-based AI project that analyzes images and predicts whether an image is real or AI-generated.',
      technologies: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript'],
      icon: '🤖',
    },
    {
      number: '02',
      title: 'Personal Portfolio',
      description:
        'A modern responsive portfolio website created to showcase my education, skills, projects and career interests.',
      technologies: ['React', 'Vite', 'Tailwind CSS'],
      icon: '💻',
    },
  ]

  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-950 text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-cyan-400 font-semibold mb-3">
          MY PROJECTS
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Things I've <span className="text-cyan-400">Built</span>
        </h2>

        <p className="text-slate-400 text-lg max-w-2xl mb-12">
          Practical projects created while learning and exploring
          Artificial Intelligence and web technologies.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-slate-900 border border-slate-800 rounded-3xl p-8
              hover:border-cyan-400
              hover:shadow-lg hover:shadow-cyan-400/20
              hover:-translate-y-2
              transition-all duration-300"
            >

              <div className="flex items-center justify-between mb-8">

                <span className="text-cyan-400 font-bold text-lg">
                  {project.number}
                </span>

                <span className="text-4xl group-hover:scale-110 transition duration-300">
                  {project.icon}
                </span>

              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-slate-400 leading-7 mb-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1.5 rounded-full bg-slate-950 border border-slate-700 text-cyan-400 text-sm"
                  >
                    {technology}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Projects