import './index.css';
const Footer = () => {
    return (
        <footer className="section">
            <div className='max-w-[1140px] mx-auto'>
                <div className='row mx-10'>
                    <div className="w-full">
                        <img src="https://eplogproperties.com/wp-content/uploads/2023/10/logo.svg" width="180" class="footer-logo" alt="" />
                    </div>
                    <div className='w-full mt-2 '>
                        <div className='flex flex-col mdm:flex-row mdm:items-center mdm:justify-between mt-2 gap-2'>
                            {/* Footer Text */}
                            <div className='footer-about-text'>
                                <p className="mb-4 mb-md-0">
                                    Navigate the world of real estate with confidence at Eplog Properties, your ally in the seamless buying and selling of luxury Dubai properties.
                                    <br /><br /> Eplog Properties L.L.C
                                </p>
                            </div>

                            {/* Footer Link */}

                            <div className=" footer-links grid grid-cols-2 gap-y-2 sm:grid-cols-4 lg:flex  lg:justify-between sm:gap-x-1 w-full sm:w-[450px] ">

                                <ul>
                                    <li> <a href="/about-us/" className=''>About us</a> </li>
                                    <li> <a href="/services/">Services</a> </li>
                                </ul>
                                <ul>
                                    <li> <a href="/career/">Career</a> </li>
                                    <li> <a href="/contact-us/">Contact Us</a> </li>
                                </ul>
                                <ul>
                                    <li> <a href="/properties/">Properties</a> </li>
                                    <li> <a href="/contact-us/">Book Appointment</a> </li>
                                </ul>
                                <ul>
                                </ul>
                                <ul>
                                </ul>

                            </div>

                            {/* Social Media  */}

                            <div className='gap-3 flex items-center social-links'>
                                <a target="_blank" href="https://www.instagram.com/"><i className="fa fa-instagram "></i></a>
                                <a target="_blank" href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
                                <a target="_blank" href="https://twitter.com/"><i className="fa fa-twitter"></i></a>
                                <a target="_blank" href="https://www.youtube.com/"><i className="fa fa-youtube"></i></a>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;



// <div className="container mx-auto px-4">
// <div className="flex flex-col items-center md:items-start">
//   <img 
//     src="https://eplogproperties.com/wp-content/uploads/2023/10/logo.svg" 
//     width="180" 
//     className="mb-4" 
//     alt="Eplog Properties Logo"
//   />
//   <p className="text-center md:text-left mb-4 md:mb-0">
//     Navigate the world of real estate with confidence at Eplog Properties, your ally in the seamless buying and selling of luxury Dubai properties.
//     <br /><br />
//     Eplog Properties L.L.C
//   </p>
{/* <div className="flex flex-wrap justify-center md:justify-between gap-6 mt-4">
    <div className="flex flex-col gap-2">
      <a href="https://eplogproperties.com/about-us/" className="hover:underline">About us</a>
      <a href="https://eplogproperties.com/services/" className="hover:underline">Services</a>
      <a href="https://eplogproperties.com/career/" className="hover:underline">Career</a>
      <a href="https://eplogproperties.com/contact-us/" className="hover:underline">Contact Us</a>
      <a href="https://eplogproperties.com/properties/" className="hover:underline">Properties</a>
      <a href="https://eplogproperties.com/consultation/" className="hover:underline">Consultation</a>
      <a href="https://eplogproperties.com/book-appointment/" className="hover:underline">Book Appointment</a>
      <a href="https://eplogproperties.com/blogs/" className="hover:underline">Blogs</a>
    </div>
    <div className="flex gap-4">
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">
        <i className="fa fa-instagram text-2xl hover:text-gray-400"></i>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
        <i className="fa fa-facebook text-2xl hover:text-gray-400"></i>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/">
        <i className="fa fa-twitter text-2xl hover:text-gray-400"></i>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/">
        <i className="fa fa-youtube text-2xl hover:text-gray-400"></i>
      </a>
    </div>
  </div> */}
{/* </div>
</div> */}