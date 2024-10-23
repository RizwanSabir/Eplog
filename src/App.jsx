import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeIndex from "./Pages/Home/HomeIndex";
import HeroAboutSection from "./Components/HeroAboutSection/HeroSection";
import About from "./Pages/AboutUs/About";
import ServiceIndex from "./Pages/Services/ServiceIndex";
import BlogSection from "./Pages/Home/BlogSection";
import BlogIndex from "./Pages/Blogs/BlogIndex";
import CareerIndex from "./Pages/Career/CareerIndex";
import ContactIndex from "./Pages/ContactUs/ContactIndex";
import Properties from "./Pages/Properties/Properties";
import Podcasts from "./Pages/Properties/Podcasts";
import MeetTeam from "./Pages/Properties/MeetTeam";
import SearchProperties from "./Pages/Properties/SearchProperties";
import Property from "./Pages/Properties/Property";

export default function App() {
    return (
      <>
      <div className="max-w-[1280px] mx-auto">
      <Router>
            <Routes>
                <Route path="/" element={<Properties />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/services" element={<ServiceIndex />} />
                <Route path="/blogs" element={<BlogIndex />} />
                <Route path="/career/" element={<CareerIndex />} />
                <Route path="/contact-us" element={<ContactIndex />} />
                {/* <Route path="/" element={<HomeIndex />} /> */}
                <Route path="/properties" element={<SearchProperties />} />
                <Route path="/SearchProperties" element={<SearchProperties />} />
                <Route path="/property" element={<Property />} />

                
            </Routes>
        </Router></div></>
    );
}
