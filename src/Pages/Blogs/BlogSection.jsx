import React, { useState } from 'react';

// Main BlogSection Component
const BlogSection = () => {
  return (
    <>
      <div className="flex flex-col mb-5 mx-10 mt-32">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <h1 className="text-2xl  font-bold ">Search Result For:</h1>
          <div className="mt-5 sm:mt-0">
            <form action="https://eplogproperties.com/" method="get" className="flex">
              <div className="relative w-full mdm:w-[300px] flex">
                <span className="absolute inset-y-0 left-4 flex items-center text-gray-500">
                  <i className="font-light text-[16px] fa fa-search"></i>
                </span>
                <input
                  type="text"
                  name="s"
                  id="search"
                  className="block pl-10 pr-3 py-2 border border-gray-300 rounded-3xl placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Search positions"
                  aria-describedby="blog-search"
                />
              </div>
            </form>
          </div>
        </div>
        <Blog blogData={blogData} />
      </div>
    </>
  );
};

// Example array of blog data
const blogData = [
  {
    id: 1,
    title: "IMPZ Production City",
    imgSrc: "https://eplogproperties.com/wp-content/uploads/2023/10/1.svg",
    link: "#",
  },
  {
    id: 2,
    title: "Business Bay",
    imgSrc: "https://eplogproperties.com/wp-content/uploads/2023/10/2.svg",
    link: "#",
  },
  {
    id: 3,
    title: "Dubai Marina",
    imgSrc: "https://eplogproperties.com/wp-content/uploads/2023/10/3.svg",
    link: "#",
  },
  {
    id: 4,
    title: "Downtown Dubai",
    imgSrc: "https://eplogproperties.com/wp-content/uploads/2023/10/4.svg",
    link: "#",
  },
  {
    id: 5,
    title: "Palm Jumeirah",
    imgSrc: "https://eplogproperties.com/wp-content/uploads/2023/10/5.svg",
    link: "#",
  },
  {
    id: 6,
    title: "Jumeirah Beach Residence",
    imgSrc: "https://eplogproperties.com/wp-content/uploads/2023/10/6.svg",
    link: "#",
  },
];

// Blog Component with Pagination
const Blog = ({ blogData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Calculate total pages
  const totalPages = Math.ceil(blogData.length / itemsPerPage);

  // Get current items based on page
  const currentItems = blogData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className=' grid  gap-y-10 xs:grid-cols-2 lg:grid-cols-3 sm:gap-x-4 sm:gap-y-10 mt-10'>
        {currentItems.map((blog) => (
          <div key={blog.id} className="   mx-auto w-[300px] xs:w-[250px] sm:w-[356px]">
            <a href={blog.link}>
              <div className='sm:p-5'>
              <div className="blog-box">
                <img
                  src={blog.imgSrc}
                  className="w-full"
                  alt={blog.title}
                />
                <div className="mt-2 text-center">
                  <h3 className="">{blog.title}</h3>
                </div>
                <div className='px-7 pt-2  pb-3 text-sm'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi a corporis nisi libero dolores, iste omnis, facere quibusdam </p>
                </div>
              </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className='flex justify-center mt-10 gap-x-2'>
        <button
          className={`bg-[#D9D9D9] text-[16px] rounded-full size-[35px] text-black ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          
          <div className='  flex justify-center'>
          <i className="text-[10px]  fa-solid fa-chevron-left"></i>
          </div>
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`bg-[#82DFDF] text-[16px] rounded-full size-[35px] text-black ${currentPage === index + 1 ? 'bg-[#82DFDF]' : 'bg-[#D9D9D9]'}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className={`bg-[#D9D9D9] text-[16px] rounded-full size-[35px] text-black ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''} `}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <div className='  flex justify-center'>
          <i className="text-[10px]  fa-solid fa-chevron-right"></i>
          </div>
        </button>
      </div>
    </>
  );
};

export default BlogSection;
