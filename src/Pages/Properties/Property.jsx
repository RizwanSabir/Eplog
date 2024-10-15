import { useEffect, useRef, useState } from 'react';

import './index.css'
import Navbar from './NavBar';
import SearchBar from './SearchBar';
import { AnimatePresence, motion } from 'framer-motion';
import ContactUs from '../Footer/ContactUs';
import Footer from '../Footer/Footer';
import NewsLetter from '../Footer/NewsLetter';
import { useNavigate } from 'react-router-dom';

const Property = ({ HeroText }) => {

    let [User, setUser] = useState(['New Projects', 'Brand']);

    const properties = [
        {
            link: "#",
            image: "https://eplogproperties.com/wp-content/uploads/2023/10/1.svg",
            alt: "Property 1",
            isForRent: true, // Use false for "For Sale"
            price: "AED 1.2 Million",
            location: "IMPZ Production City",
            building: "Building 4410 Lake side",
            beds: 4,
            bathrooms: 2,
            area: 1200,
            bedIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/bed-icon.svg",
            bathroomIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/shower-icon.svg",
            areaIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/compress-icon.svg",
        },
        {
            link: "#",
            image: "https://eplogproperties.com/wp-content/uploads/2023/10/1.svg",
            alt: "Property 1",
            isForRent: false, // Use false for "For Sale"
            price: "AED 1.2 Million",
            location: "IMPZ Production City",
            building: "Building 4410 Lake side",
            beds: 4,
            bathrooms: 2,
            area: 1200,
            bedIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/bed-icon.svg",
            bathroomIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/shower-icon.svg",
            areaIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/compress-icon.svg",
        },
        {
            link: "#",
            image: "https://eplogproperties.com/wp-content/uploads/2023/10/1.svg",
            alt: "Property 1",
            isForRent: false, // Use false for "For Sale"
            price: "AED 1.2 Million",
            location: "IMPZ Production City",
            building: "Building 4410 Lake side",
            beds: 4,
            bathrooms: 2,
            area: 1200,
            bedIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/bed-icon.svg",
            bathroomIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/shower-icon.svg",
            areaIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/compress-icon.svg",
        },
        {
            link: "#",
            image: "https://eplogproperties.com/wp-content/uploads/2023/10/1.svg",
            alt: "Property 1",
            isForRent: false, // Use false for "For Sale"
            price: "AED 1.2 Million",
            location: "IMPZ Production City",
            building: "Building 4410 Lake side",
            beds: 4,
            bathrooms: 2,
            area: 1200,
            bedIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/bed-icon.svg",
            bathroomIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/shower-icon.svg",
            areaIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/compress-icon.svg",
        },
        {
            link: "#",
            image: "https://eplogproperties.com/wp-content/uploads/2023/10/1.svg",
            alt: "Property 1",
            isForRent: false, // Use false for "For Sale"
            price: "AED 1.2 Million",
            location: "IMPZ Production City",
            building: "Building 4410 Lake side",
            beds: 4,
            bathrooms: 2,
            area: 1200,
            bedIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/bed-icon.svg",
            bathroomIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/shower-icon.svg",
            areaIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/compress-icon.svg",
        },
        {
            link: "#",
            image: "https://eplogproperties.com/wp-content/uploads/2023/10/1.svg",
            alt: "Property 1",
            isForRent: false, // Use false for "For Sale"
            price: "AED 1.2 Million",
            location: "IMPZ Production City",
            building: "Building 4410 Lake side",
            beds: 4,
            bathrooms: 2,
            area: 1200,
            bedIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/images/bad-icon-white.svg",
            bathroomIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/shower-icon.svg",
            areaIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/compress-icon.svg",
        },
    ];

    const navigate = useNavigate();

    const handleBack = () => {
        console.log("Search is Clicked")
      navigate('/SearchProperties');
    };

    return (
        <>
            <div className="pt-2 text-[14px] px-4 h-fit">


                {/* Top Navigation on Small Screen  */}
                <div className='flex mdm:hidden'>

                    <TopNavigationTab />

                </div>

                {/* Banner section */}
                <div className="relative w-full "  >
                    <div className="w-full px-[10px] mx-auto text-[10px] h-full ">
                        {/* Top Hero Section */}

                        <div className="row h-full flex">
                            <TopNavigationTabLarge />
                        </div>

                        {/* Back Button  */}
                        <div className='flex gap-x-2 text-[20px] items-center  font-bold  cursor-pointer' onClick={handleBack}>
                            <i className="fa-solid fa-arrow-left"></i>
                            <p>Back</p>
                        </div>

                        {/* Heading of the property */}
                        <div className='mt-5 space-y-3'>
                            <p className='text-[40px] items-center  font-bold '>IMPZ Production City</p>
                            <p className='text-[20px] items-center  '>Dubai UAE</p>
                        </div>

                        {/* Property Pictures */}

                        <div className='flex gap-x-6 mt-2'>
                            {/* Left Picture only one */}
                            <div>
                                <div className=' relative  rounded-3xl overflow-hidden h-full  pb-4'>
                                    <div className='w-full h-full rounded-3xl  overflow-hidden'>
                                        <img className=' w-full h-full object-cover ' src="https://eplogproperties.com/wp-content/uploads/2023/10/propert-detail1.svg" alt="" />
                                    </div>
                                </div>

                            </div>


                            {/* Right Picture two for the column */}
                            <div className='flex flex-col h-[500px]'>

                                <div className='w-[500px] h-[300px] '>
                                    <img src="https://eplogproperties.com/wp-content/uploads/2023/10/propert-detail2.svg" alt="" />
                                </div>

                                <div className='w-[500px] h-[300px] '>
                                    <img src="https://eplogproperties.com/wp-content/uploads/2023/10/propert-detail2.svg" alt="" />
                                </div>

                            </div>

                        </div>


                        {/* Property Description */}

                        <div className='flex gap-x-6 mt-2'>
                            {/* Body of the Property */}
                            <div>
                                <div className=' w-[687px]   rounded-xl    pb-4  '>
                                    {/* Color Background Box */}
                                    <div className='bg-[#7C3EFF] text-[12px] h-[104px] w-full  rounded-xl flex justify-around  items-center   text-white'>
                                        <div className="property-data flex  w-full justify-around ">
                                            <div className="bed flex items-center gap-x-1  ">
                                                <img src='https://eplogproperties.com/wp-content/themes/dtheme/assets/images/bad-icon-white.svg' width="15" alt="bed" />
                                                <p>12 Beds</p>
                                            </div>
                                            <div className="bathroom flex items-center gap-x-1 px-1">
                                                <img
                                                    src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/bathroom-icon-white.svg"
                                                    width="15"
                                                    alt="bathroom"
                                                />
                                                <p> 15  Bath</p>
                                            </div>
                                            <div className="area flex items-center gap-x-1">
                                                <img src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/compress-icon-white.svg" width="15" alt="area" />
                                                <p> 12 SQM</p>
                                            </div>
                                        </div>
                                    </div>

                                    <p className='mt-3 text-xl font-bold'>
                                        Located in the hear of Dubai 10 mintues distance from international production city
                                    </p>

                                    <p className='mt-4  text-[15px] leading-[24px]'>
                                        Lorem ipsum dolor sit amet consectetur. Vehicula habitasse massa amet at amet quam gravida ultricies. Viverra ut augue diam quis lacus velit vulputate elit. Vel quis sollicitudin nunc platea sit cras euismod egestas et. Ultrices amet adipiscing iaculis sed ullamcorper commodo tincidunt. Vitae fringilla viverra sit nunc suscipit sodales sit mi commodo. Dolor aenean et aenean at egestas. Gravida vitae diam in mauris nec diam. Ultrices rutrum neque est vulputate adipiscing pretium id. Aliquam eleifend tortor tortor mi nisl. Purus arcu nibh dictum consequat congue.
                                    </p>
                                </div>

                            </div>


                            {/* Right Picture two for the column */}
                            <div className='flex flex-col ]'>

                                <div className='w-[480px]    rounded-xl    pb-4'>
                                    <div className='bg-[#7C3EFF] text-[12px] h-[104px] w-full  rounded-xl flex justify-around  items-center   text-white'>
                                    <p className='text-2xl w-[150px] text-center flex-grow'>For Rent</p>
                                        <p className='bg-[#82DFDF] w-full h-full text-3xl text-black flex items-center justify-center font-bold'>AED 1.2 Million</p>
                                    </div>
                                    <p className='bg-[#82DFDF] w-full text-xl text-center rounded-full mt-3 p-2 text-black  font-bold'>Book a visit</p>
 
                                  <div className='flex justify-end space-x-2'>
                                  <p className='text-xl'>Share the Listing : </p>
                                    <div className='text-xl space-x-3'>
                                    <i className="fa-brands fa-facebook-f" style={{color: "#63E6BE"}}></i>
                                    </div>
                                  </div>
                                </div>

                            </div>

                        </div>




                    </div>
                </div>

                <div  className='h-[1px] px-4 w-full bg-slate-300  my-10'></div>

                <p className='text-[40px] items-center  font-bold  px-4'>Customers Also Viewed</p>

               <div className='pt-5'>
               <PropertyListing properties={properties} />
               </div>
            </div>
            <NewsLetter/>
            <Footer/>
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
        <div className="hidden mdm:flex col-6 relative pl-5 pb-10 lg:pb-14 sm:pl-9 lg:pt-5  items-center">
            <a href="https://eplogproperties.com">
                <img src="https://eplogproperties.com/wp-content/uploads/2023/10/logo-bloack.svg" width="180" alt="" />
            </a>
        </div>

        {/* Nav Bar */}
        <div className=" hidden mdm:flex col-6 relative flex justify-end">
            <Navbar />
        </div>

    </>
}

const NavBar = ({ User, setUser }) => {


    let users = [['New Projects', 'Brand'], ['Buy', 'Influencer'], ['Rent', 'User']]

    return (
        <>

            <div className="flex flex-row justify-center mt-5 text-[8px] sm:text-[12px] w-[150px] xs:w-[200px] sm:w-[250px] mx-auto bg-white rounded-full z-40  border">
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

const PropertyListing = ({ properties }) => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast, adjust multiplier as needed
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div
            className="md:ml-[100px] mt-[20px] overflow-x-scroll  flex scrollbar-hide"
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            <div className="flex space-x-5 ">
                {properties.map((property, index) => (
                    <div key={index} className="  rounded-3xl shadow-[5px_4px_44px_#00000017] w-[200px] overflow-hidden md:w-full mb-9" style={{ width: "272px" }}>
                        <a href={property.link}>
                            <div className=" bg-gray-100  ">
                                <img
                                    src={property.image}
                                    className="w-full object-cover"
                                    alt={property.alt}
                                />
                                <div className="px-4">
                                    {property.isForRent ? (
                                        <div className=" text-black my-1">For Rent</div>
                                    ) : (
                                        <div className="tag-yellow text-white px-2 my-1 rounded-full">
                                            For Sale
                                        </div>
                                    )}
                                    <h5 className="box-title text-lg font-bold">
                                        {property.price}
                                    </h5>
                                    <p className="text-cyan-500">{property.location}</p>
                                    <small className="text-gray-500 block mt-5">
                                        {property.building}
                                    </small>
                                    <div className="line my-2 border-b"></div>

                                    <div className="property-data flex justify-between text-sm pb-5 ">
                                        <div className="bed flex items-center gap-x-1 ">
                                            <img src={property.bedIcon} width="15" alt="bed" />
                                            <p>{property.beds} Beds</p>
                                        </div>
                                        <div className="bathroom flex items-center gap-x-1 px-1">
                                            <img
                                                src={property.bathroomIcon}
                                                width="15"
                                                alt="bathroom"
                                            />
                                            <p> {property.bathrooms}  Bath</p>
                                        </div>
                                        <div className="area flex items-center gap-x-1">
                                            <img src={property.areaIcon} width="15" alt="area" />
                                            <p> {property.area} SQM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Property;
