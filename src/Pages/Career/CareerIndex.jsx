import React from 'react'
import HeroCareerSection from '../../Components/HeroCareerSection/HeroSection'
import Hiring from './Hiring'
import ScreenSizeDisplay from '../../Hooks/useCurrentScreenSize'
import FooterMain from '../Footer/FooterMain'
import NewsLetter from '../Footer/NewsLetter'
import Footer from '../Footer/Footer'

const CareerIndex = () => {
  return (
 
<>

{/* <ScreenSizeDisplay/> */}
<HeroCareerSection/>
<Hiring/>
<NewsLetter/>
<Footer/>
</>

)

}

export default CareerIndex