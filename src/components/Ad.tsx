import React from 'react'
import illustration1 from '../images/trafalgarillustration.svg'
import illustration2 from '../images/trafalgarsec.svg'

const Ad = () => {
  return (
    <div className='w-full mt-5'>
      <section className='top-ad flex md:justify-evenly'>
        <div className="w-1/2">
          <img src={illustration1} alt="doctor with smart phone" className='w-3/4 h-80' />
        </div>
        <div className="description flex flex-col w-1/2">
          <h2 className='font-mulish text-black font-bold text-xl w-1/2 leading-7'>Leading healthcare providers</h2>
          <hr className='border-black border w-14 my-2'/>
          <p className='text-light-grey font-mulish text-xs w-9/12 my-1 leading-5 pr-4 font-light mix-blend-normal'>
            Trafalgar provides progressive, and affordable healthcare, accessible 
            on mobile and online for everyone. To us, it’s not just work. We take pride 
            in the solutions we deliver
          </p>
          <button className='bg-white rounded-3xl w-36 text-sm border border-blue text-blue
            py-2 px-5 mt-4'>Learn more
          </button>
        </div>
      </section>

      <section className='bottom-ad flex md:justify-center'>
        <div className="description flex flex-col w-1/2 pt-16">
          <h2 className='font-mulish text-black font-bold text-xl w-1/2 leading-7'>Download our 
            mobile apps</h2>
          <hr className='border-black border w-14 my-2'/>
          <p className='text-light-grey font-mulish text-xs w-9/12 my-1 leading-5 pr-4 font-light mix-blend-normal'>
            Our dedicated patient engagement app and web portal allow you to 
            access information instantaneously (no tedeous form, long calls, 
            or administrative hassle) and securely
          </p>
          <button className='bg-white rounded-3xl w-36 text-sm border border-blue text-blue
            py-2 px-5 mt-4'>Download
          </button>
        </div>
        <div className="w-1/2">
          <img src={illustration2} alt="doctor with smart phone" className='w-5/6 l-7 h-80' />
        </div>
      </section>
    </div>
  )
}

export default Ad