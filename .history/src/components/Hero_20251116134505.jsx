import React from 'react'
import LeftLeaf  from '../../public/images/hero-left-leaf.png'
import RightLeaf  from '../../public/images/hero-right-leaf.png'

const Hero = () => {
  return (
    <>
        <section id='hero' className='noisy'>
            <h1 className="title">Mojito </h1>
            <img className='left-leaf' src={LeftLeaf} alt='left-leaf' />

            <img className='right-leaf' src={RightLeaf} alt='right-leaf' />
            
            <div className="body">
                <div className="content">
                    <div className="space-y-5 hidden md:block">
                        <p>Cool. Crisp. Classic.</p>
                        <p className="subtitle">
                            Sip the Spirit <br/> of Summer
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero