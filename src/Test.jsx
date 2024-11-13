import { useEffect, useRef, useState } from 'react';

import './index.css'
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Components/NavBar';



const Test = ({ HeroText }) => {
    const videoRef = useRef(null);
    const url = `${import.meta.env.VITE_REACT_APP_BASE_URL}`;
    const [parentHeight, setParentHeight] = useState("650px");
    const [videoSrc, setVideoSrc] = useState('');
    const screenSize = useCurrentScreenSize(); // Get the current screen size

  
    // Define images based on screen size
    const images = {
        xxs: ["xs1.jpg", "xs2.jpg", "xs3.jpg"],
        xs: ["xs1.jpg", "xs2.jpg", "xs3.jpg"],
        sm: ["sm1.jpg", "sm2.jpg", "sm3.jpg"],
        mdm: ["lg1.png", "lg1.png", "lg1.png"],
        md: ["lg1.png", "lg1.png", "lg1.png"],
        lg: ["lg1.png", "lg2.png", "lg3.png"],
        xl: ["xl1.jpg", "xl2.jpg", "xl3.jpg"],
        "2xl": ["xl1.jpg", "xl2.jpg", "xl3.jpg"]
    };

 

    // Set initial images based on current screen size
    const getImagesForScreen = () => {
        if (screenSize === '2xl') return images["2xl"];
        if (screenSize === 'xl') return images.xl;
        if (screenSize === 'lg') return images.lg;
        if (screenSize === 'mdm') return images.lg;
        if (screenSize === 'md') return images.lg;
        if (screenSize === 'sm') return images.sm;
        return images.xs;
    };

    const [currentImages, setCurrentImages] = useState(getImagesForScreen);
    const [currentImage, setCurrentImage] = useState([currentImages[0], 0]);


    useEffect(() => {
        let images=getImagesForScreen()
        setCurrentImages(images);
        setCurrentImage([images[0], 0]); // Reset to the first image for new screen size
    }, [screenSize]);

    const handleClick = (index) => {
        setCurrentImage([currentImages[index], index]);
    };

  

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => {
                console.log("Previous is")
                console.log(prev[1])
                console.log("Current images length is ")
                console.log(currentImages.length)
                const nextIndex = (prev[1] + 1) % currentImages.length; // cycle through the images
                
                console.log("Currernt index is ")
                console.log(nextIndex)
                return [currentImages[nextIndex], nextIndex];
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [currentImages]);


  

 

    return (
        <>
            <div className="pt-2 text-[14px] px-4 h-fit">


                {/* Top Navigation on Small Screen  */}
                <div className='flex mdm:hidden'>

                    <TopNavigationTab />

                </div>

                {/* Banner section */}
                <div className="relative w-full " style={{ height: parentHeight }} >
                    <div className="w-full  mx-auto text-[10px] h-full ">
                        {/* Top Hero Section */}
                        <div className="flex flex-col h-full flex">

                            <TopNavigationTabLarge />





                            <AnimatePresence>

                                <motion.div
                                    key={currentImage[1]}
                                    className=" h-screen z-10  w-full absolute "
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0.5, position: "absolute" }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="absolute flex justify-end   w-full z-40 sm:top-[20%] mdm:top-[25%] md:top-[30%]  lg:top-[35%] xl:top-[40%]   p-4" style={{ height: "630px" }}>
                                        <div className="flex flex-col space-y-2">
                                            {currentImages.map((_, index) => (
                                                <div
                                                    key={index}
                                                    onClick={() => handleClick(index)}
                                                    className={`border border-white rounded-full size-[15px] cursor-pointer ${currentImage[1] === index ? 'bg-white' : ""} `}
                                                ></div>
                                            ))}
                                        </div>
                                    </div>


                                    <img className='-z-10 object-contain' src={`/images/${currentImage[0]}`} alt="" />
                                </motion.div>
                            </AnimatePresence>

                            {/* Hero Text */}

                            <div className='w-full  text-center mt-10   z-20'>
                                <h1 className="    font-bold sm:text-2xl mdm:text-3xl  md:text-4xl   lg:text-4xl  xl:text-5xl tracking-tight word-spacing-[1px] text-white">
                                    Your Trusted   Source for Real  <br className=" block" />
                                    Estate Excellence  in Dubai <br className="block" />

                                </h1>
                                {/* Search Bar Open  */}


                                {/* <NavBarProvider>
                                    <NavBar />
                                    <SearchBar />
                                </NavBarProvider> */}

                            </div>




                            {/* Hero Boxes */}
                            <div className="hidden md:flex   md:mb-40 lg:mb-32 xl:mb-10 book-section z-10">
                                <div className="booking-box w-[190px] h-[100px]">
                                    <img src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/calender-icon.svg" width="40" className="mr-2 hidden  lg:block" />
                                    <p className="mb-0">
                                        <a href={`${url}/contact-us/`} className="text-white">
                                            Book Free<br />Consultation
                                        </a>
                                    </p>
                                </div>
                                <div className="booking-box w-[190px] h-[100px]  md:p-[5px]  flex items-center ml-4 ">
                                    <p className="mb-0">
                                        <a href={`${url}/properties/`} className="text-white">
                                            Find your next <br />home in Dubai
                                        </a>
                                    </p>
                                    <img className="hidden lg:block" src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/home-icon.svg" width="60"  />
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
            <div className="hidden mdm:flex col-6 relative pl-5   h-[80px] sm:pl-9 mdm:pt-9 md:pt-7 lg:pt-5  ">
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





const NavBar = () => {
    // const { User, setUser } = useNavBar();

    let users = [['New Projects', 'NEW'], ['Buy', 'BUY'], ['Rent', 'RENT']]

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



// Define the breakpoints
const breakpoints = {
    xxs:'290px',
    xs: '490px',
    sm: '640px',
    mdm: '768px',
    md: '900px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  };
  
  // Custom hook to get the current screen size
  const useCurrentScreenSize = () => {
    const [screenSize, setScreenSize] = useState(getScreenSize());
  
    useEffect(() => {
      const mediaQueries = Object.keys(breakpoints).map((key) => {
        const mediaQuery = window.matchMedia(`(min-width: ${breakpoints[key]})`);
        const handleChange = () => setScreenSize(getScreenSize());
        mediaQuery.addListener(handleChange);
        return { key, mediaQuery, handleChange };
      });
  
      // Cleanup function to remove event listeners
      return () => {
        mediaQueries.forEach(({ mediaQuery, handleChange }) => {
          mediaQuery.removeListener(handleChange);
        });
      };
    }, []);
  
    return screenSize;
  };
  
  // Helper function to get the current screen size
  const getScreenSize = () => {
    const width = window.innerWidth;
    if (width >= parseInt(breakpoints['2xl'])) return '2xl';
    if (width >= parseInt(breakpoints.xl)) return 'xl';
    if (width >= parseInt(breakpoints.lg)) return 'lg';
    if (width >= parseInt(breakpoints.md)) return 'md';
    if (width >= parseInt(breakpoints.mdm)) return 'mdm';
    if (width >= parseInt(breakpoints.sm)) return 'sm';
    if (width >= parseInt(breakpoints.xs)) return 'xs';
    if (width >= parseInt(breakpoints.xxs)) return 'xxs';
    return 'base';
  };
  



export default Test;
