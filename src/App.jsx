import { useState } from 'react'
import './App.css'
import  Navbar from './COMPONENT/Navbar'
import Hero from './COMPONENT/Hero'
import Process from './COMPONENT/Process'
import Services from './COMPONENT/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='font-poppins '>
    <Navbar/>
    <Hero/>
    <Process/>
    <Services/>
    </div>
  )
}

export default App
