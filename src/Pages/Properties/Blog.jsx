
import React, { useRef, useState } from "react";
import { motion } from 'framer-motion';
import { div } from "framer-motion/client";

const Blog = () => {

    let [User, setUser] = useState(['Guides', 'Brand']);

    const url = `${import.meta.env.VITE_REACT_APP_BASE_URL}`;
    return (
        <>

            <section className="section px-[50px]">
               
                <div className="max-w-[1140px]  mx-auto">
                    <div className=" flex justify-between items-center mt-10">
                        <div className="w-full flex items-center justify-center gap-10 ">
                        <h1 className="section-title-small   text-center text-[20px] md:text-[40px]">
                    Blog
                </h1>
                            

                            <div className="line hidden md:flex">
                                <img
                                    src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/dashed-line-black.svg"
                                    className="w-full"
                                    alt="dashed-line"
                                />
                            </div>
                        
                             <div>
                    <div className="bg-[#82DFDF] w-[200px] h-[50px] rounded-full ml-auto flex justify-center gap-x-3 items-center ">
                    <a
                                href={`${url}/blogs/`}
                                className=" text-[16px] font-bold leading-[19.23px]"
                            >
                                View All
                            </a>
                        <div className="bg-white  size-[35px] rounded-full  flex justify-center items-center " >
                        <i className="fa-solid fa-arrow-right"></i>
                        </div>

                    </div>
                </div>
                        </div>
                    </div>
                </div>
        <div className="mt-10">
        <NavBar User={User} setUser={setUser} />
        </div>

                <BlogSection/>
               

               


            </section>
           


        </>
    )
}




const NavBar = ({ User, setUser }) => {


    let users = [['Guides', 'Brand'], ['Blog', 'Influencer']]

    return (
        <>

            <div className="flex  flex-row justify-center  text-[8px] sm:text-[12px] w-[150px] xs:w-[200px] sm:w-[200px]  border  rounded-full">
                <div className="flex flex-row bgColor py-1 w-full justify-around items-center rounded-3xl ">
                    {
                        users.map((user) => {
                            return (


                                user[0] === User[0] ?
                                    (<WhiteBackground key={user} user={user} setUser={setUser}>
                                        <motion.div className="absolute w-full bg-[#82DFDF] h-full top-0 left-0   rounded-full   -z-10" layoutId="blog" ></motion.div>
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





// Example array of blog data
const blogData = [
    {
      id: 1,
      title: "IMPZ Production City",
      imgSrc: "https://eplogproperties.com/wp-content/uploads/2023/10/1.svg",
      link: "#",
      description: "Discover the creative hub in Dubai.", // Small text description
    },
    {
      id: 2,
      title: "Business Bay",
      imgSrc: "https://eplogproperties.com/wp-content/uploads/2023/10/2.svg",
      link: "#",
      description: "Explore the heart of Dubai's business district.",
    },
    {
      id: 3,
      title: "Dubai Marina",
      imgSrc: "https://eplogproperties.com/wp-content/uploads/2023/10/3.svg",
      link: "#",
      description: "Enjoy waterfront living in Dubai Marina.",
    },
    {
        id: 3,
        title: "Dubai Marina",
        imgSrc: "https://eplogproperties.com/wp-content/uploads/2023/10/3.svg",
        link: "#",
        description: "Enjoy waterfront living in Dubai Marina.",
      },
      {
        id: 3,
        title: "Dubai Marina",
        imgSrc: "https://eplogproperties.com/wp-content/uploads/2023/10/3.svg",
        link: "#",
        description: "Enjoy waterfront living in Dubai Marina.",
      },
      {
        id: 3,
        title: "Dubai Marina",
        imgSrc: "https://eplogproperties.com/wp-content/uploads/2023/10/3.svg",
        link: "#",
        description: "Enjoy waterfront living in Dubai Marina.",
      },
      {
        id: 3,
        title: "Dubai Marina",
        imgSrc: "https://eplogproperties.com/wp-content/uploads/2023/10/3.svg",
        link: "#",
        description: "Enjoy waterfront living in Dubai Marina.",
      },
    // Add more blog entries here
  ];

const BlogSection = () => {
  const sliderRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  // Mouse down event
  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  // Mouse leave or mouse up event
  const handleMouseLeaveOrUp = () => {
    isDown = false;
  };

  // Mouse move event
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 0.5; // Multiplied by 2 for faster scrolling
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  

  return (

   <>

   
   <section className="mt-5 swiper-container-horizontal  sm:px-0">
      

      <div className="w-[85%] md:w-full sm:ml-[100px] ">
        {/* Scrollable div with hidden scrollbar */}
        <div
          ref={sliderRef}
          className="overflow-x-auto flex space-x-5 w-full  pb-10"
          style={{ scrollbarWidth: 'none', }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
        >
          {/* Dynamically render blog boxes using blogData array */}
          {blogData.map((blog) => (
            <div key={blog.id} className="ml-2 sm:ml-10   flex-shrink-0 w-[300px] sm:w-[356px]" >
              <a href={blog.link}>
                <div className="blog-box">
                  <img
                    src={blog.imgSrc}
                    className="w-full"
                    alt={blog.title}
                  />
                  <div className="blog-detail text-center">
                    <h3 className="pt-5">{blog.title}</h3>
                      {/* Add the small text under the title */}
                      <p className="text-sm text-gray-500 pt-1">{blog.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>


    </section>
   
   </>
  );
};



export default Blog