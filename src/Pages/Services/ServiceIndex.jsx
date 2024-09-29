import React from 'react'
import HeroAboutSection from '../../Components/HeroAboutSection/HeroSection'
import HeroServiceSection from '../../Components/HeroServiceSection/HeroSection'
import ServiceSection from './ServiceSection'
import ScreenSizeDisplay from '../../Hooks/useCurrentScreenSize'
import FooterMain from '../Footer/FooterMain'

const ServiceIndex = () => {
  return (
  
<>
{/* <ScreenSizeDisplay/> */}
<HeroServiceSection/>
<ServiceSection/>
<FooterMain/>

</>

)
}

export default ServiceIndex