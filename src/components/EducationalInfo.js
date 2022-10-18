import React from 'react'

function EducationalInfo({formData, setFormData}) {
  return (
    <div className='flex flex-col p-10 space-y-5'>
      <div className='flex flex-row'>
        Qualification : <input type="text"
            value={formData.qualification}
            onChange ={(event) => setFormData({...formData, qualification: event.target.value})}
         />
        </div>
      <div className='flex flex-row'>
        Trade : <input type="text" 
            value={formData.trade}
            onChange={(event) => setFormData({...formData, trade: event.target.value})}
        />
        </div>
      <div className='flex flex-row'>
        Marks : <input type="number"
            value={formData.marks}
            onChange={(event) => {setFormData({...formData, marks: event.target.value})}}
         />
      </div>
    </div>
  )
}

export default EducationalInfo
