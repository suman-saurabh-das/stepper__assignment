import React from 'react'

function Address({formData, setFormData}) {
  return (
    <div className='flex p-10 space-y-5'>
      Address: <textarea name="" id="" cols="30" rows="5"
        value={formData.address}
        onChange={(event) => setFormData({...formData, address: event.target.value})}
      ></textarea>
    </div>
  )
}

export default Address
