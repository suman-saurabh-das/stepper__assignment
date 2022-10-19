import React from 'react'

function UserResponse({ visibility, formData }) {
  return (
    <div className={visibility ? '' : 'hidden'}>
      <div className='bg-white p-5 rounded-md shadow-inner shadow-gray-200 space-y-5'>
        <div>Name: {formData.name}</div>
        <div>Email: {formData.email}</div>
        <div>Phone: {formData.phone}</div>
        <div>Qualification: {formData.qualification}</div>
        <div>Trade: {formData.trade}</div>
        <div>Marks: {formData.marks}</div>
        <div>Address: {formData.address}</div>
      </div>
    </div>
  )
}

export default UserResponse
