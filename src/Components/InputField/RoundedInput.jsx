import React from 'react';

const RoundedInput = ({ placeholder,Label }) => {
  return (

    <>
    <label className="text-[16px] leading-[24px] font-semibold ml-3 mb-1.5">{Label}</label>
    <input
       type="text"
       className="border w-full border-gray-300 rounded-[20px] px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-transparent "
       placeholder={placeholder}
     />
 </>
 
  );
};

export default RoundedInput;
