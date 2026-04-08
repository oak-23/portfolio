import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import ExperienceMap from './components/ExperienceMap';
import TechStack from './components/TechStack';
import Extracurriculars from './components/Extracurriculars';
import Languages from './components/Languages';
import Accolades from './components/Accolades';
import Competitions from './components/Competitions';
import Footer from './components/Footer';
import AppBackground from './components/AppBackground';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <CustomCursor />
      <AppBackground />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Education />
        <div id="experience">
          <ExperienceMap />
        </div>
        <TechStack />
        <Languages />
        <Extracurriculars />
        <div id="accolades">
          <Accolades />
        </div>
        <Competitions />
      </main>
      <Footer />
    </div>
  );
}

export default App;
