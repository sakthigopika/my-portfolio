function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center px-6 pt-20"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>

          <p className="text-cyan-400 font-semibold text-lg mb-4">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Sakthi Gopika
            <span className="block text-cyan-400">
              Raj
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-slate-300 mb-6">
            AI & Data Science Student
          </h2>

          <p className="text-slate-400 text-lg leading-8 max-w-xl mb-8">
            Final-year B.Tech student passionate about Artificial Intelligence,
            Data Science and Cloud Computing. I enjoy learning new technologies
            and turning ideas into practical projects.
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="#projects"
              className="bg-cyan-400 text-slate-950 px-7 py-3 rounded-full font-semibold hover:bg-cyan-300 hover:scale-105 transition duration-300"
            >
              View My Projects
            </a>

            <a
              href="#about"
              className="border border-slate-700 px-7 py-3 rounded-full font-semibold hover:border-cyan-400 hover:text-cyan-400 transition duration-300"
            >
              About Me
            </a>

          </div>

        </div>

        {/* Right Visual */}
        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full"></div>

            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full border border-cyan-400/40 bg-slate-900 flex items-center justify-center shadow-2xl">

              <div className="text-center">

                <div className="text-6xl mb-5">
                  🤖
                </div>

                <p className="text-cyan-400 font-semibold text-xl">
                  AI & Data Science
                </p>

                <p className="text-slate-400 mt-2">
                  Learning • Building • Growing
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Home