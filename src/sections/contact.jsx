function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-900 text-white px-6 py-24 flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full text-center">

        <p className="text-cyan-400 font-semibold mb-2">
          GET IN TOUCH
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's <span className="text-cyan-400">Connect</span>
        </h2>

        <p className="text-slate-400 text-lg mb-10">
          I'm always interested in learning, collaborating and exploring
          new opportunities in technology.
        </p>

        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8">

          <p className="text-slate-300 mb-4">
            📧 Email
          </p>

          <p className="text-cyan-400 text-lg mb-6">
            Your Email Here
          </p>

          <p className="text-slate-300 mb-4">
            💼 LinkedIn
          </p>

          <p className="text-cyan-400 text-lg">
            Your LinkedIn Profile
          </p>

        </div>

      </div>
    </section>
  )
}

export default Contact