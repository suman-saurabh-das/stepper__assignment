import React from 'react'

function PersonalInfo({ formData, setFormData }) {
    return (
        <div className='flex flex-col p-10 space-y-5'>
            <div>
                <input className='outline-none px-3 py-2 rounded-md shadow-inner shadow-gray-200 w-full'
                    placeholder='Name' type="text"
                    value={formData.name}
                    onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                />
            </div>
            <div>
                <input className='outline-none px-3 py-2 rounded-md shadow-inner shadow-gray-200 w-full'
                    placeholder='E-mail' type="email"
                    value={formData.email}
                    onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
            </div>
            <div>
                <input className='outline-none px-3 py-2 rounded-md shadow-inner shadow-gray-200 w-full'
                    placeholder='Phone number' type="tel"
                    value={formData.phone}
                    onChange={(event) => setFormData({ ...formData, phone: event.target.value })} />
            </div>
        </div>
    )
}

export default PersonalInfo
