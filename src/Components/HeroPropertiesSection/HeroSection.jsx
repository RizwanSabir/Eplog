import { useEffect, useRef, useState } from 'react';

import './index.css'
import Navbar from './NavBar';
import { motion } from 'framer-motion';


const HeroPropertiesSection = ({ HeroText }) => {
    const videoRef = useRef(null);
    let [User, setUser] = useState(['New Projects', 'Brand']);
    const [parentHeight, setParentHeight] = useState("650px");
    const [videoSrc, setVideoSrc] = useState('');

    const updateParentHeight = () => {
        if (videoRef.current) {
            const videoHeight = videoRef.current.offsetHeight;
            setParentHeight(videoHeight + 5); // Extra 5px padding
        }
    };

    const updateVideoSource = () => {
        const newSrc = window.innerWidth >= 640
            ? "/Vector-5-1.mp4"
            : "/Mobile_Lander.mp4";
        setVideoSrc(newSrc);
    };

    useEffect(() => {
        updateVideoSource(); // Set initial video source

        const handleVideoLoad = () => {
            updateParentHeight();
        };

        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.addEventListener('loadedmetadata', handleVideoLoad);
        }

        const handleResize = () => {
            updateVideoSource();
            updateParentHeight();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            if (videoElement) {
                videoElement.removeEventListener('loadedmetadata', handleVideoLoad);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className="pt-2 text-[14px] px-4 h-fit">


                {/* Top Navigation on Small Screen  */}
                <div className='flex mdm:hidden'>

                    <TopNavigationTab />

                </div>

                {/* Banner section */}
                <div className="relative w-full " style={{ height: parentHeight }} >
                    <div className="w-full px-[10px] mx-auto text-[10px] h-full ">
                        {/* Top Hero Section */}
                        <div className="flex flex-col h-full flex">

                            <TopNavigationTabLarge />


                            {/* Video Banner Portion */}
                            <video ref={videoRef} autoPlay playsInline muted loop className="w-full absolute -z-10" src={videoSrc}>
                                Your browser does not support the video tag.
                            </video>

                            {/* Hero Text */}

                            <div className='w-full  text-center  '>
                                <h1 className="    font-bold      xl:text-5xl tracking-tight word-spacing-[1px] text-white">
                                    Your Trusted   Source for Real  <br className="hidden md:block" />
                                    Estate Excellence  in Dubai <br className="hidden md:block" />

                                </h1>
                                {/* Search Bar Open  */}

                                <NavBar User={User} setUser={setUser} />
                                
                                <div className='flex justify-center mt-5 '>
                                    <div className='bg-white relative w-[500px] h-[45px] rounded-full overflow-hidden flex '>

                                        
                                        <img className='absolute  top-[35%] left-3' src="/Svg/Search.svg" alt="" />
                                        <input className='ml-10 h-full w-[300px] outline-none text-[14px]' type="text" placeholder='Search' />
                          
        <h1 className='bg-[#82DFDF] rounded-full px-4 py-1 my-1'>Search</h1>
        <h1 className=' rounded-full px-4 py-1 my-1 cursor-pointer'>More Filters</h1>
                                    </div>
                                </div>

                            </div>


                            {/* Bottom for text Marquee */}
                            <div className="w-[47%] text-[14px] p-3 lg:mt-5 overflow-hidden z-20 mdm:pt-[80px] md:pt-10 lg:pt-[77px]  absolute -bottom-2 xs:bottom-1 sm:-bottom-2 lg:bottom-2">
                                <div className="marquee whitespace-nowrap animate-marquee w-full mr-10 ">
                                    <span className="inline-flex items-center mx-2">4 BHK For sale in Dubai Media City</span>
                                    <span className="inline-flex items-center mx-2">
                                        <img src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/dot-img.svg" width="8" className="mx-1 align-baseline" />
                                        2 BHK For sale in Jumeirah Lake Towers
                                    </span>
                                    <span className="inline-flex items-center mx-2">
                                        <img src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/dot-img.svg" width="8" className="mx-1 align-baseline" />
                                        4 BHK For sale in Dubai Media City
                                    </span>
                                </div>
                            </div>

                            {/* Hero Boxes */}
                            <div className="hidden md:flex book-section">
                                <div className="booking-box flex items-center">
                                    <img src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/calender-icon.svg" width="40" className="mr-2" />
                                    <p className="mb-0">
                                        <a href="https://eplogproperties.com/contact-us/" className="text-white">
                                            Book Free<br />Consultation
                                        </a>
                                    </p>
                                </div>
                                <div className="booking-box flex items-center ml-4 find-home">
                                    <p className="mb-0">
                                        <a href="https://eplogproperties.com/properties/" className="text-white">
                                            Find your next <br />home in Dubai
                                        </a>
                                    </p>
                                    <img src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/home-icon.svg" width="60" className="ml-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


const TopNavigationTab = () => {


    return <>

        {/* Logo of Brand */}
        <div className="col-6 relative pl-5  lg:pb-14 sm:pl-9 lg:pt-5 flex items-center">
            <a href="https://eplogproperties.com">
                <img src="https://eplogproperties.com/wp-content/uploads/2023/10/logo-bloack.svg" width="180" className="lg:hidden" alt="" />
            </a>
        </div>

        {/* Nav Bar */}
        <div className="  col-6 relative flex justify-end">
            <Navbar />
        </div>

    </>
}
const TopNavigationTabLarge = () => {


    return <>

        <div className=' flex '>
            {/* Logo of Brand */}
            <div className="hidden mdm:flex col-6 relative pl-5   h-[80px] sm:pl-9 lg:pt-5  ">
                <a href="https://eplogproperties.com">
                    <img src="https://eplogproperties.com/wp-content/uploads/2023/10/logo.svg" width="180" alt="" />
                </a>
            </div>

            {/* Nav Bar */}
            <div className=" hidden mdm:flex col-6 relative lg:flex h-[80px] justify-end">
                <Navbar />
            </div>
        </div>

    </>
}



const NavBar = ({ User, setUser }) => {


    let users = [['New Projects', 'Brand'], ['Buy', 'Influencer'], ['Rent', 'User']]

    return (
        <>

            <div className="flex flex-row justify-center mt-5 text-[8px] sm:text-[12px] w-[150px] xs:w-[200px] sm:w-[250px] mx-auto bg-white rounded-full">
                <div className="flex flex-row bgColor py-1 w-full justify-around items-center rounded-3xl ">
                    {
                        users.map((user) => {
                            return (


                                user[0] === User[0] ?
                                    (<WhiteBackground key={user} user={user} setUser={setUser}>
                                        <motion.div className="absolute w-full bg-[#82DFDF] h-full top-0 left-0   rounded-full   -z-10" layoutId="underline" ></motion.div>
                                    </WhiteBackground>


                                    ) : <WhiteBackground key={user} user={user} setUser={setUser} />

                            );
                        })
                    }




                </div>
            </div>


        </>
    )
}

const WhiteBackground = ({ user, setUser, children }) => {
    return (
        <motion.div key={user} onMouseEnter={() => { setUser(user) }} className={`poppins-regular px-4 py-1   relative z-30 cursor-pointer`}>
            <h1 >{user[0]}</h1>
            {children}


        </motion.div>
    );
};


export default HeroPropertiesSection;
