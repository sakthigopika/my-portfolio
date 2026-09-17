function Education() {
  return (
    <section
      id="education"
      className="min-h-screen bg-slate-950 text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-cyan-400 font-semibold mb-3">
          MY EDUCATION
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          My Academic <span className="text-cyan-400">Journey</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* College */}
          <div
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8
            hover:border-cyan-400
            hover:shadow-lg hover:shadow-cyan-400/20
            hover:-translate-y-2
            transition-all duration-300"
          >
            <p className="text-cyan-400 font-semibold mb-3">
              CURRENT
            </p>

            <h3 className="text-2xl font-bold mb-3">
              B.Tech AI & Data Science
            </h3>

            <p className="text-slate-400 mb-5">
              Loyola Institute of Technology
            </p>

            <p className="text-slate-500 leading-7">
              Currently pursuing my final year with an interest in
              Artificial Intelligence, Data Analytics and Cloud Computing.
            </p>
          </div>

          {/* School */}
          <div
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8
            hover:border-cyan-400
            hover:shadow-lg hover:shadow-cyan-400/20
            hover:-translate-y-2
            transition-all duration-300"
          >
            <p className="text-cyan-400 font-semibold mb-3">
              SCHOOL
            </p>

            <h3 className="text-2xl font-bold mb-3">
              Higher Secondary Education
            </h3>

            <p className="text-slate-400">
              Jani Vidyaashram Senior Secondary School
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Education