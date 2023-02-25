import React from 'react'
import frame1 from '../images/Frame.svg'
import clipboard from '../images/clipboard.svg'
import frame2 from '../images/Frame2.svg'
import notebook from '../images/notebook.svg'
import suitcase from '../images/suitcase.svg'
import consultationImg from '../images/Consultation.svg'

const Services = () => {
  return (
    <div className='our-services bg-hero-pattern bg-contain bg-left-bottom bg-no-repeat flex flex-col 
      pt-2 w-11/12 mt-14 mx-auto md:px-48'>
      <div className='services-top mb-14'>
        <h2 className='services-title text-black text-center font-mulish font-bold text-3xl my-4'>Our Services</h2>
        <hr className='border-black border w-14 text-center mx-auto mb-2'/>
        <p className='text-light-grey font-mulish font-lg font-light text-center mix-blend-normal'>
          We provide to you the best choiches for you. Adjust it to your 
          health needs and make sure your undergo treatment with 
          our highly qualified doctors you can consult with us which type
          of service is suitable for your health
        </p>
      </div>
      <section className="cards bg-services-bg bg-contain bg-[20%] bg-no-repeat pb-6 my-5 grid grid-cols-3
       grid-rows-2 gap-y-2">
        <div className="card w-60 h-64 rounded-2xl bg-white shadow-3xl flex flex-col py-4 px-4 
          mr8">
          <img src={frame1} alt="search" className='w-16 h-12 my-4' />
          <h3 className='text-black font-bold font-mulish text-xl mix-blend-normal'>Search doctor</h3>
          <p className='font-mulish text-light-grey mix-blend-normal text-xs py-2
            leading-6'>Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
        </div>

        <div className="card w-60 h-64 rounded-2xl bg-white shadow-3xl flex flex-col py-4 px-4 
        c">
          <img src={frame2} alt="search" className='w-16 h-12 my-4' />
          <h3 className='text-black font-bold font-mulish text-xl mix-blend-normal'>Online Pharmacy</h3>
          <p className='font-mulish text-light-grey mix-blend-normal text-xs py-2
            leading-6'>Buy  your medicines with our mobile application with a simple delivery system</p>
        </div>

        <div className="card w-60 h-64 rounded-2xl bg-white shadow-3xl flex flex-col py-4 px-4 ">
          <img src={consultationImg} alt="search" className='w-16 h-12 my-4' />
          <h3 className='text-black font-bold font-mulish text-xl mix-blend-normal'>Consultation</h3>
          <p className='font-mulish text-light-grey mix-blend-normal text-xs py-2
            leading-6'>Free consultation with our trusted doctors and get the best recomendations</p>
        </div>

        <div className="card w-60 h-64 rounded-2xl bg-white shadow-3xl flex flex-col py-4 px-4 
          shadow-[10px_40px_50px_rgba(229, 233, 246, 0.4)">
          <img src={clipboard} alt="search" className='w-16 h-12 my-4' />
          <h3 className='text-black font-bold font-mulish text-xl mix-blend-normal'>Details info</h3>
          <p className='font-mulish text-light-grey mix-blend-normal text-xs py-2
            leading-6'>Free consultation with our trusted doctors and get the best recomendations</p>
        </div>

        <div className="card w-60 h-64 rounded-2xl bg-white shadow-3xl flex flex-col py-4 px-4 ">
          <img src={suitcase} alt="search" className='w-16 h-12 my-4' />
          <h3 className='text-black font-bold font-mulish text-xl mix-blend-normal'>Emergency care</h3>
          <p className='font-mulish text-light-grey mix-blend-normal text-xs py-2
            leading-6'>You can get 24/7 urgent care for yourself or your children and your
            lovely family</p>
        </div>

        <div className="card w-60 h-64 rounded-2xl bg-white shadow-3xl flex flex-col py-4 px-4 ">
          <img src={notebook} alt="search" className='w-16 h-12 my-4' />
          <h3 className='text-black font-bold font-mulish text-xl mix-blend-normal'>Tracking</h3>
          <p className='font-mulish text-light-grey mix-blend-normal text-xs py-2
            leading-6'>Track and save your medical history and health data </p>
        </div>
        
      </section>
      <button className='bg-white rounded-3xl w-36 text-sm border border-blue text-blue
       py-2 px-5 md:w-36 mx-auto my-3'>Learn more</button>
      
    </div>
  )
}

export default Services