import React from 'react'
import LeftLeaf  from '../../public/images/cocktail-left-leaf.png'
import RightLeaf  from '../../public/images/cocktail-right-leaf.png'

const Hero = () => {
  return (
    <>
        <section id='#hero' className='noisy'>
            <h1 className="title">MOHITO</h1>
            <img className='left-leaf' src={LeftLeaf} alt='left-leaf' />

            <img className='right-leaf' src={RightLeaf} alt='right-leaf' />
        </section>
    </>
  )
}

export default Hero