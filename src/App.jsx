import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import ProgrammeSection from './components/ProgrammeSection.jsx'
import SpeakersSection from './components/SpeakersSection.jsx'
import BathSection from './components/BathSection.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProgrammeSection />
        <SpeakersSection />
        <BathSection />
      </main>
      <footer className="footer">
        <div className="footer__logo">Bath <span>ML</span></div>
        <p className="footer__tagline">1st Bath Summer School in Machine Learning</p>
        <ul className="footer__links">
          <li><a href="#about" className="footer__link">About</a></li>
          <li><a href="#programme" className="footer__link">Programme</a></li>
          <li><a href="#speakers" className="footer__link">Speakers</a></li>
          <li><a href="#bath" className="footer__link">Visit Bath</a></li>
        </ul>
        <p className="footer__copy">University of Bath · August 2026</p>
      </footer>
    </>
  )
}
