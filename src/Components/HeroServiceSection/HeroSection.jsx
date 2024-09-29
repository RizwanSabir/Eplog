import { useEffect, useRef, useState } from 'react';
import './index.css'
import Navbar from '../HeroSection/NavBar';
const HeroServiceSection = ({ HeroText }) => {
    const videoRef = useRef(null);
    const [parentHeight, setParentHeight] = useState("600px");
    const [videoSrc, setVideoSrc] = useState('');

    const updateParentHeight = () => {
        if (videoRef.current) {
            const videoHeight = videoRef.current.offsetHeight;
            setParentHeight(videoHeight + 5); // Extra 5px padding
        }
    };

    const updateVideoSource = () => {
        const newSrc = window.innerWidth >= 640
            ? "https://eplogproperties.com/wp-content/uploads/2023/11/Services.mp4"
            : "https://eplogproperties.com/wp-content/uploads/2023/11/Lander_2.mp4";
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
                        <div className="row h-full flex">

                            <TopNavigationTabLarge />


                            {/* Video Banner Portion */}
                            <video ref={videoRef} autoPlay playsInline muted loop className="w-full absolute -z-10" src={videoSrc}>
                                Your browser does not support the video tag.
                            </video>

                            {/* Hero Text */}

                            <div className=' w-full flex justify-between '>


                                <div className="w-full  flex-grow   flex flex-col justify-center items-center mdm:justify-start
                             mdm:items-start sm:items-start h-full  mb-[85px] px-3 md:w-7/12  md:pl-9
                              z-10 sm:mb-6 text-white  lg:w-7/12  ">
                                    <h1 className="banner-title text-3xl xs:text-6xl sm:text-4xl xxs:text-5xl  xxs:relative xxs:-top-16 xs:-top-32  sm:top-16  sm:static   font-bold     leading-[3.5rem] xl:text-[80px] xl:leading-[4rem] tracking-tight word-spacing-[3px]">
                                        <h1 className="banner-title">Comprehensive <br className="hidden md:block" />real estate services <br className="hidden md:block" />tailored for You</h1>
                                    </h1>

                                    {/* Buttons */}
                                    <div className="mt-12 sm:mt-12 mdm:mt-9 text-[14px] flex flex-col gap-4 sm:flex-row">
                                        <div>
                                            <a href="https://eplogproperties.com/contact-us/" className="bg-primary btn text-white py-2 px-5 rounded hover:bg-transparent hover:border-primary hover:text-primary" target="_self">
                                                Get In Touch
                                            </a>
                                        </div>
                                        <div>
                                            <a href="#" className="btn border border-white text-white py-2 px-4 rounded hover:border-white hover:text-black hover:bg-white" target="_self">
                                                Learn More
                                            </a>
                                        </div>
                                    </div>

                                </div>

                                <div className="hidden md:flex  w-5/12 leading-[40px] ">
                                    <div className=" booking-box mx-auto  flex flex-col  w-10/12 px-6 pt-9 pb-9  h-fit">

                                        <p className='text-[27px] font-light'>Book a property  for evaluation</p>
                                        <p className='text-[14px] mt-2  font-light'>Our roster of prospective clients, in-depth community information, and established trust are three factors that attract people to us.</p>

                                        <input
                                            className='rounded-2xl px-3 py-[10px] w-full mt-1 placeholder:text-gray-400 placeholder:font-light focus:outline-none focus:ring-1 focus:ring-gray-500 text-black font-light'
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder='Name'
                                        />
                                        <input
                                            className='rounded-2xl px-3 py-[10px] w-full mt-1 placeholder:text-gray-400 placeholder:font-light focus:outline-none focus:ring-1 focus:ring-gray-500 text-black font-light'
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder='Enter your email address'
                                        />
                                        <input
                                            className='rounded-2xl px-3 py-[10px] w-full mt-1 placeholder:text-gray-400 placeholder:font-light focus:outline-none focus:ring-1 focus:ring-gray-500 text-black font-light'
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder='Enter Your Contact Number'
                                        />
                                        <input
                                            className='rounded-2xl px-3 py-[10px] w-full mt-1 placeholder:text-gray-400 placeholder:font-light focus:outline-none focus:ring-1 focus:ring-gray-500 text-black font-light'
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder='Enter your address'
                                        />

                                        <div className='mr-auto mt-3' >
                                            <a href="https://eplogproperties.com/contact-us/" className="bg-primary btn text-white py-2 px-5 rounded hover:bg-transparent hover:border-primary hover:text-primary" target="_self">
                                                Submit
                                            </a>
                                        </div>
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
        <div className="col-6 relative pl-5 pb-10 lg:pb-14 sm:pl-9 lg:pt-5 flex items-center">
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

        {/* Logo of Brand */}
        <div className="hidden mdm:flex col-6 relative pl-5  lg:pb-3 sm:pl-9   items-center">
            <a href="https://eplogproperties.com">
                <img src="https://eplogproperties.com/wp-content/uploads/2023/10/logo.svg" width="180" alt="" />
            </a>
        </div>

        {/* Nav Bar */}
        <div className=" hidden mdm:flex col-6 relative flex justify-end">
            <Navbar />
        </div>

    </>
}


export default HeroServiceSection;
