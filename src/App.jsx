
import './App.css'
import  Navbar from './COMPONENT/Navbar'
import Hero from './COMPONENT/Hero'
import Process from './COMPONENT/Process'
import Services from './COMPONENT/Services'
import Benifits from './COMPONENT/Benifits'
import About from './COMPONENT/About'
import Plans from './COMPONENT/Plans'
import Testimonial from './COMPONENT/Testimonial'
import FAQ from './COMPONENT/FAQ'
import Footer from './COMPONENT/Footer'
import { useState } from 'react'



function App() {
  
  const [activeLink, setActiveLink] = useState('');

  return (
    <div className='font-poppins scroll-smooth'>
      
    <Navbar activeLink={activeLink} setActiveLink={setActiveLink}/>
    <Hero/>
    <Process/>
    <Services/>
    <Benifits/>
    <About />
    <Plans/>
    <Testimonial/>
    <FAQ/>
    <Footer setActiveLink={setActiveLink}/>
    </div>
  )
}

export default App
