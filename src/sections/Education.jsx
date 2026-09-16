function Education() {
  return (
    <section
      id="education"
      className="min-h-screen bg-slate-950 text-white px-6 py-24"
    >
      <div className="max-w-5xl mx-auto">

        <p className="text-cyan-400 font-semibold mb-2">
          MY EDUCATION
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Academic <span className="text-cyan-400">Journey</span>
        </h2>

        <div className="space-y-6">

          {/* College */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition">
            <h3 className="text-2xl font-bold mb-3">
              B.Tech Artificial Intelligence & Data Science
            </h3>

            <p className="text-cyan-400 text-lg mb-3">
              Loyola Institute of Technology
            </p>

            <p className="text-slate-400 leading-7">
              Currently pursuing my final year of B.Tech in Artificial
              Intelligence and Data Science, with a growing interest in
              Artificial Intelligence, Data Analytics and Cloud Computing.
            </p>
          </div>

          {/* School */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition">
            <h3 className="text-2xl font-bold mb-3">
              Higher Secondary Education
            </h3>

            <p className="text-cyan-400 text-lg">
              Jain Vidyaashram Senior Secondary School
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Education