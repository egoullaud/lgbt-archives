import React from 'react'
import avLogo from '../assets/av-logo.jpg'
import upArrow from '../assets/up-arrow.jpg'

function Footer() {
  return (
    <div className='flex flex-col bg-[#0d8360] justify-center items-center text-white font-harmonicaReg'>
      <div className='border-b-2 border-white w-[98%] py-[2rem]'>
        <div className='flex flex-col items-end justify-end w-[100%]'>
          <img className='w-[1.75%] mb-[2rem]' src={upArrow} alt="" />
          <p className='text-2xl'>Back to top</p>
        </div>
    
      </div>
      <div className='flex w-[100%] justify-between pt-[2rem]'>
        <div className='ml-4'>
          <img className='mb-2 w-[40%]' src={avLogo} alt="" />
          <p>Learn more about AIDS Vancouver</p>
        </div>
        <div className='flex items-end mr-4'>
          <p className='text-white text-sm'> 2022 © AIDS Vancouver | Visit us at<span className='cursor-pointer underline' > aidsvancouver.org</span> </p>
        </div>
      
      </div>
    </div>
  )
}

export default Footer
