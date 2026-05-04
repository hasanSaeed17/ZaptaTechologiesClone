import Navbar from './components/common/Navbar/Navbar'
import Footer from './components/common/Footer/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Team from './pages/Teams'
import Careers from './pages/Careers'

import { Routes, Route } from "react-router-dom";

function App() {

  return (
   
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>

      <Footer />
    </>

  )
}

export default App
