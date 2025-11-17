import React from 'react'
import { navLinks } from '../constants/constants'
import {Logo} from '../../public/images/logo.png'

const Navbar = () => {
  return (
    <nav>
        <div>
            <a href='#home' className='flex items-center gap-2'>
                <p>Velvet Pour</p>
                <img src={Logo} />
            </a>

            <ul>
                {navLinks.map((link)=>{
                    return (
                    <li key={link.id}>{link.title}</li>
                )})}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar