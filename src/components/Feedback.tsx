import React from 'react'
import profileImg from '../images/profileImg.svg'

const Feedback = () => {
  return (
    <section className='bg-background-gradient rounded-3xl h-64 p-10'>
      <h2 className='font-mulish font-bold text-white text-2xl text-center 
        pt-6 pb-3'>What our customer are saying
      </h2>
      <hr className='border-white mx-auto border w-14'/>
      <div className='bottom-ad flex justify-between ml-8 mt-8'>
        <div className="img-about flex ml-8 w-1/2">
          <img src={profileImg} className='w-24 h-24' alt="CEO" />
          <div className='flex flex-col items-center justify-center'>
            <h5 className='text-white font-bold text-sm pl-5 tracking-wider pb'>Edward Newgate</h5>
            <h6 className='text-sm text-white font-normal -ml-1 tracking-wide'>Founder Circle</h6>
          </div>
        </div>
        <div className='w-1/2'>
          <p className="desc text-white font-mulish font-normal opacity-90 mix-blend-normal text-xs m 
            px-2 leading-5">
            “Our dedicated patient engagement app and 
              web portal allow you to access information instantaneously
              (no tedeous form, long calls, or administrative hassle) and securely”
          </p>
        </div>
      </div>
    </section>
  )
}

export default Feedback