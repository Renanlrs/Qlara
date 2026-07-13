import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FoodShowcase from './components/FoodShowcase'
import Benefits from './components/Benefits'
import Services from './components/Services'
import AppPreview from './components/AppPreview'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink text-white">
      <Navbar />
      <main>
        <Hero />
        <FoodShowcase />
        <Benefits />
        <Services />
        <AppPreview />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
