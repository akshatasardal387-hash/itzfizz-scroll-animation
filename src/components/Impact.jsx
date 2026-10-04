function Impact() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#11120f] text-white px-8 md:px-16 py-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Label */}

        <p className="text-xs uppercase tracking-[0.3em] text-lime-400 mb-6">
          Our approach
        </p>

        {/* Heading */}

        <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl leading-tight">
          Digital experiences
          <span className="text-gray-500">
            {" "}that move with people.
          </span>
        </h2>

        {/* Description */}

        <p className="mt-8 max-w-2xl text-gray-400 text-base md:text-lg leading-8">
          We combine design, technology and interaction to create
          digital experiences that feel simple, useful and memorable.
        </p>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-5 mt-14">

          {/* Card 1 */}

          <div className="group border border-white/10 rounded-2xl p-7
                          transition-all duration-500
                          hover:border-lime-400/50
                          hover:-translate-y-2">

            <p className="text-lime-400 text-sm mb-5">
              01
            </p>

            <h3 className="text-xl font-semibold mb-3 group-hover:text-lime-400 transition">
              Thoughtful Design
            </h3>

            <p className="text-gray-500 leading-7 text-sm">
              Clean interfaces designed around real user needs and
              meaningful interactions.
            </p>

          </div>

          {/* Card 2 */}

          <div className="group border border-white/10 rounded-2xl p-7
                          transition-all duration-500
                          hover:border-lime-400/50
                          hover:-translate-y-2">

            <p className="text-lime-400 text-sm mb-5">
              02
            </p>

            <h3 className="text-xl font-semibold mb-3 group-hover:text-lime-400 transition">
              Smart Technology
            </h3>

            <p className="text-gray-500 leading-7 text-sm">
              Modern development techniques that keep experiences
              fast, responsive and reliable.
            </p>

          </div>

          {/* Card 3 */}

          <div className="group border border-white/10 rounded-2xl p-7
                          transition-all duration-500
                          hover:border-lime-400/50
                          hover:-translate-y-2">

            <p className="text-lime-400 text-sm mb-5">
              03
            </p>

            <h3 className="text-xl font-semibold mb-3 group-hover:text-lime-400 transition">
              Smooth Interaction
            </h3>

            <p className="text-gray-500 leading-7 text-sm">
              Motion and interaction used carefully to make every
              scroll and transition feel natural.
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Impact