import React from 'react'
import HeroContactSection from '../../Components/HeroContactSection/HeroSection'
import RoundedInput from '../../Components/InputField/RoundedInput';
import RoundedMesage from '../../Components/InputField/RoundedMesage';
import FooterMain from '../Footer/FooterMain';
import NewsLetter from '../Home/NewsLetter';
import Footer from '../Home/Footer';

const ContactIndex = () => {
  return (
  
<>


<HeroContactSection/>

<div className=''>
<div className=' flex flex-col md:flex-row justify-start  items-center mx-10'>

    <ContactUs/>
    <ContactDetails/>
</div>



    <NewsLetter/>
    <Footer/>
</div>
</>
)
}



const ContactDetails = () => {
  return (
    <div className="col-span-12 md:col-span-4 lg:col-span-5 mt-5 ">
      <div className="contact-details pl-0 md:pl-3 lg:pl-5">
        <div className="flex items-center gap-2 mb-3 md:mb-4">
          <img
            src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/call-icon.svg"
            width="30"
            alt="Call Icon"
          />
          <a className="contact-text" href="tel:971552477432">
            +971 55 247 7432
          </a>
        </div>
        <div className="flex items-center gap-2 mb-3 md:mb-4">
          <img
            src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/whatsapp-icon.svg"
            width="30"
            alt="WhatsApp Icon"
          />
          <a className="contact-text" href="tel:971552477432">
            +971 55 247 7432
          </a>
        </div>
        <div className="flex items-center gap-2 mb-3 md:mb-4">
          <img
            src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/map-icon.svg"
            width="30"
            alt="Map Icon"
          />
          <p className="mb-0 contact-text">
            1915 Binary Tower Business Bay Dubai UAE
          </p>
        </div>
        <div className="flex items-center gap-2 mb-3 md:mb-4">
          <img
            src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/email-icon.svg"
            width="30"
            alt="Email Icon"
          />
          <a className="contact-text" href="mailto:Admin@eplogproperties.com">
            Admin@eplogproperties.com
          </a>
        </div>
      </div>
    </div>
  );
};


const ContactUs = () => {
  return (
    <>
    
    <section className="py-12 bg-gray-100">
    <div className="mx-2 ">
        <div className="flex flex-wrap ">
            <div className="w-full mb-8">
                <h1 className="section-title">Contact us</h1>
                <p className="text-gray-600">Let’s get in touch and find you the best solution from the real estate.</p>
            </div>
            <div className="w-full md:w-2/3 ">
            
                <form action="/#wpcf7-f295-o2" method="post" className="w-full" aria-label="Contact form" novalidate="novalidate">
                  
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/2 px-4 mb-6">
                         
                            <RoundedInput placeholder={"Enter your Name"} Label={"Name"}/>
                        </div>
                        <div className="w-full md:w-1/2 px-4 mb-6">
                            <RoundedInput placeholder={"Enter your email address"} Label={"Email"}/>
                        </div>
                        <div className="w-full md:w-1/2 px-4 mb-6">
                            <RoundedInput placeholder={"Enter Contact Number"} Label={"Contact Number"}/>
                        </div>
                        <div className="w-full md:w-1/2 px-4 mb-6">
                            <RoundedInput placeholder={"Your Interest"} Label={"Subject"}/>
                        </div>
                        <div className="w-full px-4">
                            <label className="block text-gray-700 font-medium mb-2">Message</label>
                           <RoundedMesage placeholder={"Type your message ..."} Label={"Message"}/>
                        </div>
                        <div className="w-full px-4  mt-5">
                            <button type="submit" className="btn bg-primary text-white py-2 px-4 rounded-lg">Submit</button>
                        </div>
                    </div>
                    <div className="wpcf7-response-output" aria-hidden="true"></div>
                </form>
            </div>
        </div>
    </div>
</section>

    
    
    </>
  )
}


export default ContactIndex