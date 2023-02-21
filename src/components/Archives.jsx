import React from 'react'
import archives from '../assets/bc-lgbt-archives.jpg'

function Archives() {
  return (
    <div className='bg-[#0d8360] flex'>
      <div className='w-[50%] flex justify-center my-[4rem]'>
        <img className='w-[60%]' src={archives} alt="" />
      </div>
      <div className='w-[50%] flex flex-col justify-center my-[6rem]'>
        <h1 className='font-harmonicaBold  text-white w-[100%] text-7xl mt-[2rem] mb-[4rem]'>
          BC Gay & <br/> Lesbian Archives
        </h1>
        <p className='text-white font-harmonicaReg text-3xl pr-[6rem] w-[85%]'>
          The BC Gay & Lesbian Archives was founded in 1976 with the task of 
          collecting, preserving items of British Columbia gay, lesbian, bisexual,
          transgendered and intersexual persons. Since it began, the collection
          has grown to over three-quarters of a million items, including
          a comprehensive HIV archive. <br/> <br/>
          Throughout this project, it begame clear to us the importance
          of having such a record of our history. Without the passionate and tenacious work of 
          archivist Ron Dutton, the AIDS Vancouver 30 30 Campaign would certainly not be
          the same. <br/> <br/>
          The archives is located in the West End of Vancouver and materials can be examined by 
          appointment by calling Ron Dutton at 604-669-5978 or by contacting rondutton@shaw.ca
        </p>
      </div>
      
    </div>
  )
}

export default Archives
