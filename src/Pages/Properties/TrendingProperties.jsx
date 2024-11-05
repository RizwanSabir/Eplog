
import React, { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import CustomLoader from "../../Components/Loaders/CustomLoader";
import ScrollProperty from "../../Components/ScrollProperty/ScrollProperty";

const TrendingProperties = () => {

    let [User, setUser] = useState(['New Projects', 'NEW']);
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

            <section className="section px-[50px] ">
                <div className="max-w-[1140px]  mx-auto">
                    <div className=" flex justify-between items-center ">
                        <div className="w-full flex items-center justify-center gap-10">
                            <h1 className="section-title-small  text-[20px] md:text-[40px]">
                                Trending<br />
                                Properties
                            </h1>
                            <div className="line hidden md:flex">
                                <img
                                    src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/dashed-line-black.svg"
                                    className="w-full"
                                    alt="dashed-line"
                                />
                            </div>
                            <a
                                href={`${url}/SearchProperties/`}
                                className=" w-[150px]  text-[16px] font-bold leading-[19.23px]  btn-primary text-center py-2 bg-blue-500 text-white py-1 px-2 rounded-[14px]"
                            >
                                View All
                            </a>
                        </div>
                    </div>
                </div>

                <NavBar User={User} setUser={setUser} />

                {/* <HeroSearchSection User={User}/> */}
                <ScrollProperty  User={User} Page={1}/>

{/* Previously Shown over herer */}
                {/* <PropertyListing properties={properties} /> */}



            </section>



        </>
    )
}





const NavBar = ({ User, setUser }) => {


    let users = [['New Projects', 'NEW'], ['Buy', 'BUY'], ['Rent', 'RENT']]

    return (
        <>

            <div className="flex  flex-row justify-center mt-10 text-[8px] sm:text-[12px] w-[150px] xs:w-[200px] sm:w-[250px]  border  rounded-full">
                <div className="flex flex-row bgColor py-1 w-full justify-around items-center rounded-3xl ">
                    {
                        users.map((user) => {
                            return (


                                user[0] === User[0] ?
                                    (<WhiteBackground key={user} user={user} setUser={setUser}>
                                        <motion.div className="absolute w-full bg-[#82DFDF] h-full top-0 left-0   rounded-full   -z-10" layoutId="trending" ></motion.div>
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

// const PropertyListing = ({ properties }) => {
//     const scrollRef = useRef(null);
//     const [isDragging, setIsDragging] = useState(false);
//     const [startX, setStartX] = useState(0);
//     const [scrollLeft, setScrollLeft] = useState(0);

//     const handleMouseDown = (e) => {
//         setIsDragging(true);
//         setStartX(e.pageX - scrollRef.current.offsetLeft);
//         setScrollLeft(scrollRef.current.scrollLeft);
//     };

//     const handleMouseLeave = () => {
//         setIsDragging(false);
//     };

//     const handleMouseUp = () => {
//         setIsDragging(false);
//     };

//     const handleMouseMove = (e) => {
//         if (!isDragging) return;
//         e.preventDefault();
//         const x = e.pageX - scrollRef.current.offsetLeft;
//         const walk = (x - startX) * 2; // Scroll-fast, adjust multiplier as needed
//         scrollRef.current.scrollLeft = scrollLeft - walk;
//     };

//     return (
//         <div
//             className="md:ml-[100px] mt-[20px] overflow-x-scroll  flex scrollbar-hide"
//             ref={scrollRef}
//             onMouseDown={handleMouseDown}
//             onMouseLeave={handleMouseLeave}
//             onMouseUp={handleMouseUp}
//             onMouseMove={handleMouseMove}
//         >
//             <div className="flex space-x-5 ">
//                 {properties.map((property, index) => (
//                     <div key={index} className="  rounded-3xl shadow-[5px_4px_44px_#00000017] w-[200px] overflow-hidden md:w-full mb-9" style={{ width: "272px" }}>
//                         <a href={property.link}>
//                             <div className=" bg-gray-100  ">
//                                 <img
//                                     src={property.image}
//                                     className="w-full object-cover"
//                                     alt={property.alt}
//                                 />
//                                 <div className="px-4">
//                                     {property.isForRent ? (
//                                         <div className=" text-black my-1">For Rent</div>
//                                     ) : (
//                                         <div className="tag-yellow text-white px-2 my-1 rounded-full">
//                                             For Sale
//                                         </div>
//                                     )}
//                                     <h5 className="box-title text-lg font-bold">
//                                         {property.price}
//                                     </h5>
//                                     <p className="text-cyan-500">{property.location}</p>
//                                     <small className="text-gray-500 block mt-5">
//                                         {property.building}
//                                     </small>
//                                     <div className="line my-2 border-b"></div>

//                                     <div className="property-data flex justify-between text-sm pb-5 ">
//                                         <div className="bed flex items-center gap-x-1 ">
//                                             <img src={property.bedIcon} width="15" alt="bed" />
//                                             <p>{property.beds} Beds</p>
//                                         </div>
//                                         <div className="bathroom flex items-center gap-x-1 px-1">
//                                             <img
//                                                 src={property.bathroomIcon}
//                                                 width="15"
//                                                 alt="bathroom"
//                                             />
//                                             <p> {property.bathrooms}  Bath</p>
//                                         </div>
//                                         <div className="area flex items-center gap-x-1">
//                                             <img src={property.areaIcon} width="15" alt="area" />
//                                             <p> {property.area} SQM</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </a>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };




const HeroSearchSection = ({ HeroText, User }) => {
    const PropertyData = { listingType: `${User}` }; // Moved outside useEffect
    console.log("USer is ")
    console.log(User)
    const [Properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    const navigate = useNavigate();
  
    console.log("User is " + User);

    useEffect(() => {
        const fetchProperties = async () => {
            setLoading(true);
            try {
                const PropertyList = await fetch('https://dataapi.pixxicrm.ae/pixxiapi/v1/properties/Eplog Properties', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-PIXXI-TOKEN': 'FjuseQnHvSZy4jTqs8EN6uHfRz85YGv-'
                    },
                    body: JSON.stringify({
                        listingType:User[1],
                        size: 10,
                        page: page - 1
                    })
                });
                const DevelopersData = await PropertyList.json();

                setProperties((prevProperties) => [
                    ...prevProperties,
                    ...DevelopersData.data.list
                ]);
            } catch (error) {
                console.error("Error fetching developers:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, [User, page]); // Add `User` and `page` as dependencies

    useEffect(() => {
        setProperties([]);
        setPage(1);
    }, [User]); // Reset properties and page when `User` changes

    const handleClickItem = (propertyId, Type, DeveloperLogo) => {
        console.log("Search is Clicked");
        navigate(`/property/${Type}?propertyId=${propertyId}&dl=${DeveloperLogo}`);
    };

    return (
        <div className="pt-2 text-[14px] px-4 h-fit">
            {loading && !Properties.length ? (
                <div className='mt-10'>
                    <CustomLoader />
                </div>
            ) : (
                <>
                    {User[1] === "NEW" 
                        ? <PropertyListingNEW Type={User[1]} properties={Properties} handleClickItem={handleClickItem} />
                        : <PropertyListingRENT Type={User[1]} properties={Properties} handleClickItem={handleClickItem} />
                    }
                </>
            )}
        </div>
    );
};








const PropertyListingNEW = ({ properties, handleClickItem,Type }) => {


    console.log("In new")
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


    const formatPrice = (price) => {
        if (price >= 1_000_000) {
            // Round off to millions with two decimal places
            return `${(price / 1_000_000).toFixed(2)} M`;
        } else if (price >= 1_000) {
            // Round off to thousands with two decimal places
            return `${(price / 1_000).toFixed(2)} K`;
        } else {
            return `${price.toFixed(2)}`; // Return the price as is if it's less than 1,000 with two decimal places
        }
    };



    return (
        <div
        className="md:ml-[100px] mt-[20px] overflow-x-scroll  flex scrollbar-hide"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}>
            <div className="flex space-x-5">
                {properties.map((property, index) => (
                    <div onClick={() => { handleClickItem(property.propertyId,Type,property.developerLogo) }} key={index} className="   rounded-3xl shadow-[5px_4px_44px_#00000017] w-[200px] overflow-hidden md:w-full mb-9 relative" style={{ width: "272px" }}>

                        {/* Div for Payment Plan */}
                        {property.newParam?.paymentPlan ?
                            <div className='absolute -right-2 h-[30px] text-white w-[120px] pl-1 rounded-s-lg rounded-t-lg top-6 bg-red-500 text-[10px] tracking-[0px]'>
                                60 / 40 Payment Plan
                            </div>
                            : ""}

                        {/* */}

                        <a href={property.link}>
                            <div className=" bg-gray-100  ">
                                <img
                                    src={property.photos[0]}
                                    // property.photos[0]
                                    className="w-full object-cover h-[150px] "
                                    alt={property.alt}
                                />
                                {/* Whole Upper  */}
                                <div className="px-4 ">

                                    {/* Outer div */}
                                    <div className='mt-2 flex justify-between'>
                                        {/* Left side */}
                                        <div className=' '>
                                            <div className='flex'>
                                                <img src="/Svg/Price.svg" alt="" />
                                                <h5 className="box-title text-lg font-bold  flex space-x-1">
                                                    <p className='text-[12px]'>AED</p>
                                                    <p> {formatPrice(property.price)}</p>
                                                </h5>
                                            </div>


                                            <div className=''>
                                                <div className='leading-4'>
                                                    <p className="text-cyan-500 my-2">{property.title}</p>
                                                    <div className='flex'>
                                                        {/* <img src="/Svg/Estate.svg" alt="" /> */}
                                                        <p className="text-cyan-500">{property.developer}</p>
                                                    </div>

                                                    {/* property.developer */}
                                                    <div className='flex mt-1'>
                                                        <img src="/Svg/Location.svg" alt="" />
                                                        <small className="text-gray-500 block ">
                                                            {property.region}
                                                            {/* property.region */}
                                                        </small>
                                                    </div>
                                                </div>

                                                <div className='flex'>
                                                    <img src="/Svg/Home.svg" alt="" />
                                                    {property.propertyType.map((value, index) => {
                                                        // Capitalize the first letter and make the rest lowercase
                                                        const formattedValue = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
                                                        return (
                                                            <div key={index}>
                                                                {formattedValue}
                                                                {/* Add a comma only if it's not the last item */}
                                                                {index < property.propertyType.length - 1 && <span>, </span>}
                                                            </div>
                                                        );
                                                    })}
                                                </div>

                                            </div>
                                        </div>
                                        {/* Right Side  */}
                                        <div className=' w-[70px] flex justify-end'>
                                            <img
                                                src={property.developerLogo}
                                                className="size-[50px] object-cover   rounded-xl outline outline-[1px] p-1"
                                                alt={property.alt} />
                                        </div>
                                    </div>

                                    <div className="line my-2 border-b"></div>


                                    <div className="property-data flex justify-between text-sm pb-5 ">
                                        <div className="bed flex items-center gap-x-1 ">
                                            <img src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/bed-icon.svg" width="15" alt="bed" />
                                            <p>{property.newParam?.bedroomMax}-{property.newParam?.bedroomMin} Beds</p>
                                            {/* property.newParam.bedroomMax */}
                                        </div>
                                        <div className="bathroom flex items-center gap-x-1 px-1">
                                            {/* <img
                                                src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/shower-icon.svg"
                                                width="15"
                                                alt="bathroom"
                                            /> */}
                                            {/* <p> {property.newParam.totalUnits}-{property.newParam.totalUnits}  Bath</p> */}
                                            {/* total units property.newParam.totalUnits */}
                                        </div>
                                        <div className="area flex items-center gap-x-1">
                                            <img src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/compress-icon.svg" width="15" alt="area" />
                                            <p> {property.newParam?.maxSize} -{property.newParam?.minSize} SQM</p>
                                            {/* MAx size .newParam.maxSize*/}
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


const PropertyListingRENT = ({ properties, handleClickItem,Type }) => {


    const formatPrice = (price) => {
        if (price >= 1_000_000) {
            // Round off to millions with two decimal places
            return `${(price / 1_000_000).toFixed(2)} M`;
        } else if (price >= 1_000) {
            // Round off to thousands with two decimal places
            return `${(price / 1_000).toFixed(2)} K`;
        } else {
            return `${price.toFixed(2)}`; // Return the price as is if it's less than 1,000 with two decimal places
        }
    };



    return (
        <div
            className="md:ml-[100px] mt-[20px] overflow-x-scroll  flex scrollbar-hide ">
            <div className="flex space-x-5">
                {properties.map((property, index) => (
                    <div onClick={() => { handleClickItem(property.propertyId,Type,property.developerLogo) }} key={index} className="  rounded-3xl shadow-[5px_4px_44px_#00000017] w-[200px] overflow-hidden md:w-full mb-9 relative  cursor-pointer" style={{ width: "272px" }}>

                        {/* Div for Payment Plan */}
                        {property.newParam?.paymentPlan ?
                            <div className='absolute -right-2 h-[30px] text-white w-[120px] pl-1 rounded-s-lg rounded-t-lg top-6 bg-red-500 text-[10px] tracking-[0px]'>
                                60 / 40 Payment Plan
                            </div>
                            : ""}

                        {/* */}

                        <a href={property.link}>
                            <div className=" bg-gray-100  ">
                                <img
                                    src={property.photos[0]}
                                    // property.photos[0]
                                    className="w-full object-cover h-[150px] "
                                    alt={property.alt}
                                />
                                {/* Whole Upper  */}
                                <div className="px-4 ">

                                    {/* Outer div */}
                                    <div className='mt-2 flex justify-between'>
                                        {/* Left side */}
                                        <div className=' '>
                                            <div className='flex'>
                                                <img src="/Svg/Price.svg" alt="" />
                                                <h5 className="box-title text-lg font-bold  flex space-x-1">
                                                    <p className='text-[12px]'>AED</p>
                                                    <p> {formatPrice(property.price)}</p>
                                                </h5>
                                            </div>


                                            <div className=''>
                                                <div className='leading-4'>
                                                    <p className="text-cyan-500 my-2">{property.title}</p>
                                                    <div className='flex'>
                                                        {/* <img src="/Svg/Estate.svg" alt="" /> */}
                                                        <p className="text-cyan-500">{property.developer}</p>
                                                    </div>

                                                    {/* property.developer */}
                                                    <div className='flex mt-1'>
                                                        <img src="/Svg/Location.svg" alt="" />
                                                        <small className="text-gray-500 block ">
                                                            {property.region}
                                                            {/* property.region */}
                                                        </small>
                                                    </div>
                                                </div>

                                                <div className='flex'>
                                                    <img src="/Svg/Home.svg" alt="" />
                                                    {property.propertyType.map((value, index) => {
                                                        // Capitalize the first letter and make the rest lowercase
                                                        const formattedValue = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
                                                        return (
                                                            <div key={index}>
                                                                {formattedValue}
                                                                {/* Add a comma only if it's not the last item */}
                                                                {index < property.propertyType.length - 1 && <span>, </span>}
                                                            </div>
                                                        );
                                                    })}
                                                </div>

                                            </div>
                                        </div>
                                        {/* Right Side  */}
                                        <div className=' w-[70px] flex justify-end'>
                                            <img
                                                src={property.developerLogo}
                                                className="size-[50px] object-cover   rounded-xl outline outline-[1px] p-1"
                                                alt={property.alt} />
                                        </div>
                                    </div>

                                    <div className="line my-2 border-b"></div>


                                    <div className="property-data flex justify-between text-sm pb-5 ">
                                        <div className="bed flex items-center gap-x-1 ">
                                            <img src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/bed-icon.svg" width="15" alt="bed" />
                                            <p>{property.bedRooms || 0}  Beds</p>
                                            {/* property.newParam.bedroomMax */}
                                        </div>
                                        <div className="bathroom flex items-center gap-x-1 px-1">
                                            {/* <img
                                                src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/shower-icon.svg"
                                                width="15"
                                                alt="bathroom"
                                            /> */}
                                            {/* <p> {property.newParam.totalUnits}-{property.newParam.totalUnits}  Bath</p> */}
                                            {/* total units property.newParam.totalUnits */}
                                        </div>
                                        <div className="area flex items-center gap-x-1">
                                            <img src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/compress-icon.svg" width="15" alt="area" />
                                            <p> {property.size} SQM</p>
                                            {/* MAx size .newParam.maxSize*/}
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


export default TrendingProperties