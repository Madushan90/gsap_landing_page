import React from 'react'
import LeftLeaf  from '../../public/images/left-leaf.png'

const Hero = () => {
  return (
    <>
        <section id='#hero' className='noisy'>
            <h1 className="title">MOHITO</h1>
            <img className='left-leaf' src={LeftLeaf} alt='left-leaf' />
        </section>
    </>
  )
}

export default Hero