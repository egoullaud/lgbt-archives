import React from 'react'
import logo from '../assets/3030-logo.svg'

function NavBar() {
  return (
    <div className='flex'>
      <div className='flex bg-[#0d8360] w-[50%]  text-white '>
        <img className='w-[25%] m-4' src={logo} alt="3030 logo" />
        <p className='md:text-xs lg:text-lg p-4 mr-2 leading-relaxed font-harmonicaReg'>
          The 30 30 Campaign was created in 2013 to celebrate AIDS Vancouver's
           30th anniversary. The campaign pieces together the dynamic history of
            HIV in Vancouver, told by and for those who were there.</p>
      </div>
      <div className='bg-[#0b6c4f] w-[50%] '>
        <ul className=' flex justify-end items-center font-harmonicaReg text-lg mt-[2rem]'>
          <li className='mx-8 text-[#d5d5d5] underline'> <a href="#">Stories</a></li>
          <li className='mx-8 font-semibold text-white underline'> <a href="#">Acknowledgements</a></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
