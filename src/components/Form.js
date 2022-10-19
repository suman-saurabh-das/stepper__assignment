import React, { useState } from 'react'
import PersonalInfo from './PersonalInfo';
import EducationalInfo from './EducationalInfo';
import Address from './Address';
import StepperProgressBar from './StepperProgressBar';
import UserResponse from './UserResponse';

function Form() {
    // state variable to store the page information
    const [page, setPage] = useState(0);

    // state variable to store user entered data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        qualification: '',
        trade: '',
        marks: '',
        address: ''
    })

    // state variable to toggle visibiltiy of UserResponse
    const [visibility, setVisibility] = useState(false)

    // form headings array (will be displayed based on the page index)
    const formTitles = ['Enter Personal Details', 'Enter Educational Details', 'Enter Address'];

    // function to return components for Form Body based on page
    const PageDispaly = (page) => {
        if (page === 0) {
            return <PersonalInfo formData={formData} setFormData={setFormData} />
        } else if (page === 1) {
            return <EducationalInfo formData={formData} setFormData={setFormData} />
        } else {
            return <Address formData={formData} setFormData={setFormData} />
        }
    }

    return (
        <main className={`form bg-cyan-100 font-semibold font-mono p-10 relative rounded-md shadow-lg shadow-gray-500 -right-1/2 -translate-x-1/2 translate-y-1/4 w-1/3`}>
            <section className={visibility ? 'hidden' : ''}>

                {/* Stepper Progress bar */}
                <StepperProgressBar page={page}/>
                
                {/* Form Component Container */}
                <div className='form-container'>

                    {/* Form Headings  */}
                    <div className='header'>
                        <h1 className='text-cyan-900 text-2xl'>{formTitles[page]}</h1>
                    </div>

                    {/* Form Body */}
                    <div className="body">
                        {PageDispaly(page)}
                    </div>

                    {/* Form Navigation */}
                    <div className="footer flex justify-between text-cyan-900">
                        <button className='bg-cyan-300 duration-200 hover:bg-cyan-400 cursor-pointer px-6 py-2 rounded-lg shadow-inner shadow-cyan-600'
                            disabled={page === 0}
                            onClick={() => {
                                setPage((currentPage) => (currentPage - 1))
                            }}
                        >
                            Back
                        </button>
                        <button className='bg-cyan-300 duration-200 hover:bg-cyan-400 cursor-pointer px-6 py-2 rounded-lg shadow-inner shadow-cyan-600'
                            // disabled={page === formTitles.length - 1}
                            onClick={() => {
                                if (page === formTitles.length - 1) {
                                    // console.log(formData)
                                    setVisibility(true)
                                } else {
                                    setPage((currentPage) => (currentPage + 1))
                                }
                            }}
                        >
                            {page === formTitles.length - 1 ? "Submit" : "Next"}
                        </button>
                    </div>
                </div>
            </section>
            <section className='h-full'>
                <UserResponse visibility={visibility} formData={formData} />
            </section>
        </main>
    )
}

export default Form
