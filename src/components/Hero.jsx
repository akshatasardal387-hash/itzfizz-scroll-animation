import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Stats from "./Stats"

gsap.registerPlugin(ScrollTrigger)

function Hero() {
  const heroRef = useRef(null)
  const visualRef = useRef(null)
  const headingRef = useRef(null)
  const descriptionRef = useRef(null)
  const statsRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // 1. Initial page animation

      const intro = gsap.timeline()

      intro.from(descriptionRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })

      intro.from(
        headingRef.current,
        {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.4"
      )

      intro.from(
        statsRef.current.children,
        {
          y: 25,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.5"
      )

      // 2. Main visual scroll animation

      gsap.to(visualRef.current, {
        x: -180,
        y: 80,
        scale: 1.45,
        rotation: 180,

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },

        ease: "none",
      })

      // 3. Heading scroll movement

      gsap.to(headingRef.current, {
        y: -120,
        scale: 0.85,

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "70% top",
          scrub: 1,
        },

        ease: "none",
      })

      // 4. Description movement

      gsap.to(descriptionRef.current, {
        y: -80,

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "50% top",
          scrub: 1,
        },

        ease: "none",
      })

      // 5. Stats movement

      gsap.to(statsRef.current, {
        y: 100,
        opacity: 0,

        scrollTrigger: {
          trigger: heroRef.current,
          start: "40% top",
          end: "75% top",
          scrub: 1,
        },

        ease: "none",
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-[70vh] overflow-hidden"
    >

      {/* Sticky Hero Screen */}

      <div className="sticky top-0 h-screen overflow-hidden px-8 md:px-16 py-16">

        {/* Small top label */}

        <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-gray-400 uppercase">

          <span className="w-2 h-2 rounded-full bg-lime-400"></span>

          Digital experiences / 2026

        </div>

        {/* Main Content */}

        <div className="relative z-10 mt-20 md:mt-24">

          <p
            ref={descriptionRef}
            className="max-w-md text-gray-400 text-sm md:text-base leading-7 mb-8"
          >
            We build digital experiences that combine thoughtful design,
            technology and meaningful interactions.
          </p>

          <h1
            ref={headingRef}
            className="text-[15vw] md:text-[10vw] leading-[0.82] font-black tracking-[-0.06em]"
          >
            WELCOME
            <br />

            <span className="text-lime-400">
              ITZFIZZ.
            </span>

          </h1>

        </div>

        {/* Main Animated Visual */}

       <div className="absolute right-[5%] top-[38%] md:right-[8%] md:top-[42%] scale-[0.65] md:scale-100">

          <div className="relative w-64 h-64">

            {/* Outer Ring */}

            <div className="absolute inset-0 rounded-full border border-lime-400/25"></div>

            {/* Second Ring */}

            <div className="absolute inset-6 rounded-full border border-lime-400/40"></div>

            {/* Glow */}

            <div className="absolute inset-14 rounded-full bg-lime-400/10 blur-xl"></div>

            {/* Inner Circle */}

            <div className="absolute inset-16 rounded-full bg-lime-400 shadow-[0_0_90px_rgba(163,230,53,0.5)]"></div>

            {/* Top Marker */}

            <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-px h-12 bg-lime-400/60"></div>

            {/* Right Marker */}

            <div className="absolute top-1/2 -right-10 w-12 h-px bg-lime-400/60"></div>

            {/* Bottom Marker */}

            <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-px h-12 bg-lime-400/40"></div>

            {/* Small Orbit Dot */}

            <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-lime-400"></div>

          </div>

        </div>

        {/* Statistics */}

        <Stats ref={statsRef} />

        {/* Scroll indicator */}

        <div className="absolute bottom-10 right-8 md:right-16 text-xs text-gray-500 tracking-widest uppercase">
          Scroll ↓
        </div>

      </div>

    </section>
  )
}

export default Hero