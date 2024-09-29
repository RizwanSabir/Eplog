import React from 'react'
import HeroCareerSection from '../../Components/HeroCareerSection/HeroSection'
import Hiring from './Hiring'
import ScreenSizeDisplay from '../../Hooks/useCurrentScreenSize'
import FooterMain from '../Footer/FooterMain'

const CareerIndex = () => {
  return (
 
<>

{/* <ScreenSizeDisplay/> */}
<HeroCareerSection/>
<Hiring/>
<FooterMain/>

</>

)

}

export default CareerIndex