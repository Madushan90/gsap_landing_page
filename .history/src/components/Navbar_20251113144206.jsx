import React from 'react'
import { navLinks } from '../constants/navbar'

const Navbar = () => {
  return (
    <nav>
        <div>
            <a href='#home' className='flex items-center gap-2'>
                <p>Velvet Pour</p>
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