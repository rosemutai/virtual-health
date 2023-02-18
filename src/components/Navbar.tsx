import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <a href="/">T</a>
        <a href="/">Trafalgar</a>
      </div>
      <nav className="menu-links">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/doctor">Find a doctor</a></li>
          <li><a href="/apps">Apps</a></li>
          <li><a href="/testimonies">Testimonies</a></li>
          <li><a href="/aboutus">About us</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar