import React from 'react'
import btcLogo from '../assets/BTCG Logo.svg'
import aidsVan from '../assets/AV-Logo.svg'
import davidCooper from '../assets/David Cooper.svg'
import moonCoin from '../assets/Event Sponsor.svg'
import flashPoint from '../assets/Flash point.svg'
import fusionCine from '../assets/Fusion cinne.svg'
import commodore from '../assets/Host Sponsor.svg'
import georgiaStraight from '../assets/Media Sponsor.svg'
import viiv from '../assets/Platinum Sponsor.svg'
import bond from '../assets/Print Sponsor.svg'
import mcMillan from '../assets/Silver Sponsor 1.svg'
import vancity from '../assets/Silver Sponsor.svg'
import city from '../assets/Television Sponsor 1.svg'
import outTv from '../assets/Television Sponsor 2.svg'


function Sponsors() {
  return (
    <div className='flex flex-col pb-[6rem]'>
      <div className='flex flex-col justify-center items-center'>
        <h3 className='text-[#0d8360] font-harmonicaBold text-4xl mt-[5rem]'>
          The campaign was produced by
        </h3>
        <img className='m-[4rem]' src={btcLogo} alt="be the change group logo" />
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h3 className='text-[#0d8360] font-harmonicaBold text-4xl mt-[1rem]'>
          Thank you to the generous donations of
        </h3>
        <div className='flex p-[2rem]'> 
          <img src={flashPoint} alt="" />
          <img className='mx-[3rem]' src={davidCooper} alt="" />
          <img  src={fusionCine} alt="" />
        </div>
       
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h3 className='text-[#0d8360] font-harmonicaBold text-4xl my-[2rem]'>
         Our Sponsors
        </h3>
        <div className='flex w-[100%] text-lg justify-evenly mx-[10rem] font-harmonicaReg'>
          <div className='flex flex-col '>
            <p className='text-center pb-4'>Platinum Sponsor</p>
            <img src={viiv} alt="" />
          </div>
          <div className='flex flex-col'>
            <p className='text-center pb-4'>Host Sponsor</p>
            <img src={commodore} alt="" />
          </div>
          <div className='flex flex-col'>
            <p className='text-center pb-4'>Television Sponsor</p>
            <img src={city} alt="" />
          </div>
          <div className='flex flex-col'>
            <p className='text-center pb-4'>Television Sponsor</p>
            <img src={outTv} alt="" />
          </div>
          <div className='flex flex-col'>
            <p className='text-center pb-4'>Silver Sponsor</p>
            <img src={mcMillan} alt="" />
          </div>
        </div>
        <div className='flex justify-evenly w-[90%] mt-[2rem] text-lg font-harmonicaReg'>
          <div className='flex flex-col'>
            <p className='text-center pb-4'>Silver Sponsor</p>
            <img src={vancity} alt="" />
          </div>
          <div className='flex flex-col'>
            <p className='text-center pb-4'>Media Sponsor</p>
            <img src={georgiaStraight} alt="" />
          </div>
          <div className='flex flex-col'>
            <p className='text-center pb-4'>Print Sponsor</p>
            <img src={bond} alt="" />
          </div>
          <div className='flex flex-col'>
            <p className='text-center pb-4'>Event Sponsor</p>
            <img src={moonCoin} alt="" />
          </div>
         
        </div>
        
      </div>
    </div>
  )
}

export default Sponsors
