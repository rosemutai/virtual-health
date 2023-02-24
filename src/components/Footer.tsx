import React from 'react'
import circle from '../images/ellipse7.svg'

const Footer = () => {
  return (
    <footer className='bg-footer-linearbackground w-full flex justify-between p-14 relative text-white font-mulish'>
      <div className="column-one about-company flex flex-col justify-center">
        <div className="logo flex">
          <img src={circle} alt="circle" className='absolute bottom-32 left-20'/>
          <a href="/" className='absolute bottom-8-5 left-24 z-30 text-white font-mulish'>T</a>
          <a href="/" className='font-bold pb-4 md:pl-20'>Trafalgar</a>
        </div>
        <p className='text-white font-mulish font-light text-sm'></p>
        <p className='copyright text-sm font-mulish font-light'>©Trafalgar PTY LTD 2020. All rights reserved</p>
      </div>
      <div className="column-two flex flex-col">
        <h5 className='font-bold text-sm text-white py-4'>Company</h5>
        <ul className="nav-links">
          <li><a href="/">About</a></li>
          <li><a href="/testimonials">Testimonials</a></li>
          <li><a href="/doctor">Find a doctor</a></li>
          <li><a href="/apps">Apps</a></li>
        </ul>
      </div>

      <div className="column-three flex flex-col">
        <h5 className='font-bold text-sm text-white'>Region</h5>
        <ul className="nav-links">
          <li><a href="/">Indonesia</a></li>
          <li><a href="/testimonials">Singapore</a></li>
          <li><a href="/doctor">HongKong</a></li>
          <li><a href="/apps">Canada</a></li>
        </ul>
      </div>

      <div className="column-three flex flex-col">
        <h5 className='font-bold text-sm text-white'>Help</h5>
        <ul className="nav-links">
          <li><a href="/">Help center</a></li>
          <li><a href="/testimonials">Contact support</a></li>
          <li><a href="/doctor">Instructions</a></li>
          <li><a href="/apps">How it works</a></li>
        </ul>
      </div>


    </footer>
  )
}

export default Footer