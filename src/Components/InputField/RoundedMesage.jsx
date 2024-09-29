import React from 'react'

const RoundedMesage = ({placeholder}) => {
  return (
    <div className="form-group">
    <textarea 
          className="border w-full border-gray-300 rounded-[20px] px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-transparent "

    rows="3" maxlength="400" placeholder={placeholder} name="Message"></textarea>
</div>
  )
}

export default RoundedMesage