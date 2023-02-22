import React from 'react'
import profileImg from '../images/profileImg.svg'
import arrowback from '../images/Arrorbackward.svg'
import arrowforward from '../images/Arrowforward.svg'
import bluecircle from '../images/bluecircle.svg'
import lightbluecircle from '../images/lightbluecircle.svg'


const Feedback = () => {
  return (
    <section className='flex flex-col mb-10 md:px-48'>
      <div className='bg-background-gradient rounded-2xl h-64 p-10 my-10'>
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
    </div>

    <div className="icons flex justify-center">
      <div className="arrowback">
        <img src={arrowback} className='w-7 -mt-1 mr-16' alt="arrow back" />
      </div>
      <div className="circles flex mx-3">
        <img src={bluecircle} className='w-2 h-2 mr-2' alt="blue circle" />
        <img src={lightbluecircle} className='w-2 h-2 mr-2' alt="light blue circle" />
        <img src={lightbluecircle} className='w-2 h-2 mr-2' alt="light blue circle" />
        <img src={lightbluecircle} className='w-2 h-2' alt="light blue circle" />
      </div>
      <div className="arrowforward">
        <img src={arrowforward} className='w-7 -mt-1 ml-16' alt="forward arrow" />
      </div>
    </div>
    </section>
    
  )
}

export default Feedback