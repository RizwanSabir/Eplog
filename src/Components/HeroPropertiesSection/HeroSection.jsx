import { useEffect, useRef, useState } from 'react';

import './index.css'
import Navbar from './NavBar';
import { AnimatePresence, motion } from 'framer-motion';
import SearchBar from './SearchBar';


const HeroPropertiesSection = ({ HeroText }) => {
    const videoRef = useRef(null);
    let [User, setUser] = useState(['New Projects', 'Brand']);
    const [parentHeight, setParentHeight] = useState("650px");
    const [videoSrc, setVideoSrc] = useState('');

    const images = ["/2.png", "/3.png", "/4.png"];
    const [currentImage, setCurrentImage] = useState([images[0], 0]);

    const handleClick = (index) => {
        setCurrentImage([images[index], index]);
    };


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


    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImage((prev) => {
            const nextIndex = (prev[1] + 1) % images.length; // cycle through the images
            return [images[nextIndex], nextIndex];
          });
        }, 2000);
    
        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
      }, [images]);
    

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
                            {/* <video ref={videoRef} autoPlay playsInline muted loop className="w-full absolute -z-10" src={videoSrc}>
                                Your browser does not support the video tag.
                            </video> */}

                            <AnimatePresence>

                                <motion.div
                                    key={currentImage[1]}
                                    className=" h-screen z-10  w-full absolute "
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0.5, position: "absolute" }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="absolute flex justify-end   w-full z-40  top-[40%]   p-4" style={{ height: "630px" }}>
                                        <div className="flex flex-col space-y-2">
                                            {images.map((_, index) => (
                                                <div
                                                    key={index}
                                                    onClick={() => handleClick(index)}
                                                    className={`border border-white rounded-full size-[15px] cursor-pointer ${currentImage[1] === index ? 'bg-white' : ""} `}
                                                ></div>
                                            ))}
                                        </div>
                                    </div>


                                    <img className='-z-10 object-contain' src={`${currentImage[0]}`} alt="" />
                                </motion.div>
                            </AnimatePresence>

                            {/* Hero Text */}

                            <div className='w-full  text-center mt-10   z-20'>
                                <h1 className="    font-bold      xl:text-5xl tracking-tight word-spacing-[1px] text-white">
                                    Your Trusted   Source for Real  <br className="hidden md:block" />
                                    Estate Excellence  in Dubai <br className="hidden md:block" />

                                </h1>
                                {/* Search Bar Open  */}

                                <NavBar User={User} setUser={setUser} />

                                <SearchBar/>

                            </div>


                            {/* Bottom for text Marquee */}
                            <div className="w-[47%] text-[14px] p-3  overflow-hidden z-20 mdm:pt-[80px] md:pt-10   absolute xs:bottom-1 sm:-bottom-2 lg:bottom-5">
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
                            <div className="hidden md:flex mb-10 book-section z-10">
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

        <div className=' flex z-40'>
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

            <div className="flex flex-row justify-center mt-5 text-[8px] sm:text-[12px] w-[150px] xs:w-[200px] sm:w-[250px] mx-auto bg-white rounded-full z-40 ">
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
