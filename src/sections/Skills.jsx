function Skills() {
  const skills = [
    'Python',
    'HTML',
    'CSS',
    'JavaScript',
    'SQL',
    'Data Analytics',
    'Power BI',
    'Artificial Intelligence',
    'Cloud Computing',
  ]

  return (
    <section
      id="skills"
      className="min-h-screen bg-slate-950 text-white px-6 py-24"
    >
      <div className="max-w-5xl mx-auto">

        <p className="text-cyan-400 font-semibold mb-2">
          MY SKILLS
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Technologies & <span className="text-cyan-400">Interests</span>
        </h2>

        <p className="text-slate-400 text-lg mb-10">
          Skills I have learned and technologies I am currently exploring.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-cyan-400 hover:-translate-y-1 transition"
            >
              <h3 className="text-lg font-semibold text-slate-200">
                {skill}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills