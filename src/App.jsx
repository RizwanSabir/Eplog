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

import PriceFilter from "./PriceFilter";
import NavbarWithDropdown from "./PriceFilter";
import SearchBar from "./Components/SearchBar/SearchBar";
import NewProperty from "./Pages/Property/NewProperty";
import BuyProperty from "./Pages/Property/BuyProperty";
import SellProperty from "./Pages/Property/SellProperty";


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
                {/* <Route path="/" element={<HomeIndex />} />
                {/* <Route path="/properties" element={<SearchProperties />} /> 
                <Route path="/SearchProperties" element={<SearchProperties />} />
                <Route path="/property" element={<Property />} />  
                <Route path="/" element={<Properties />} /> */}
                <Route path="/properties" element={<SearchProperties />} /> 
                <Route path="/property/new" element={<NewProperty />} />
                <Route path="/property/sell" element={<BuyProperty />} />
                <Route path="/property/rent" element={<SellProperty />} />

                
            </Routes>
        </Router>
        
        
        </div></>
    );
}
