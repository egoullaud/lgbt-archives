import React from 'react'
import {CgArrowLongDown} from 'react-icons/cg'
import {HiArrowLongDown} from 'react-icons/hi2'
import {HiOutlineArrowLongDown} from 'react-icons/hi2'
import downArrow from '../assets/down-arrow.jpg'

function Hero() {
  return (
    <div >
        <div className='flex '>
            <div className='flex flex-col  bg-[#0d8360] w-[50%] border-b-[0.1px] border-b-[#c7c7c7]'>
                <h1 className='text-white w-[85%] lg:text-7xl mx-4 my-4 lg:mt-[4rem] font-harmonicaBold'>
                    The following individuals took time out of their busy schedules to meet with our team,
                    and tell their stories.
                </h1>
                <h2 className='text-white w-[80%] lg:text-4xl px-4 py-6 font-harmonicaBold'>
                    We acknowledge that there were many more, and wish we had the time to 
                    have met with everyone. We gratefully thank them for their contributions
                    to the HIV/AIDS movement and to this project.
                </h2>
                <div className='w-[100%] flex mt-[10rem] mb-[2rem]'>
              
                <img src={downArrow} alt="" />
               
                </div>
               
        </div>
        
        <div className='bg-[#0b6c4f] w-[50%]'></div>
        
            </div>
      
    </div>
  )
}

export default Hero
