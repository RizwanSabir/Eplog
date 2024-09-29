import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

const ServiceSection = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordionData = [
    {
      title: "We are Trustworthy",
      content: "This is the content that describes why we are trustworthy. Here you can include more details or information about your services.",
      icon: "https://eplogproperties.com/wp-content/uploads/2023/10/icon1-1.svg",
    },
    {
      title: "We are Reliable",
      content: "This is the content that describes why we are reliable. Here you can include more details or information about your services.",
      icon: "https://eplogproperties.com/wp-content/uploads/2023/10/icon2.svg", // Add appropriate icon
    },
    {
      title: "We are Experienced",
      content: "This is the content that describes why we are experienced. Here you can include more details or information about your services.",
      icon: "https://eplogproperties.com/wp-content/uploads/2023/10/icon3.svg", // Add appropriate icon
    },
  ];

  return (
    <section className="py-10 bg-gray-100  text-white  relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  abt-services">
        <div className="space-y-6 bordeRed w-full z-20">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className={`sm:w-[50%] ${index===1?'sm:ml-auto ':""} rounded-[48px] cursor-pointer bg-[#96A0A7]`}
              onClick={() => toggleAccordion(index)}
            >
              <div className='rounded-[48px] px-5 py-6 bg-[#374957] flex justify-between items-center'>
                <div className="flex items-center gap-3">
                  <img src={item.icon} width="45" alt="" />
                  <h5 className="text-xl font-bold text-white">{item.title}</h5>
                </div>
                <div className='text-xl'>
                  {openAccordion === index ? (
                    <i className="fa-solid fa-minus"></i>
                  ) : (
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  )}
                </div>
              </div>

              <AnimatePresence>
                {openAccordion === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden rounded"
                  >
                    <p className='mt-4 px-10 pb-5'>{item.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
