import { useEffect, useRef, useState } from 'react';

import './index.css'
import Navbar from './NavBar';
import SearchBar from './SearchBar';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HeroSearchSection = ({HeroText}) => {
   
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
            bedIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/bed-icon.svg",
            bathroomIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/shower-icon.svg",
            areaIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/compress-icon.svg",
        },
    ];

    const navigate = useNavigate();

    const handleClickItem = () => {
        console.log("Search is Clicked")
      navigate('/property');
    };
 
    return (
        <>
            <div className="pt-2 text-[14px] px-4 h-fit">


             <h1 className='text-4xl font-bold  mx-5'>Explore Properties</h1>

                <PropertyListing properties={properties} handleClickItem={handleClickItem} />
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



const PropertyListing = ({ properties ,handleClickItem}) => {


    return (
        <div
            className="md:ml-[100px] mt-[20px] overflow-x-scroll  flex scrollbar-hide"
          
        >
            <div className="grid grid-cols-4  w-full">
                {properties.map((property, index) => (
                    <div  onClick={handleClickItem} key={index} className="  rounded-3xl shadow-[5px_4px_44px_#00000017] w-[200px] overflow-hidden md:w-full mb-9" style={{ width: "272px" }}>
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
export default HeroSearchSection;
