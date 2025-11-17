import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import LeftLeaf  from '../../public/images/hero-left-leaf.png'
import RightLeaf  from '../../public/images/hero-right-leaf.png'


const Hero = () => {

    useGSAP(()=> {
        const heroSplit = new SplitText('.title', {type: 'chars, words'});
        const paragraphSplit = new SplitText('.subtitle', {type: 'lines'});
        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.6
        })

    },[])

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

                    <div className="view-cocktails">
                        <p className="subtitle">
                            Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes - designed to delight your senses.
                        </p>
                        <a href='#cocktails'>View Cocktails</a>
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}

export default Hero