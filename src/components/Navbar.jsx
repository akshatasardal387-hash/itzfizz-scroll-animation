function Navbar() {
  return (
    <nav className="w-full px-8 md:px-16 py-7 flex items-center justify-between border-b border-white/10">

      {/* Logo */}
      <div className="text-2xl font-black tracking-tight">
        itzfizz<span className="text-lime-400">.</span>
      </div>

      {/* Navigation */}
      <div className="hidden md:flex items-center gap-10 text-sm text-gray-300">

        <a
          href="#home"
          className="hover:text-lime-400 transition"
        >
          Home
        </a>

        <a
          href="#about"
          className="hover:text-lime-400 transition"
        >
          About
        </a>

        <a
          href="#impact"
          className="hover:text-lime-400 transition"
        >
          Our Impact
        </a>

      </div>

      {/* Contact Button */}
      <a
        href="#contact"
        className="border border-lime-400 text-lime-400 px-5 py-3 rounded-full text-sm
                   hover:bg-lime-400 hover:text-black transition"
      >
        Let's Talk ↗
      </a>

    </nav>
  )
}

export default Navbar