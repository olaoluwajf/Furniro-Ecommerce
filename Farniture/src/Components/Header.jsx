import React from 'react'
import Logo from '../assets/logo.png';
const Header = () => {
  return (
    <div>
        <div>
            <img src={Logo} alt="" />
        </div>
        <div>
            Home
        </div>
        <div>
            links
        </div>
    </div>
  )
}

export default Header