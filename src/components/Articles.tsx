import React from 'react'
import image1 from '../images/image1.svg'
import image2 from '../images/image2.svg'
import image3 from '../images/image3.svg'
import arrowforward from '../images/Arrowforward.svg'


const Articles = () => {
  return (
    <div className='flex flex-col pt-4 w-full mx-auto'>
      <div className='services-top'>
        <h2 className='services-title text-black text-center font-mulish font-bold text-3xl my-4'>
          Check out our latest article
        </h2>
        <hr className='border-black border w-14 text-center mx-auto mb-2'/>
      </div>
      <section className="cards bg-hero-pattern bg-contain bg-no-repeat my-5 grid grid-cols-3 grid-rows-1 gap-y-3 px-">
        <div className="card w-60 h-96 rounded-2xl bg-white shadow-3xl flex flex-col py-4 px-4 
          c">
          <img src={image2} alt="search" className='w-full my-4 rounded-t-xl' />
          <h3 className='text-black font-bold font-mulish text-base mix-blend-normal'>
            Disease detection, check up in the laboratory
          </h3>
          <p className='font-mulish text-light-grey mix-blend-normal text-xs py-2
            leading-6'>In this case, the role of the health laboratory is very important to do a disease detection...
          </p>
          <button className='flex w-36 text-sm text-blue mt-4'>
            <p>Read more</p>
            <img src={arrowforward} className='w-5 mt-1 ml-2' alt="forward arrow" />
          </button>
        </div>

        <div className="card w-60 h-96 rounded-2xl bg-white shadow-3xl flex flex-col py-4 px-4">
          <img src={image1} alt="search" className='w-full my-4 rounded-t-xl' />
          <h3 className='text-black font-bold font-mulish text-base mix-blend-normal'>
            Herbal medicines that are safe for consumption
          </h3>
          <p className='font-mulish text-light-grey mix-blend-normal text-xs py-2
            leading-6'>Herbal medicine is very widely used at this time because of its very good for your health...
          </p>
          <button className='flex w-36 text-sm text-blue mt-4'>
            <p>Read more</p>
            <img src={arrowforward} className='w-5 mt-1 ml-2' alt="forward arrow" />
          </button>
        </div>

        <div className="card w-60 h-96 rounded-2xl bg-white shadow-3xl flex flex-col py-4 px-4">
          <img src={image3} alt="search" className='w-full my-4 rounded-t-xl' />
          <h3 className='text-black font-bold font-mulish text-base mix-blend-normal'>
            Natural care for healthy facial skin
          </h3>
          <p className='font-mulish text-light-grey mix-blend-normal text-xs py-2
            leading-6'>A healthy lifestyle should start from now and also for your skin health.There are some...</p>
          <button className='flex w-36 text-sm text-blue mt-4'>
            <p>Read more</p>
            <img src={arrowforward} className='w-5 mt-1 ml-2' alt="forward arrow" />
          </button>
        </div>
        
      </section>
      <button className='bg-white rounded-3xl w-36 text-sm border border-blue text-blue
       py-2 px-5 md:w-36 mx-auto my-3'>View all</button>
    </div>
  )
}

export default Articles