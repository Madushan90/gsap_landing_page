import React from 'react'
import gsap from 'gsap'
import { navLinks } from '../constants/constants'
import Logo from '../../public/images/logo.png'
import { useGSAP } from '@gsap/react'

const Navbar = () => {

    useGSAP(()=> {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top',
            }
        });

         navTween.fromTo(
            'nav',
            {backgroundColor:'transparent'},
            {
                backgroundColor: '#00000050',
                backgroundFilter: 'blur(10px)',
                duration: 1, ease: 'power1.inOut'
            }
        );
    })

  return (
    <nav>
        <div>
            <a href='#home' className='flex items-center gap-2'>
                <img src={Logo} />
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