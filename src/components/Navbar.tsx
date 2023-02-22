import React from 'react'
import circle from '../images/ellipse7.svg'

const Navbar = () => {
  return (
    <div className='navbar w-full bg-white h-16 md:flex relative md:justify-between bg-blue-600 pt-12 md:px-48'>
      <div className="logo flex">
        <img src={circle} alt="circle"  className='absolute top'/>
        <a href="/" className='absolute  left-52 top-14 texcenter z-30 text-white font-mulish'>T</a>
        <a href="/" className='text-dark-blue pt-2 md:pl-12'>Trafalgar</a>
      </div>
      <nav className="menu-links">
        <ul className='flex text-light-blue justify-between items-center'>
          <li className='md:mr-10 font-bold text-lg font-mulish'><a href="/">Home</a></li>
          <li className='md:mr-10 opacity-50 font-normal text-lg font-mulish'><a href="/doctor">Find a doctor</a></li>
          <li className='md:mr-10 opacity-50 font-normal text-lg font-mulish'><a href="/apps">Apps</a></li>
          <li className='md:mr-10 opacity-50 font-normal text-lg font-mulish'><a href="/testimonies">Testimonies</a></li>
          <li className='md:mr-10 opacity-50 font-normal text-lg font-mulish'><a href="/aboutus">About us</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar