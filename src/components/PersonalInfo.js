import React from 'react'

function PersonalInfo({ formData, setFormData }) {
    return (
        <div className='flex flex-col p-10 space-y-5'>
            <div className='flex flex-row'>
                Name : <input type="text"
                    value={formData.name}
                    onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                />
            </div>
            <div className='flex flex-row'>
                Email : <input type="email"
                    value={formData.email}
                    onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
            </div>
            <div className='flex flex-row'>
                Phone : <input type="tel"
                    value={formData.phone}
                    onChange={(event) => setFormData({ ...formData, phone: event.target.value })} />
            </div>
        </div>
    )
}

export default PersonalInfo
