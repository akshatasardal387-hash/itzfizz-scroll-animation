import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Impact from "./components/Impact"
import Contact from "./components/Contact"

function App() {
  return (
    <main className="min-h-screen bg-[#11120f] text-white">
      <Navbar />
      <Hero />
      <Impact />
      <Contact />
    </main>
  )
}

export default App