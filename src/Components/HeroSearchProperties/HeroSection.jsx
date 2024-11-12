import { useEffect, useRef, useState } from 'react';
import './index.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { usePropertyData } from '../../Context/PropertyDataContext';
import CustomLoader from '../Loaders/CustomLoader';
import { div } from 'framer-motion/client';
import ScreenSizeDisplay from '../../useCurrentScreenSize';

// const HeroSearchSection = ({ HeroText }) => {
//     const { PropertyData } = usePropertyData();
//     const [Properties, setProperties] = useState([]);
//     const [loading, setLoading] = useState(true); // New loading state

//     console.log("Property data is ", PropertyData);
//     console.log("Properties are ", Properties);

//     useEffect(() => {
//         const fetchProperties = async () => {
//             setLoading(true); // Set loading to true before fetching
//             try {
//                 const PropertyList = await fetch('https://dataapi.pixxicrm.ae/pixxiapi/v1/properties/Eplog Properties', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'X-PIXXI-TOKEN': 'FjuseQnHvSZy4jTqs8EN6uHfRz85YGv-'
//                     },
//                     body: JSON.stringify({
//                         ...PropertyData,
//                         "size":20,
//                         "ssize":10
//                     })
//                 });
//                 const DevelopersData = await PropertyList.json();

// // const stringifiedArray = JSON.stringify(DevelopersData.data.);

// // console.log(stringifiedArray);
//                 console.log("Total size is " + DevelopersData.data.totalSize)
//                 setProperties(DevelopersData.data.list);
//             } catch (error) {
//                 console.error("Error fetching developers:", error);
//             } finally {
//                 setLoading(false); // Set loading to false after fetching
//             }
//         };
//         fetchProperties();
//     }, [PropertyData]); // Add PropertyData as a dependency to refetch when it changes

//     const navigate = useNavigate();

//     const handleClickItem = () => {
//         console.log("Search is Clicked");
//         navigate('/property');
//     };

//     return (
//         <>
//             <div className="pt-2 text-[14px] px-4 h-fit">
//                 <h1 className='text-4xl font-bold mx-5'>Explore Properties</h1>

//                 {loading ? ( // Conditional rendering for the loader
//                     <div className='mt-10'>
//                         <CustomLoader />
//                     </div>
//                 ) : (
//                     <PropertyListingNEW properties={Properties} handleClickItem={handleClickItem} />
//                 )}
//             </div>
//         </>
//     );
// };




const HeroSearchSection = ({ HeroText }) => {
    const { PropertyData } = usePropertyData();
    const [Properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [isFetchingMore, setIsFetchingMore] = useState(false);
    const [hasMoreData, setHasMoreData] = useState(true); // New state to track if more data is available

    const navigate = useNavigate();


    useEffect(() => {
        const controller = new AbortController(); // Create an AbortController instance
        const signal = controller.signal; // Get the signal from the controller

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
                        ...PropertyData,
                        "size": 10,
                        "page": page
                    }),
                    signal, // Pass the abort signal to the fetch request
                });

                if (!PropertyList.ok) {
                    throw new Error('Network response was not ok');
                }

                const DevelopersData = await PropertyList.json();
              

                // Check if fetched data is less than expected size
                if (DevelopersData.data.list.length < 10) {
                    setHasMoreData(false); // No more data to load
                }

                // Append new properties or reset if PropertyData changed
                setProperties((prevProperties) => [
                    ...prevProperties,
                    ...DevelopersData.data.list
                ]);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error("Error fetching developers:", error);
                }
            } finally {
                setLoading(false);
                setIsFetchingMore(false);
            }
        };

        fetchProperties();

        // Cleanup function to abort the fetch request when the component unmounts or rerenders
        return () => {
            controller.abort();
        };
    }, [PropertyData, page]);

    // Reset Properties and page when PropertyData changes
    useEffect(() => {
        setProperties([]);
        setPage(1);
        setHasMoreData(true); // Reset the hasMoreData flag when PropertyData changes
    }, [PropertyData]);

    const handleClickItem = (propertyId, Type, DeveloperLogo) => {
        navigate(`/property/${Type}?propertyId=${propertyId}&dl=${DeveloperLogo}`);
    };

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
        setIsFetchingMore(true);
    };

    return (
        <div className="pt-2 text-[14px] px-4 h-fit">
            <h1 className="text-4xl font-bold mx-5">
                Explore {PropertyData?.listingType === 'SELL' ? "Buy" : PropertyData?.listingType.toLowerCase()} Properties
            </h1>
        

            {loading && !Properties.length ? (
                <div className="mt-10">
                    <CustomLoader />
                </div>
            ) : (
                <>
                    {PropertyData?.listingType === "NEW" ? 
                        <PropertyListingNEW Type={PropertyData?.listingType.toLowerCase()} properties={Properties} handleClickItem={handleClickItem} /> 
                        : 
                        <PropertyListingRENT Type={PropertyData?.listingType ==="SELL"?'buy':PropertyData?.listingType.toLowerCase()} properties={Properties} handleClickItem={handleClickItem} />
                    }

                    {isFetchingMore && loading && <CustomLoader />} {/* Loader for Load More button */}

                    {!loading && !isFetchingMore && hasMoreData && ( // Only show the button if there is more data
                        <div className="flex justify-center">
                            <button
                                className="bg-[#82DFDF] mx-auto text-xl text-center rounded-3xl my-3 p-2 text-black font-bold w-[500px] py-3"
                                onClick={handleLoadMore}
                                disabled={isFetchingMore || !hasMoreData} // Disable if no more data
                            >
                                {isFetchingMore ? 'Loading...' : 'Load More'}
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};










const PropertyListingNEW = ({ properties, handleClickItem,Type }) => {
   
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
            className="lg:ml-[100px] mt-[20px] overflow-x-scroll  flex scrollbar-hide ">
            <div className="grid gap-2 sm:grid-cols-2 mdm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  w-full justify-center">
                {properties.map((property, index) => (
                    <div onClick={() => { handleClickItem(property.propertyId,Type,property.developerLogo) }} key={index} className="  rounded-3xl shadow-[5px_4px_44px_#00000017] !w-[272px] mdm:!w-[250px] md:!w-[270px] overflow-hidden mb-9 relative  cursor-pointer" >

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
            <div className="grid grid-cols-4  w-full">
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






export default HeroSearchSection;


// Only Show when user at the bottom

// const HeroSearchSection = ({ HeroText }) => {
//     const { PropertyData } = usePropertyData();
//     const [Properties, setProperties] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [page, setPage] = useState(1);
//     const [isFetchingMore, setIsFetchingMore] = useState(false);
//     const loadMoreRef = useRef(null); // Reference for intersection observer
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchProperties = async () => {
//             setLoading(true);
//             try {
//                 const PropertyList = await fetch('https://dataapi.pixxicrm.ae/pixxiapi/v1/properties/Eplog Properties', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'X-PIXXI-TOKEN': 'FjuseQnHvSZy4jTqs8EN6uHfRz85YGv-'
//                     },
//                     body: JSON.stringify({
//                         ...PropertyData,
//                         "size": 10,
//                         "ssize": (page - 1) * 10
//                     })
//                 });
//                 const DevelopersData = await PropertyList.json();

//                 setProperties((prevProperties) => [
//                     ...prevProperties,
//                     ...DevelopersData.data.list
//                 ]);
//             } catch (error) {
//                 console.error("Error fetching developers:", error);
//             } finally {
//                 setLoading(false);
//                 setIsFetchingMore(false);
//             }
//         };

//         fetchProperties();
//     }, [PropertyData, page]);

//     const handleClickItem = () => {
//         console.log("Search is Clicked");
//         navigate('/property');
//     };

//     // Intersection Observer to load more data when reaching the bottom
//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 if (entries[0].isIntersecting && !isFetchingMore && !loading) {
//                     setIsFetchingMore(true);
//                     setPage((prevPage) => prevPage + 1); // Increment page to load more data
//                 }
//             },
//             { threshold: 1.0 }
//         );

//         if (loadMoreRef.current) {
//             observer.observe(loadMoreRef.current);
//         }

//         return () => {
//             if (loadMoreRef.current) {
//                 observer.unobserve(loadMoreRef.current);
//             }
//         };
//     }, [isFetchingMore, loading]);

//     return (
//         <>
//             <div className="pt-2 text-[14px] px-4 h-fit">
//                 <h1 className='text-4xl font-bold mx-5'>Explore Properties</h1>

//                 {loading && !Properties.length ? (
//                     <div className='mt-10'>
//                         <CustomLoader />
//                     </div>
//                 ) : (
//                     <>
//                         <motion.div
//                             layout
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ duration: 0.5 }}
//                         >
//                             <PropertyListingNEW properties={Properties} handleClickItem={handleClickItem} />
//                         </motion.div>

//                         {isFetchingMore && <CustomLoader />} {/* Loader shown while fetching more */}

//                         {/* Invisible div at the bottom to trigger automatic load */}
//                         <div ref={loadMoreRef} className="h-10" />
//                     </>
//                 )}
//             </div>
//         </>
//     );
// };
