function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6"
    >
      <div className="max-w-4xl text-center">

        <p className="text-cyan-400 text-lg mb-4">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Sakthi Gopika Raj
        </h1>

        <h2 className="text-2xl md:text-3xl text-slate-300 mb-6">
          B.Tech AI & Data Science Student
        </h2>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
          Passionate about Artificial Intelligence, Data Science and
          Cloud Computing. I enjoy learning new technologies and
          building meaningful projects.
        </p>

        <a
          href="#projects"
          className="inline-block bg-cyan-400 text-slate-950 px-7 py-3 rounded-full font-semibold hover:bg-cyan-300 transition"
        >
          Explore My Work
        </a>

      </div>
    </section>
  )
}

export default Home