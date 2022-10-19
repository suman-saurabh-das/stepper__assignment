import React from 'react'

function Address({formData, setFormData}) {
  return (
    <div className='py-9'>
      <textarea className='outline-none px-3 py-2 rounded-md shadow-inner shadow-gray-200 w-full'
        name="" id="" cols="30" rows="6" placeholder='Address'
        value={formData.address}
        onChange={(event) => setFormData({...formData, address: event.target.value})}
      ></textarea>
    </div>
  )
}

export default Address
