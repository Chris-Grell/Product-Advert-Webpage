import React, {useState} from 'react'
import HeroSection from '../components/herosection'
import InfoSection from '../components/infosection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/infosection/data'
import Models from '../components/models'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'


const Home = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <HeroSection />
    <InfoSection {...homeObjOne}/>
    <InfoSection {...homeObjTwo}/>
    <InfoSection {...homeObjThree}/>
    <Models />
    <Footer />
    </>
  )
}

export default Home