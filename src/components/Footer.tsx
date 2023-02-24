import React from 'react'
import circle from '../images/ellipse7.svg'

const Footer = () => {
  return (
    <footer className='bg-footer-linearbackground w-full flex justify-evenly p-14 relative text-white font-mulish'>
      <div className="column-one about-company flex flex-col justify-center bg-yellow-400 w-1/4">
        <div className="logo flex">
          <img src={circle} alt="circle" className='absolute bottom-40 left-16'/>
          <a href="/" className='absolute bottom-8-5 left-20 z-30 text-white font-mulish'>T</a>
          <a href="/" className='font-bold pb-4 md:pl-14'>Trafalgar</a>
        </div>
        <p className='text-white font-mulish font-light text-xs '>
          Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
        </p>
        <p className='copyright text-xs pt-5 font-mulish font-light'>©Trafalgar PTY LTD 2020. All rights reserved</p>
      </div>
      <div className="column-two flex flex-col w-1/4 ml-8">
        <h5 className='font-bold text-sm text-white pb-4'>Company</h5>
        <ul className="nav-links">
          <li><a className='mb-4 text-sm'  href="/">About</a></li>
          <li><a className='mb-4 text-sm' href="/testimonials">Testimonials</a></li>
          <li><a className='mb-4 text-sm' href="/doctor">Find a doctor</a></li>
          <li><a className='mb-4 text-sm' href="/apps">Apps</a></li>
        </ul>
      </div>

      <div className="column-three flex flex-col py-4 w-1/4">
        <h5 className='font-bold text-sm text-white pb-4'>Region</h5>
        <ul className="nav-links">
          <li><a className='mb-4 text-sm' href="/">Indonesia</a></li>
          <li><a className='mb-4 text-sm' href="/testimonials">Singapore</a></li>
          <li><a className='mb-4 text-sm' href="/doctor">HongKong</a></li>
          <li><a className='mb-4 text-sm' href="/apps">Canada</a></li>
        </ul>
      </div>

      <div className="column-three flex flex-col py-4 w-1/4">
        <h5 className='font-bold text-sm text-white pb-4'>Help</h5>
        <ul className="nav-links">
          <li><a className='mb-4 text-sm' href="/">Help center</a></li>
          <li><a className='mb-4 text-sm' href="/testimonials">Contact support</a></li>
          <li><a className='mb-4 text-sm' href="/doctor">Instructions</a></li>
          <li><a className='mb-4 text-sm' href="/apps">How it works</a></li>
        </ul>
      </div>


    </footer>
  )
}

export default Footer