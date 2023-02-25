import React from 'react'
import circle from '../images/ellipse7.svg'

const Footer = () => {
  return (
    <footer className='bg-footer-linearbackground w-full flex justify-evenly p-14 relative text-white font-mulish'>
      <div className="column-one about-company flex flex-col w-1/4">
        <div className="logo flex">
          <img src={circle} alt="circle" className='absolute bottom-40 left-14'/>
          <a href="/" className='absolute bottom-8-5 left-5-5 z-30 text-white font-mulish'>T</a>
          <a href="/" className='font-bold ml-12 mt-8'>Trafalgar</a>
        </div>
        <p className='text-white font-mulish font-light text-xs mt-8 '>
          Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
        </p>
        <p className='copyright text-xs pt-5 font-mulish font-light'>©Trafalgar PTY LTD 2020. All rights reserved</p>
      </div>
      <div className="column-two flex flex-col w-1/4 items-center">
        <h5 className='font-bold text-sm text-white mt-8 mb-3 -ml-7'>Company</h5>
        <ul className="nav-links">
          <li className='mb-2 text-sm'><a  href="/">About</a></li>
          <li className='mb-2 text-sm'><a href="/testimonials">Testimonials</a></li>
          <li className='mb-2 text-sm'><a href="/doctor">Find a doctor</a></li>
          <li className=' text-sm'><a href="/apps">Apps</a></li>
        </ul>
      </div>

      <div className="column-three flex flex-col items-center w-1/4">
        <h5 className='font-bold text-sm text-white mt-8 mb-3 -ml-7'>Region</h5>
        <ul className="nav-links">
          <li className='mb-2 text-sm'><a href="/">Indonesia</a></li>
          <li className='mb-2 text-sm'><a href="/testimonials">Singapore</a></li>
          <li className='mb-2 text-sm'><a href="/doctor">HongKong</a></li>
          <li className='text-sm'><a href="/apps">Canada</a></li>
        </ul>
      </div>

      <div className="column-three flex flex-col items-center w-1/4">
        <h5 className='font-bold text-sm text-white mt-8 mb-3 -ml-5-5'>Help</h5>
        <ul className="nav-links ">
          <li className='mb-2 text-sm'><a href="/">Help center</a></li>
          <li className='mb-2 text-sm'><a href="/testimonials">Contact support</a></li>
          <li className='mb-2 text-sm'><a href="/doctor">Instructions</a></li>
          <li className='text-sm'><a href="/apps">How it works</a></li>
        </ul>
      </div>


    </footer>
  )
}

export default Footer