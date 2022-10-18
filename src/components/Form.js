import React, { useState } from 'react'
import PersonalInfo from './PersonalInfo';
import EducationalInfo from './EducationalInfo';
import Address from './Address';

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
        marks: 0,
        address: ''
    })

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
        <main className='form bg-white p-10'>
            <section className='space-y-5'>
                {/* Stepper Progress bar */}
                <div page={page}>{page + 1}</div>
                {/* Form Component Container */}
                <div className='form-container'>

                    {/* Form Headings  */}
                    <div className='header'>
                        <h1>{formTitles[page]}</h1>
                    </div>

                    {/* Form Body */}
                    <div className="body">
                        {PageDispaly(page)}
                    </div>

                    {/* Form Navigation */}
                    <div className="footer flex justify-between">
                        <button
                            disabled={page === 0}
                            onClick={() => {
                                setPage((currentPage) => (currentPage - 1))
                            }}
                        >
                            Back
                        </button>
                        <button
                            // disabled={page === formTitles.length - 1}
                            onClick={() => {
                                if (page === formTitles.length - 1) {
                                    alert('Data submitted')
                                    console.log(formData)
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
        </main>
    )
}

export default Form
