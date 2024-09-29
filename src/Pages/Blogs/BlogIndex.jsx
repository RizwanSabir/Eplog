import React from 'react'
import HeroBlogSection from '../../Components/HeroBlogSection/HeroSection'
import BlogSection from './BlogSection'
import ScreenSizeDisplay from '../../Hooks/useCurrentScreenSize'
import Footer from '../Footer/Footer'
import FooterMain from '../Footer/FooterMain'

const BlogIndex = () => {
  return (
    <>
    
    {/* <ScreenSizeDisplay/> */}
    <HeroBlogSection/>
    <BlogSection/>
    <FooterMain/>
    </>
  )
}

export default BlogIndex