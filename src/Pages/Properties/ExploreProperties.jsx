
import React, { useRef, useState } from "react";
import { motion } from 'framer-motion';
import { div } from "framer-motion/client";

const ExploreProperties = () => {

    let [User, setUser] = useState(['New Projects', 'Brand']);

    const url = `${import.meta.env.VITE_REACT_APP_BASE_URL}`;

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

    return (
        <>

            <section className="section px-[50px] bg-slate-500">
                <h1 className="section-title-small text-white  text-center text-[20px] md:text-[40px]">
                    Explore Properties
                </h1>
                <div className="max-w-[1140px]  mx-auto">
                    <div className=" flex justify-between items-center mt-10">
                        <div className="w-full flex items-center justify-center gap-10 ">
                            <NavBar User={User} setUser={setUser} />

                            <div className="line hidden md:flex">
                                <img
                                    src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/dashed-line-black.svg"
                                    className="w-full"
                                    alt="dashed-line"
                                />
                            </div>
                            
                            <div className=" flex  gap-x-4">
                                <div className="border border-white size-[50px] rounded-full flex justify-center items-center text-white">
                                    <i className="fa-solid fa-chevron-left"></i>
                                </div>
                                <div className="border border-white size-[50px] rounded-full flex justify-center items-center text-white">
                                    <i className="fa-solid fa-chevron-right"></i>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <PropertyListing properties={properties} />

                <div>
                    <div className="bg-white w-[200px] h-[50px] rounded-full ml-auto flex justify-center gap-x-3 items-center ">
                        
                        <a
                                href={`${url}/SearchProperties/`}
                                className=" text-[16px] font-bold leading-[19.23px]"
                            >
                                View All
                            </a>
                        <div className="bg-black size-[35px] rounded-full text-white flex justify-center items-center " >
                        <i className="fa-solid fa-arrow-right"></i>
                        </div>

                    </div>
                </div>


            </section>



        </>
    )
}


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
                    <div key={index} className="  rounded-4xl shadow-[5px_4px_44px_#00000017] w-[200px]  overflow-hidden md:w-full mb-9" style={{ width: "272px" }}>
                        <a href={property.link}>
                            <div className=" bg-gray-100  ">
                                <img
                                    src={property.image}
                                    className="w-full object-cover"
                                    alt={property.alt}
                                />
                                <div className="px-4 bg-white rounded-b-3xl">
                                    {property.isForRent ? (
                                        <div className=" text-black  py-2">For Rent</div>
                                    ) : (
                                        <div className="py-2">
                                            <div className="tag-yellow text-white px-2  rounded-full">
                                                For Sale
                                            </div>
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


const NavBar = ({ User, setUser }) => {


    let users = [['Buy', 'Brand'], ['New Projects', 'Influencer'], ['Rent', 'User']]

    return (
        <>

            <div className="flex  flex-row justify-center  text-[8px] sm:text-[12px] w-[150px] xs:w-[200px] sm:w-[250px]  bg-white  rounded-full">
                <div className="flex flex-row bgColor py-1 w-full justify-around items-center rounded-3xl ">
                    {
                        users.map((user) => {
                            return (


                                user[0] === User[0] ?
                                    (<WhiteBackground key={user} user={user} setUser={setUser}>
                                        <motion.div className="absolute w-full bg-[#82DFDF] h-full top-0 left-0   rounded-full   -z-10" layoutId="explore" ></motion.div>
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





export default ExploreProperties