import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Programs from "./components/Programs"
import Trainers from "./components/Trainers" 
import Pricing from "./components/Pricing" 
import Footer from "./components/Footer"
function App() {
  return (
    <div>
      <div className="bg-[#0a0a0a] min-h-screen"></div>
      <Navbar />
      <Hero />
      <Programs />
      <Trainers />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App