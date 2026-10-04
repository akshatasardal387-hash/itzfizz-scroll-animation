function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[70vh] bg-[#11120f] text-white px-8 md:px-16 py-24 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-xs uppercase tracking-[0.3em] text-lime-400 mb-8">
          Let's connect
        </p>

        <h2 className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl leading-tight">
          Have an idea?
          <span className="text-gray-500">
            {" "}Let's build it.
          </span>
        </h2>

        <p className="mt-8 max-w-xl text-gray-400 leading-7">
          We create thoughtful digital experiences using design,
          technology and smooth interactions.
        </p>

        <a
          href="mailto:hello@itzfizz.com"
          className="inline-flex mt-10 border border-lime-400 text-lime-400 px-7 py-4 rounded-full
                     hover:bg-lime-400 hover:text-black transition duration-300"
        >
          Start a conversation ↗
        </a>

      </div>
    </section>
  )
}

export default Contact