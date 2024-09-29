import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


import './index.css'
// TeamSection.js

const TeamSection = () => {

  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  const teammates = [
    {
      name: 'Saliq Zahoor',
      designation: 'Managing Director',
      phone: '+971 55-2404551',
      email: 'saliq@eplogproperties.com',
      linkedIn: 'https://www.linkedin.com/',
      image: 'https://eplogproperties.com/wp-content/uploads/2023/10/1-1.svg',
      description1: 'Saliq is highly regarded as a professional in the real estate industry, having gained extensive experience since 2013. He is known for his honesty, knowledge, and experience, and has received numerous recommendations on LinkedIn from satisfied clients.',
      description2: 'In addition to his role as a real estate agent, Saliq’s background as a construction engineer enables him to offer valuable guidance to private real estate developers, covering aspects from land acquisition to development and sales.'
    },
    {
      name: 'Anife',
      designation: 'Managing Director',
      phone: '+971 55-2404551',
      email: 'saliq@eplogproperties.com',
      linkedIn: 'https://www.linkedin.com/',
      image: 'https://eplogproperties.com/wp-content/uploads/2023/10/2-1.svg',
      description1: 'Saliq is highly regarded as a professional in the real estate industry, having gained extensive experience since 2013. He is known for his honesty, knowledge, and experience, and has received numerous recommendations on LinkedIn from satisfied clients.',
      description2: 'In addition to his role as a real estate agent, Saliq’s background as a construction engineer enables him to offer valuable guidance to private real estate developers, covering aspects from land acquisition to development and sales'
    }
  ];

  return (
    <section className="team-section pb-0 mb-10">
      <div className="container mx-auto">
        <div className="mb-4 mb-md-3">
          <h1 className="text-xl font-semibold">Meet the team</h1>
        </div>
      </div>

      <div className="hidden md:block">
        {teammates.map((teammate, index) => (
          index === 1 ? <Teammate key={index} {...teammate} Swap={1} /> : <Teammate key={index} {...teammate} Swap={0} />
        ))}
      </div>

      {/* Mobile section */}
      {/* <div className="block md:hidden">
        <div className="  ">
          <div className="" >
            <h2 className="" >

              <div className="flex justify-between items-center gap-2   pr-2 pt-1 bg-[#82DFDF]" onClick={() => toggleAccordion(0)}>
                <div className='flex gap-x-2'>
                  <img className=" w-[100px] mt-auto mr-auto" src={teammates[0].image} alt={teammates[0].name} />
                  <div className='mt-2 pb-3'>
                    <p className="text-2xl font-semibold">{teammates[0].name}</p>
                    <p className="text-lg font-semibold">{teammates[0].designation}</p>
                  </div>
                </div>
                <div className='flex items-end flex-col flex-shrink'>
                  <div className=' bg-[#75C8C8]  w-[2px] h-[60px] mr-[2px]'></div>
                  <div className='flex gap-x-2  mt-3'>
                    <p className="text-sm w-[70px]">Read more </p>
                    
                    <i className="fas  fa-chevron-down text-sm"></i>
                
                
                  </div>
                </div>
              </div>
            </h2>

            <AnimatePresence>

            {openAccordion === 0 && (

<motion.div 

initial={{ height: 0 }}
animate={{ height: 'auto' }}
exit={{ height: 0 }}
transition={{ duration: 0.3 }}
className="w-full md:w-1/2  text-[14px] leading-[21px] bg-[#374957] text-white">
              <div className="flex justify-between p-4">
                <p className="mb-0">
                  <span className='text-[#FFCB2B]'>P:</span> <a href={`tel:${teammates[0].phone}`} className="text-yellow-500">{teammates[0].phone}</a> |
                  <span className='text-[#FFCB2B]'> E:</span> <a href={`mailto:${teammates[0].email}`} className="text-yellow-500">{teammates[0].email}</a>
                </p>
                <p className="mb-0">
                  <a href={teammates[0].linkedIn}>
                    <i className="fa fa-linkedin"></i>
                  </a>
                </p>
              </div>
              <div className='h-[1px] bg-white  px-4'></div>
              <p  className='p-4'>{teammates[0].description1}</p>
              <p className='mt-1 p-4'>{teammates[0].description2}</p>

            </motion.div>
            )}
            </AnimatePresence>
            
            

          </div>

        </div>
      </div>



      

      <div className="block md:hidden">
        <div className="  ">
          <div className="" >
            <h2 className="" >

              <div className="flex justify-between items-center gap-2   pr-2 pt-1 bg-[#7C3EFF] text-white" onClick={() => toggleAccordion(0)}>
                <div className='flex gap-x-2'>
                  <img className=" w-[100px] mt-auto mr-auto" src={teammates[1].image} alt={teammates[1].name} />
                  <div className='mt-2 pb-3'>
                    <p className="text-2xl font-semibold">{teammates[1].name}</p>
                    <p className="text-lg font-semibold">{teammates[1].designation}</p>
                  </div>
                </div>
                <div className='flex items-end flex-col flex-shrink'>
                  <div className=' bg-[#9665FF]  w-[2px] h-[60px] mr-[2px]'></div>
                  <div className='flex gap-x-2  mt-3'>
                    <p className="text-sm w-[70px]">Read more </p>
                    
                    <i className="fas  fa-chevron-down text-sm"></i>
                
                
                  </div>
                </div>
              </div>
            </h2>

            <AnimatePresence>

            {openAccordion === 0 && (

<motion.div 

initial={{ height: 0 }}
animate={{ height: 'auto' }}
exit={{ height: 0 }}
transition={{ duration: 0.3 }}
className="w-full md:w-1/2  text-[14px] leading-[21px] bg-[#374957] text-white">
              <div className="flex justify-between p-4">
                <p className="mb-0">
                  <span className='text-[#FFCB2B]'>P:</span> <a href={`tel:${teammates[1].phone}`} className="text-yellow-500">{teammates[1].phone}</a> |
                  <span className='text-[#FFCB2B]'> E:</span> <a href={`mailto:${teammates[1].email}`} className="text-yellow-500">{teammates[1].email}</a>
                </p>
                <p className="mb-0">
                  <a href={teammates[1].linkedIn}>
                    <i className="fa fa-linkedin"></i>
                  </a>
                </p>
              </div>
              <div className='h-[1px] bg-white  px-4'></div>
              <p  className='p-4'>{teammates[1].description1}</p>
              <p className='mt-1 p-4'>{teammates[1].description2}</p>

            </motion.div>
            )}
            </AnimatePresence>
            
            

          </div>

        </div>
      </div> */}

<div>
      {teammates.map((teammate, index) => (
        <div key={index} className="block md:hidden mt-[1px]">
          <div>
            <h2>
              <div
                className={`flex justify-between items-center gap-2 pr-2 pt-1 ${index===1?'bg-[#7C3EFF] text-white':'bg-[#82DFDF]'}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex gap-x-2">
                  <img
                    className="w-[100px] mt-auto mr-auto transform "
                    style={{ transform: "rotateY(175deg)" }}
                    src={teammate.image}
                    alt={teammate.name}
                  />
                  <div className="mt-2 pb-3">
                    <p className="text-2xl font-semibold">{teammate.name}</p>
                    <p className="text-lg font-semibold">{teammate.designation}</p>
                  </div>
                </div>
                <div className="flex items-end flex-col flex-shrink">
                  <div className={`${index===0?'bg-[#75C8C8]':'bg-[#9665FF]'} w-[2px] h-[60px] mr-[2px]`}></div>
                  <div className="flex gap-x-2 mt-3">
                    <p className="text-sm w-[70px]">Read more</p>
                    <i className="fas fa-chevron-down text-sm"></i>
                  </div>
                </div>
              </div>
            </h2>
            <AnimatePresence>
              {openAccordion === index && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 ,opacity:0}}
                  transition={{ duration: 0.3 }}
                  className="w-full text-[14px] leading-[21px] bg-[#374957] text-white"
                >
                  <div className="flex justify-between p-4">
                    <p className="mb-0">
                      <span className="text-[#FFCB2B]">P:</span>{' '}
                      <a
                        href={`tel:${teammate.phone}`}
                        className="text-yellow-500"
                      >
                        {teammate.phone}
                      </a>{' '}
                      |{' '}
                      <span className="text-[#FFCB2B]">E:</span>{' '}
                      <a
                        href={`mailto:${teammate.email}`}
                        className="text-yellow-500"
                      >
                        {teammate.email}
                      </a>
                    </p>
                    <p className="mb-0">
                      <a href={teammate.linkedIn}>
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </p>
                  </div>
                  <div className="h-[1px] bg-white px-4"></div>
                  <p className="p-4">{teammate.description1}</p>
                  <p className="mt-1 p-4">{teammate.description2}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ))}
    </div>
  

      
      {/* End of Mobile section */}
    </section>
  );
};

export default TeamSection;




// Teammate.js

const Teammate = ({ name, designation, phone, email, linkedIn, image, description1, description2, Swap }) => {
  return (
    <div className="team-data-divider">
      <div className="teammate-data pt-[60px] ">
        <div className="container mx-auto">
          <div className={`flex items-center  ${Swap ? 'flex-row-reverse' : ''}`}>
            <div className="w-full mt-auto md:w-1/2 ">
              <img className={`w-[80%] ${Swap ? 'ml-auto' : 'mr-auto'}`} src={image} alt={name} />
            </div>
            <div className="w-full md:w-1/2 pl-4 pb-10">
              <h1 className="text-[35px] leading-[37px] font-bold">{name}</h1>
              <p className="my-5">{designation}</p>
              <div className="flex justify-between">
                <p className="mb-0">
                  <span className='text-[#FFCB2B]'>P:</span> <a href={`tel:${phone}`} className="text-yellow-500">{phone}</a> |
                  <span className='text-[#FFCB2B]'> E:</span> <a href={`mailto:${email}`} className="text-yellow-500">{email}</a>
                </p>
                <p className="mb-0">
                  <a href={linkedIn}>
                    <i className="fa fa-linkedin"></i>
                  </a>
                </p>
              </div>
              <div className='h-[1px] bg-white my-2'></div>
              <p >{description1}</p>
              <p className='mt-5'>{description2}</p>
              <div className='mt-8'>
                <a href="https://eplogproperties.com/contact-us/" className="bg-primary btn text-white py-2 px-5 rounded hover:bg-transparent hover:border-primary hover:text-primary" target="_self">
                  Schedule a call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

