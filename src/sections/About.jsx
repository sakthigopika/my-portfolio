function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-900 text-white flex items-center px-6 py-24"
    >
      <div className="max-w-6xl mx-auto w-full">

        <div className="mb-12">
          <p className="text-cyan-400 font-semibold mb-3">
            ABOUT ME
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            A little about <span className="text-cyan-400">me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Who I Am */}
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8
            hover:border-cyan-400
            hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
            hover:-translate-y-1
            transition-all duration-300"
          >

            <h3 className="text-2xl font-bold mb-5">
              Who I Am
            </h3>

            <p className="text-slate-400 text-lg leading-8 mb-5">
              I am a final-year B.Tech Artificial Intelligence and Data Science
              student with a strong interest in Artificial Intelligence,
              Data Science and Cloud Computing.
            </p>

            <p className="text-slate-400 text-lg leading-8">
              I enjoy exploring new technologies and applying what I learn
              through practical projects. I am continuously working on
              improving my technical and analytical skills.
            </p>

          </div>

          {/* What I'm Exploring */}
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8
            hover:border-cyan-400
            hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
            hover:-translate-y-1
            transition-all duration-300"
          >

            <h3 className="text-2xl font-bold mb-6">
              What I'm Exploring
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <span className="text-2xl">🤖</span>

                <div>
                  <h4 className="font-semibold">
                    Artificial Intelligence
                  </h4>

                  <p className="text-slate-500 text-sm">
                    Exploring AI concepts and applications
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl">📊</span>

                <div>
                  <h4 className="font-semibold">
                    Data Analytics
                  </h4>

                  <p className="text-slate-500 text-sm">
                    Learning analytics and Power BI
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl">☁️</span>

                <div>
                  <h4 className="font-semibold">
                    Cloud Computing
                  </h4>

                  <p className="text-slate-500 text-sm">
                    Building my foundation in cloud technologies
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About