import React from 'react'
import headerImage from '../images/headerillustration.svg'

const TopHeader = () => {
  return (
    <section className="about font-mulish w-full md:flex md:justify-between md:pt-8 bg-red-600">
        <div className="description-text md:w-1/2 md:flex md:flex-col md:mt-6">
          <h1 className='font-bold text-3xl text-black mix-blend-normal md:w-5/6'>Virtual healthcare for you</h1>
          <p className='w-11/12 font-light text-sm text-light-grey md:py-6'>Trafalgar provides progressive, and affordable 
            healthcare, accessible on mobile and online 
            for everyone
          </p>
          <button className='text-white rounded-3xl w-36 text-sm bg-blue py-2 px-5'>Consult today</button>
        </div>
        <div className="illustration md:w-1/2">
          <img src={headerImage} alt="doctor" />
        </div>
  </section>
  )
}

export default TopHeader