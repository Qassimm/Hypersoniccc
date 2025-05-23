
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



function App() {
  

  return (
    <div className='font-poppins '>
    <Navbar/>
    <Hero/>
    <Process/>
    <Services/>
    <Benifits/>
    <About/>
    <Plans/>
    <Testimonial/>
    <FAQ/>
    <Footer/>
    </div>
  )
}

export default App
