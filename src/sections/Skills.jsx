function Skills() {
  const skills = [
    { name: 'Python', icon: '🐍' },
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'Data Analytics', icon: '📊' },
    { name: 'Power BI', icon: '📈' },
    { name: 'Artificial Intelligence', icon: '🤖' },
    { name: 'Cloud Computing', icon: '☁️' },
  ]

  return (
    <section
      id="skills"
      className="min-h-screen bg-slate-900 text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-cyan-400 font-semibold mb-3">
          MY SKILLS
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Skills & <span className="text-cyan-400">Technologies</span>
        </h2>

        <p className="text-slate-400 text-lg max-w-2xl mb-12">
          Technologies I have learned and areas I am currently exploring
          as I continue to grow my technical skills.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group bg-slate-950 border border-slate-800 rounded-3xl p-7 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="text-4xl mb-5 group-hover:scale-110 transition duration-300">
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold text-slate-200">
                {skill.name}
              </h3>

              <div className="w-10 h-1 bg-cyan-400 rounded-full mt-4 group-hover:w-20 transition-all duration-300"></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Skills