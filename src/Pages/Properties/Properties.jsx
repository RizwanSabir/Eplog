import React from 'react'
import HeroPropertiesSection from '../../Components/HeroPropertiesSection/HeroSection'
import PatnerSection from './PatnerSection'
import TrendingProperties from './TrendingProperties'
import ExploreProperties from './ExploreProperties'
import Blog from './Blog'
import Podcasts from './Podcasts'
import NewsLetter from '../Footer/NewsLetter'
import Footer from '../Footer/Footer'

const Properties = () => {
  return (
<>

<HeroPropertiesSection/>
<PatnerSection/>
<TrendingProperties/>
<ExploreProperties/>
<Blog/>
<Podcasts/>
<NewsLetter/>
<Footer/>
</>  

)
}

export default Properties