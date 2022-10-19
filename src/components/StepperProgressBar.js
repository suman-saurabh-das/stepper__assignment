import React from 'react'

function StepperProgressBar({ page }) {
  return (
    <div className='relative pb-8'>
      <div className='flex justify-between text-cyan-900'>
        <span className={`${page === 0 ? 'bg-cyan-400' : 'bg-cyan-200'} duration-200 flex h-12 items-center justify-center rounded-full shadow-inner shadow-cyan-600 w-12`}>1</span>
        <span className={`${page === 1 ? 'bg-cyan-400' : 'bg-cyan-200'} duration-200 flex h-12 items-center justify-center rounded-full shadow-inner shadow-cyan-600 w-12`}>2</span>
        <span className={`${page === 2 ? 'bg-cyan-400' : 'bg-cyan-200'} duration-200 flex h-12 items-center justify-center rounded-full shadow-inner shadow-cyan-600 w-12`}>3</span>
      </div>
      <div className='bg-cyan-200 h-1 relative shadow-inner shadow-cyan-600 -top-6 -z-10'></div>
    </div>
  )
}

export default StepperProgressBar
