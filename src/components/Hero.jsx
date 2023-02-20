import React from 'react'
import {CgArrowLongDown} from 'react-icons/cg'

function Hero() {
  return (
    <div >
        <div className='flex h-[60vh]'>
            <div className='flex flex-col items-center bg-[#0d8360] w-[50%]'>
                <h1 className='text-white font-extrabold text-3xl mr-2 my-4 w-[90%]'>
                    The following individuals took time out of their busy schedules to meet with our team,
                    and tell their stories.
                </h1>
                <h2 className='text-white font-bold w-[90%] text-2xl mr-2 my-4'>
                    We acknowledge that there were many more, and wish we had the time to 
                    have met with everyone. We gratefully thank them for their contributions
                    to the HIV/AIDS movement and to this project.
                </h2>
                <div className='w-[100%] flex md:mt-[20%]'>
                <CgArrowLongDown className='text-6xl text-white '/> 
                </div>
               
        </div>
        
        <div className='bg-[#0b6c4f] w-[50%]'></div>
        
            </div>
      
    </div>
  )
}

export default Hero
