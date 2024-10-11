import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Move the services array outside the component
const services = [
    {
        id: '01',
        title: 'Buying, Selling & Leasing Properties',
        description1: 'At Eplog Properties, we offer comprehensive services for buying, selling, and leasing properties in Dubai.',
        description2: 'Whether you’re looking to purchase your dream home, sell your existing property, or find a suitable rental, our experienced team is here to assist you.',
        image: 'https://eplogproperties.com/wp-content/uploads/2023/10/step-1.svg',
        alt: 'Step 1',
        link: 'https://eplogproperties.com/contact-us/',
        linkText: 'Browse Properties'
    },
    {
        id: '02',
        title: 'Property Management',
        description1: 'We offer top-notch property management services to ensure your property is well-maintained.',
        description2: 'From tenant management to maintenance, our team is ready to manage all aspects of your property.',
        image: 'https://eplogproperties.com/wp-content/uploads/2023/10/step-2.svg',
        alt: 'Step 2',
        link: 'https://eplogproperties.com/property-management/',
        linkText: 'Learn More'
    },
    {
        id: '03',
        title: 'Property Management',
        description1: 'We offer top-notch property management services to ensure your property is well-maintained.',
        description2: 'From tenant management to maintenance, our team is ready to manage all aspects of your property.',
        image: 'https://eplogproperties.com/wp-content/uploads/2023/10/step-3.svg',
        alt: 'Step 2',
        link: 'https://eplogproperties.com/property-management/',
        linkText: 'Learn More'
    },
    {
        id: '04',
        title: 'Property Management',
        description1: 'We offer top-notch property management services to ensure your property is well-maintained.',
        description2: 'From tenant management to maintenance, our team is ready to manage all aspects of your property.',
        image: 'https://eplogproperties.com/wp-content/uploads/2023/10/step-4.svg',
        alt: 'Step 2',
        link: 'https://eplogproperties.com/property-management/',
        linkText: 'Learn More'
    },
    {
        id: '05',
        title: 'Property Management',
        description1: 'We offer top-notch property management services to ensure your property is well-maintained.',
        description2: 'From tenant management to maintenance, our team is ready to manage all aspects of your property.',
        image: 'https://eplogproperties.com/wp-content/uploads/2023/10/step-5.svg',
        alt: 'Step 2',
        link: 'https://eplogproperties.com/property-management/',
        linkText: 'Learn More'
    },
    {
        id: '06',
        title: 'Property Management',
        description1: 'We offer top-notch property management services to ensure your property is well-maintained.',
        description2: 'From tenant management to maintenance, our team is ready to manage all aspects of your property.',
        image: 'https://eplogproperties.com/wp-content/uploads/2023/10/step-6.svg',
        alt: 'Step 2',
        link: 'https://eplogproperties.com/property-management/',
        linkText: 'Learn More'
    },
    // Add more services as needed
];

const Podcasts = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const handleAccordionClick = (index) => {
        setOpenAccordion(openAccordion === index ? null : index); // Toggle the accordion
    };

    useEffect(() => {
        const handleResize = () => {
            const isLargeScreen = window.matchMedia('(min-width: 768px)').matches; // Adjust the breakpoint as needed
            if (isLargeScreen) {
                setOpenAccordion(Array.from(services.keys())); // Open all accordions on large screens
            } else {
                setOpenAccordion(null); // Close all accordions on small screens
            }
        };

        handleResize(); // Call on mount
        window.addEventListener('resize', handleResize); // Add listener for screen resize

        return () => window.removeEventListener('resize', handleResize); // Cleanup the listener on unmount
    }, []); // No dependencies, so it only runs once on mount/unmount


    return (
        <>

            <div className="max-w-[1140px]  mx-auto">
                <div className=" flex justify-between items-center mt-10">
                    <div className="w-full flex items-center justify-center gap-10 ">
                    <h1 className="section-title-small   text-center text-[20px] md:text-[40px]">
                    Podcasts
                </h1>

                        <div className="line hidden md:flex">
                            <img
                                src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/dashed-line-black.svg"
                                className="w-full"
                                alt="dashed-line"
                            />
                        </div>
                        {/* <a
                                href="https://eplogproperties.com/properties/"
                                className=" w-[150px]  text-[16px] font-bold leading-[19.23px]  btn-primary text-center py-2 bg-blue-500 text-white py-1 px-2 rounded-[14px]"
                            >
                                View All
                            </a> */}

                        <div>
                            <div className="bg-[#82DFDF] text-white w-[200px] h-[50px] rounded-full mx-auto flex justify-center gap-x-3 items-center ">
                                <p className='text-[16px] font-bold leading-[19.23px] '>Explore More</p>
                                <div className="bg-white text-black  size-[35px] rounded-full  flex justify-center items-center " >
                                    <i className="fa-solid fa-arrow-right"></i>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='mx-5 max-w-[1140px]  mx-auto'>
                <div className=" flex  gap-x-5 my-10 mdm:grid mdm:grid-cols-2 w-full gap-y-5">

                    <ServiceBox isOpen={Array.isArray(openAccordion) ? openAccordion.includes(0) : openAccordion === 0} onClick={() => handleAccordionClick(0)}
                        service={services[0]} />
                    <ServiceBox isOpen={Array.isArray(openAccordion) ? openAccordion.includes(0) : openAccordion === 0} onClick={() => handleAccordionClick(0)}
                        service={services[0]} />
                    <ServiceBox isOpen={Array.isArray(openAccordion) ? openAccordion.includes(0) : openAccordion === 0} onClick={() => handleAccordionClick(0)}
                        service={services[0]} />
                    <ServiceBox isOpen={Array.isArray(openAccordion) ? openAccordion.includes(0) : openAccordion === 0} onClick={() => handleAccordionClick(0)}
                        service={services[0]} />







                </div>
                <div className='mb-10'>
                            <div className="bg-[#82DFDF] text-white w-[200px] h-[50px] rounded-full mx-auto flex justify-center gap-x-3 items-center ">
                                <p className='text-[16px] font-bold leading-[19.23px] '>Explore More</p>
                                <div className="bg-white text-black  size-[35px] rounded-full  flex justify-center items-center " >
                                    <i className="fa-solid fa-arrow-right"></i>
                                </div>

                            </div>
                        </div>

            </div>
        </>
    );
};

const ServiceBox = ({ isOpen, onClick, service }) => {
    return (
        <div className="service-box w-[290px] sm:w-[500px] mdm:w-full mx-auto px-[30px] h-fit py-10">

            <div className="mdm:hidden flex justify-between">
                <p className="mb-0 service-title mdm:font-bold">{service.title}</p>
                <div
                    className="bg-[#7C3EFF] size-[30px] mdm:hidden rounded-full flex justify-center items-center text-white"
                    onClick={onClick}
                >
                    <div className="p-10">
                        <i className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mdm:flex w-full"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="mdm:w-[40%]">
                            <div className="flex justify-between">
                                <p className="hidden mdm:block mb-0 service-title mdm:font-bold">{service.title}</p>
                            </div>
                            <div className='relative'>
                                <img src="/Svg/Youtube.svg " className='absolute top-[28%] left-[41%] size-[50px] flex justify-center items-center' alt="" />

                                <img
                                    className=""
                                    src={service.image}
                                    alt={service.alt}
                                />

                            </div>
                        </div>
                        <div className="lg:px-10 mdm:w-[60%]">
                            <p>{service.description1}</p>
                            <p className="mt-5">{service.description2}</p>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Podcasts;
