import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeIndex from "./Pages/Home/HomeIndex";
import HeroAboutSection from "./Components/HeroAboutSection/HeroSection";
import About from "./Pages/AboutUs/About";
import ServiceIndex from "./Pages/Services/ServiceIndex";
import BlogSection from "./Pages/Home/BlogSection";
import BlogIndex from "./Pages/Blogs/BlogIndex";
import CareerIndex from "./Pages/Career/CareerIndex";
import ContactIndex from "./Pages/ContactUs/ContactIndex";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeIndex />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/services" element={<ServiceIndex />} />
                <Route path="/blogs" element={<BlogIndex />} />
                <Route path="/career/" element={<CareerIndex />} />
                <Route path="/contact-us" element={<ContactIndex />} />
            </Routes>
        </Router>
    );
}
