function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-900 text-white px-6 py-24 flex items-center"
    >
      <div className="max-w-5xl mx-auto w-full">

        <div className="text-center mb-12">
          <p className="text-cyan-400 font-semibold mb-3">
            GET IN TOUCH
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I'm always open to connecting, learning and exploring
            new opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Email */}
          <a
            href="mailto:sakthigopikasgr19@gmail.com"
            className="bg-slate-950 border border-slate-800 rounded-3xl p-8 text-center hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-4xl mb-5">📧</div>

            <h3 className="text-xl font-semibold mb-2">
              Email
            </h3>

            <p className="text-slate-400 text-sm break-all">
              your@email.com
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sakthi-gopika-raj-s-0356a22a1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-950 border border-slate-800 rounded-3xl p-8 text-center hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-4xl mb-5">💼</div>

            <h3 className="text-xl font-semibold mb-2">
              LinkedIn
            </h3>

            <p className="text-slate-400 text-sm">
              Connect with me
            </p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919344290619"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-950 border border-slate-800 rounded-3xl p-8 text-center hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-4xl mb-5">💬</div>

            <h3 className="text-xl font-semibold mb-2">
              WhatsApp
            </h3>

            <p className="text-slate-400 text-sm">
              Message me
            </p>
          </a>

        </div>

      </div>
    </section>
  )
}

export default Contact