import { useEffect, useRef, useState } from 'react';

import Navbar from '../Properties/NavBar';
import SearchBar from '../Properties/SearchBar';
import { AnimatePresence, motion } from 'framer-motion';
import ContactUs from '../Footer/ContactUs';
import Footer from '../Footer/Footer';
import NewsLetter from '../Footer/NewsLetter';
import { useNavigate, } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

import FloorPlan from '../../Components/Property/FloorPlan';
import PaymentPlan from '../../Components/Property/PaymentPlan';
import CustomLoader from '../../Components/Loaders/CustomLoader';
import { div } from 'framer-motion/client';
import TruncatedText from '../../Components/Property/TruncatedText';
import SliderComponentBuy from '../../Components/Property/SliderComponentBuy';
import ScrollProperty from '../../Components/ScrollProperty/ScrollProperty';
import { useForm } from 'react-hook-form';

const BuyProperty = ({ HeroText }) => {
    const [searchParams] = useSearchParams();
    let [User, setUser] = useState(['New Projects', 'Brand']);
    let [PropertyDetail, setPropertyDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const propertyId = searchParams.get('propertyId');
    const DeveloperLogo = searchParams.get('dl');
    console.log(propertyId)

    const formatPrice = (price) => {
        if (price >= 1_000_000) {
            // Round off to millions with two decimal places
            return `${(price / 1_000_000).toFixed(2)} M`;
        } else if (price >= 1_000) {
            // Round off to thousands with two decimal places
            return `${(price / 1_000).toFixed(1)} K`;
        } else {
            return `${price.toFixed(2)}`; // Return the price as is if it's less than 1,000 with two decimal places
        }
    };


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

    useEffect(() => {
        const fetchDevelopers = async () => {
            setLoading(true);
            try {
                const DevelopersList = await fetch(`https://dataapi.pixxicrm.ae/pixxiapi/v1/${propertyId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-PIXXI-TOKEN': 'FjuseQnHvSZy4jTqs8EN6uHfRz85YGv-'
                    },
                });

                const DevelopersData = await DevelopersList.json();
                if (DevelopersData.statusCode === 200) {
                    console.log(DevelopersData.data)
                    setPropertyDetail(DevelopersData.data)

                } else {
                    console.error("Failed to fetch developers");
                }
            } catch (error) {
                console.error("Error fetching developers:", error);
            }
            finally {
                setLoading(false);

            }
        };
        fetchDevelopers();
    }, [searchParams,propertyId]);





    return (
        <>

            {loading ? (
                <div className='flex justify-center items-center w-full h-screen'>
                    <div className='mt-10'>
                        <CustomLoader />
                    </div>
                </div>
            ) : (<>
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
                            {/* <div className='flex '>

                                <p>You are here: </p>
                                <p>  Home / {PropertyDetail.name}</p>
                            </div> */}

                            {/* Heading of the property */}
                            <div className='mt-5 space-y-3'>
                                <p className='text-[40px] items-center  font-bold  my-5'>{PropertyDetail.name}</p>
                            </div>

                            {/* Property Pictures */}
                            <div className='flex w-full '>

                                {/* Left side */}
                                <div className='flex flex-col gap-x-6 mt-2  w-[687px]'>

                                    {/* <SliderComponent images={['https://eplogproperties.com/wp-content/uploads/2023/10/propert-detail1.svg', 'https://eplogproperties.com/wp-content/uploads/2023/10/propert-detail1.svg', "https://eplogproperties.com/wp-content/uploads/2023/10/propert-detail1.svg", "https://eplogproperties.com/wp-content/uploads/2023/10/propert-detail1.svg", "https://eplogproperties.com/wp-content/uploads/2023/10/propert-detail1.svg", "https://eplogproperties.com/wp-content/uploads/2023/10/propert-detail1.svg", "https://eplogproperties.com/wp-content/uploads/2023/10/propert-detail1.svg"]} /> */}
                                    <SliderComponentBuy PropertyId={PropertyDetail.propertyId} images={PropertyDetail.photos} />

                                    <div className='bg-[#7C3EFF] text-[12px] h-[104px] w-full  rounded-xl flex justify-around  items-center   text-white mt-5'>
                                        <div className="property-data flex  w-full justify-around ">
                                            <div className="bed flex items-center gap-x-1  ">
                                                <img src='https://eplogproperties.com/wp-content/themes/dtheme/assets/images/bad-icon-white.svg' width="15" alt="bed" />



                                                <div className='leading-[14px] flex flex-col items-center'>
                                                    <p > Beds </p>
                                                    <p>{PropertyDetail.bedRoomNum}</p>
                                                    {/* <p>{PropertyDetail.newParameter?.bedroomMax}-{PropertyDetail.newParameter?.bedroomMin}</p> */}
                                                </div>
                                            </div>

                                            <div className="area flex items-center gap-x-1">
                                                <img src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/compress-icon-white.svg" width="15" alt="area" />

                                                <div className='leading-[14px] flex flex-col items-center'>
                                                    <p> SQM </p>
                                                    <p> {PropertyDetail.size} </p>
                                                </div>
                                            </div>
                                            {/* handoverTime */}

                                            {PropertyDetail.newParameter?.handoverTime ? (
                                                <div className="flex items-center gap-x-1 px-1">
                                                    <img
                                                        src="/Svg/HandOver.svg"
                                                        width="15"
                                                        alt="Hand Over"
                                                    />
                                                    <div className='leading-[14px] flex flex-col items-center'>
                                                        <p> Hand Over </p>
                                                        <p>
                                                            {
                                                                // Parse the date string and format it
                                                                (() => {
                                                                    const date = new Date(PropertyDetail.newParameter.handoverTime);
                                                                    const options = { year: 'numeric', month: 'long', day: 'numeric' };
                                                                    return date.toLocaleDateString(undefined, options);
                                                                })()
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            ) : (
                                                ""
                                            )}

                                        </div>
                                    </div>


                                    <div className='  rounded-3xl shadow-[5px_4px_44px_#00000017] w-[200px] overflow-hidden md:w-full  p-5 relative   mt-5'>

                                        <p className='mt-3 text-xl'>
                                            <TruncatedText text={PropertyDetail.description} maxLines={3} />

                                        </p>


                                    </div>


                                </div>

                                {/* right side */}
                                <div className="ml-10  w-full ">
                                    <div className='bg-[#7C3EFF] text-[12px] h-[60px] w-full  rounded-xl flex justify-around  items-center   text-white'>
                                        <p className='text-lg w-[180px] text-center flex-grow px-2'>Buy</p>
                                        <p className='bg-[#82DFDF] w-full h-full text-lg text-black flex items-center justify-center font-bold rounded-r-xl'>AED {formatPrice(PropertyDetail.price)}</p>
                                    </div>
                                    <PropertyDetails property={PropertyDetail} DeveloperLogo={DeveloperLogo} />



                                    <div className='flex flex-col items-end space-y-5 justify-end space-x-5 text-[14px] '>


{/* 
                                        <div className='  rounded-3xl shadow-[5px_4px_44px_#00000017] w-[200px] overflow-hidden md:w-full  p-5 relative  '>

                                            <p className='mt-3 text-xl font-bold'>
                                                Floor Plan
                                            </p>
                                            <FloorPlan floorPlans={PropertyDetail.newParameter.style} />
                                        </div>
                                        <div className='  rounded-3xl shadow-[5px_4px_44px_#00000017] w-[200px] overflow-hidden md:w-full  p-5 relative   '>

                                            <p className='mt-3 text-xl font-bold'>
                                                Payment Plan
                                            </p>
                                            <PaymentPlan paymentPlan={PropertyDetail.newParameter.paymentPlan} />
                                        </div> */}


                                        {/* <p className='bg-[#82DFDF]  mx-auto text-xl text-center rounded-3xl mt-3 p-2 text-black  font-bold  w-full py-5'>Book a visit</p> */}
                                        <BookVisit/>

                                    </div>

                                    
                                </div>




                            </div>


                            {/* Property Description */}




                        </div>

                    </div>

                    <div className='h-[1px] px-4 w-full bg-slate-300  my-10'></div>

                    <p className='text-[40px] items-center  font-bold  px-4'>Customers Also Viewed</p>

                    <div className='pt-5'>
                        {/* <PropertyListing properties={properties} /> */}
                        <ScrollProperty  User={["Buy","SELL"]} Page={1}/>
                    </div>
                </div>
                <NewsLetter />
                <Footer />
            </>)
            }


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
                                            <p> {property.size} SQM</p>
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





const PropertyDetails = ({ property, DeveloperLogo }) => {






    const [loading, setLoading] = useState(true);
    const [DeveloperData, setDeveloperData] = useState()



    useEffect(() => {
        const fetchDevelopers = async () => {
            setLoading(true);
            try {
                const DevelopersList = await fetch(`https://dataapi.pixxicrm.ae/pixxiapi/v1/${propertyId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-PIXXI-TOKEN': 'FjuseQnHvSZy4jTqs8EN6uHfRz85YGv-'
                    },
                });

                const DevelopersData = await DevelopersList.json();
                if (DevelopersData.statusCode === 200) {
                    console.log(DevelopersData.data)
                    setPropertyDetail(DevelopersData.data)

                } else {
                    console.error("Failed to fetch developers");
                }
            } catch (error) {
                console.error("Error fetching developers:", error);
            }
            finally {
                setLoading(false);

            }
        };
        fetchDevelopers();
    }, []);



    return (


        <>

            <div
                className="  overflow-x-scroll  flex scrollbar-hide ">
                <div className="grid  w-full">

                    <div className="  rounded-b-3xl  overflow-hidden md:w-full  relative w-full " >



                        {/* */}

                        <a >
                            <div className=" bg-gray-100  ">

                                {/* Whole Upper  */}
                                <div className="p-4 ">

                                    {/* Outer div */}
                                    <div className='mt-2 flex justify-between'>
                                        {/* Left side */}
                                        <div className=' '>


                                            <p className='font-bold text-xl'>Developers</p>

                                            <div className='text-lg'>
                                                <div className='leading-4'>

                                                    <div className='flex space-x-2'>
                                                        {/* <img src="/Svg/Estate.svg" alt="" /> */}
                                                        <p className="text-cyan-500"> {property.developerName}</p>
                                                    </div>

                                                    {/* property.developer */}
                                                    <div className='flex mt-1'>
                                                        <img src="/Svg/Location.svg" alt="" />
                                                        <small className="text-gray-500 block ">
                                                            {property.cityName}
                                                            {/* property.region */}
                                                        </small>
                                                    </div>
                                                    <div className='flex'>
                                                        <img src="/Svg/Home.svg" alt="" />
                                                        {property.houseType.map((value, index) => {
                                                            // Capitalize the first letter and make the rest lowercase
                                                            const formattedValue = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
                                                            return (
                                                                <div key={index} className='text-base'>
                                                                    {formattedValue}
                                                                    {/* Add a comma only if it's not the last item */}
                                                                    {index < property.propertyType.length - 1 && <span>, </span>}
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                        {/* Right Side  */}
                                        <div>
                                            <img
                                                src={DeveloperLogo}
                                                className="size-[50px] object-cover   rounded-xl outline outline-[1px] p-1"
                                            />
                                        </div>
                                    </div>

                                    {/* Add beds and more */}



                                </div>
                            </div>
                        </a>


                    </div>

                </div>

            </div>



        </>


    );
};




// Modal Component
const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50 " onClick={onClose}></div>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto z-50">
       
        {children}
      </div>
    </div>
  );
};


const BookVisit = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    setSuccessMessage('');

    const payload = {
      clientSource: "Eplog Properties",
      extraData: {
        Subject: data.subject,
      },
      formId: "49442551-2ef0-4861-bb2a-03511d0fcda3",
      leadType: "BUY",
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    };

    try {
      const response = await fetch('https://dataapi.pixxicrm.ae/pixxiapi/webhook/v1/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSuccessMessage('Message sent successfully!');
        reset();
      } else {
        setSuccessMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <p
        className="bg-[#82DFDF] mx-auto text-xl text-center rounded-3xl mt-3 p-2 text-black font-bold w-full py-5 cursor-pointer"
        onClick={handleOpenModal}
      >
        Book a Visit
      </p>

      <Modal show={showModal} onClose={handleCloseModal}>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Book a Visit</h2>
          <button className="text-[#82DFDF] ml-auto text-xl" onClick={handleCloseModal}>
            ✖
          </button>
        </div>
        <p className="mb-4">Fill out the form to schedule your visit.</p>

        <form onSubmit={handleSubmit(onSubmit)}>

            <div className='grid grid-cols-2 gap-x-2'>

          <label className="block mb-2">
            Name:
            <input type="text" className="border p-2 w-full" {...register('name', { required: true })} />
            {errors.name && <p className="text-red-500">Name is required</p>}
          </label>
          <label className="block mb-2">
            Email:
            <input type="email" className="border p-2 w-full" {...register('email', { required: true })} />
            {errors.email && <p className="text-red-500">Email is required</p>}
          </label>
            </div>

          <div className='grid grid-cols-2 gap-x-2'>
            
          <label className="block mb-2">
            Subject:
            <input type="text" className="border p-2 w-full" {...register('subject')} />
          </label>
          <label className="block mb-2">
            Contact Number:
            <input type="tel" className="border p-2 w-full" {...register('phone', { required: true })} />
            {errors.phone && <p className="text-red-500">Phone is required</p>}
          </label>
          </div>
          <label className="block mb-4">
            Message:
            <textarea className="border p-2 w-full" {...register('message', { required: true })} />
            {errors.message && <p className="text-red-500">Message is required</p>}
          </label>

          <button type="submit" className="bg-primary text-white py-2 px-4 rounded-lg w-full" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Submit'}
          </button>
          {successMessage && <p className="text-center text-green-500 mt-4">{successMessage}</p>}
        </form>
      </Modal>
    </div>
  );
};





// https://eplogproperties.com/wp-content/uploads/2023/10/propert-detail1.svg

export default BuyProperty;
