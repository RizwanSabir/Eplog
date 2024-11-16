import React, { useState } from 'react'
import RoundedInput from '../../Components/InputField/RoundedInput'
import RoundedMesage from '../../Components/InputField/RoundedMesage'
import { useForm } from 'react-hook-form';
import PopOver from '../../Components/PopOver';

// const ContactUs = () => {
//   return (
//     <>
    
//     <section className="py-12 bg-gray-100">
//     <div className="mx-2 sm:mx-10 md:ml-[100px] ">
//         <div className="flex flex-wrap -center">
//             <div className="w-full mb-8">
//                 <h1 className="section-title">Contact us</h1>
//                 <p className="text-gray-600">Let’s get in touch and find you the best solution from the real estate.</p>
//             </div>
//             <div className="w-full md:w-2/3 lg:w-1/2">
            
//                 <form action="/#wpcf7-f295-o2" method="post" className="w-full" aria-label="Contact form" novalidate="novalidate">
                  
//                     <div className="flex flex-wrap -mx-4">
//                         <div className="w-full md:w-1/2 px-4 mb-6">
                         
//                             <RoundedInput placeholder={"Enter your Name"} Label={"Name"}/>
//                         </div>
//                         <div className="w-full md:w-1/2 px-4 mb-6">
//                             <RoundedInput placeholder={"Enter your email address"} Label={"Email"}/>
//                         </div>
//                         <div className="w-full md:w-1/2 px-4 mb-6">
//                             <RoundedInput placeholder={"Enter Contact Number"} Label={"Contact Number"}/>
//                         </div>
//                         <div className="w-full md:w-1/2 px-4 mb-6">
//                             <RoundedInput placeholder={"Your Interest"} Label={"Subject"}/>
//                         </div>
//                         <div className="w-full px-4">
//                             <label className="block text-gray-700 font-medium mb-2">Message</label>
//                            <RoundedMesage placeholder={"Type your message ..."} Label={"Message"}/>
//                         </div>
//                         <div className="w-full px-4  mt-5">
//                             <button type="submit" className="btn bg-primary text-white py-2 px-4 rounded-lg">Submit</button>
//                         </div>
//                     </div>
//                     <div className="wpcf7-response-output" aria-hidden="true"></div>
//                 </form>
//             </div>
//         </div>
//     </div>
// </section>

    
    
//     </>
//   )
// }


const ContactUs = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [popOverColor, setPopOverColor] = useState('bg-red-500'); // default to red
    const [showPopOver, setShowPopOver] = useState(false);
  
    const closePopOver = () => setShowPopOver(false);
    const onSubmit = async (data) => {
      setIsLoading(true);
      setSuccessMessage('');
  
      const payload = {
        clientSource: "Eplog Properties",
        extraData: {
          Subject: data.subject,
        },
        formId: "0bb607f0-5201-4578-a498-4ae16e901340",
        "formName": "Contact US Buy",
        leadType: "BUY",
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message
      };
  
      try {
        const response = await fetch('https://dataapi.pixxicrm.ae/pixxiapi/webhook/v1/form', {
          method: 'POST',
          headers: {
            "X-PIXXI-TOKEN":"FjuseQnHvSZy4jTqs8EN6uHfRz85YGv-",
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
  
        const result = await response.json();
        
        setShowPopOver(true);
        setSuccessMessage('Message sent successfully!');
        setPopOverColor('bg-[#82DFDF]'); // Set color to green on success
        reset(); // Reset all form fields
      } catch (error) {
        console.error('Error:', error);
        setSuccessMessage('Failed to send message. Please try again.');
        setShowPopOver(true);
        setPopOverColor('bg-red-500'); // Set color to red on error
        setShowPopOver(true);
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <section className="py-12 bg-gray-100 max-w-[1140px]  mx-auto">
        <div className="mx-2">
          <div className="flex flex-wrap">
            <div className="w-full mb-8">
              <h1 className="section-title">Contact us</h1>
              <p className="text-gray-600">Let’s get in touch and find you the best solution from the real estate.</p>
            </div>
            <div className="w-full md:w-2/3">
              <form onSubmit={handleSubmit(onSubmit)} className="w-full" aria-label="Contact form">
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full md:w-1/2 px-4 mb-6">
                    <RoundedInput
                      placeholder="Enter your Name"
                      Label="Name"
                      {...register('name', { required: true })}
                    />
                    {errors.name && <p className="text-red-500">Name is required</p>}
                  </div>
                  <div className="w-full md:w-1/2 px-4 mb-6">
                    <RoundedInput
                      placeholder="Enter your email address"
                      Label="Email"
                      {...register('email', { required: true })}
                    />
                    {errors.email && <p className="text-red-500">Email is required</p>}
                  </div>
                  <div className="w-full md:w-1/2 px-4 mb-6">
                    <RoundedInput
                      placeholder="Enter Contact Number"
                      Label="Contact Number"
                      {...register('phone', { required: true })}
                    />
                    {errors.phone && <p className="text-red-500">Phone is required</p>}
                  </div>
                  <div className="w-full md:w-1/2 px-4 mb-6">
                    <RoundedInput
                      placeholder="Your Interest"
                      Label="Subject"
                      {...register('subject')}
                    />
                  </div>
                  <div className="w-full px-4">
                    <label className="block text-gray-700 font-medium mb-2">Message</label>
                    <RoundedMesage
                      placeholder="Type your message ..."
                      Label="Message"
                      {...register('message', { required: true })}
                    />
                    {errors.message && <p className="text-red-500">Message is required</p>}
                  </div>
                  <div className="w-full px-4 mt-5">
                    <button type="submit" className="btn bg-primary text-white py-2 px-4 rounded-lg" disabled={isLoading}>
                      {isLoading ? 'Sending...' : 'Submit'}
                    </button>
                  </div>
                </div>
                {isLoading && <p className="text-center text-gray-500 mt-4">Please wait...</p>}
                {successMessage && <p className="text-center text-green-500 mt-4">{successMessage}</p>}
              </form>
            </div>
          </div>
        </div>
        {showPopOver && <PopOver msg={successMessage} closePopOver={closePopOver} color={popOverColor} />}
  
      </section>
    );
  };
  

export default ContactUs