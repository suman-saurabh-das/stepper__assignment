import React from 'react'

function EducationalInfo({formData, setFormData}) {
  return (
    <div className='flex flex-col p-10 space-y-5'>
      <div>
        <input className='outline-none px-3 py-2 rounded-md shadow-inner shadow-gray-200 w-full'
          type="text" placeholder='Qualification'
          value={formData.qualification}
          onChange ={(event) => setFormData({...formData, qualification: event.target.value})}
         />
        </div>
      <div>
         <input className='outline-none px-3 py-2 rounded-md shadow-inner shadow-gray-200 w-full'
          type="text" placeholder='Trade'
          value={formData.trade}
          onChange={(event) => setFormData({...formData, trade: event.target.value})}
        />
        </div>
      <div>
        <input className='outline-none px-3 py-2 rounded-md shadow-inner shadow-gray-200 w-full'
          type="number" placeholder='Marks'
          value={formData.marks}
          onChange={(event) => {setFormData({...formData, marks: event.target.value})}}
         />
      </div>
    </div>
  )
}

export default EducationalInfo
