import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import Abt1  from '../../src/images/abt1.png'
import Abt2  from '../../src/images/abt2.png'
import Abt3  from '../../src/images/abt3.png'
import Abt4  from '../../src/images/abt4.png'
import Abt5  from '../../src/images/abt5.png'

const About = () => {
    
    useGSAP(() => {
        const splitText = new SplitText('#about h2', { type: 'words' });

        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top center',
    }});

    scrollTimeline.from(splitText.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: 'expo.out',
        stagger: 0.02,
    }).from('.top-grid div, .bottom-grid div', {
        opacity: 0,
        yPercent: 20,
        duration: 1,
        ease: 'power1.inOut',
        stagger: 0.04,
    }, '-=0.5');
    }, []);

  return (
  
    <div id='about'>
        <div className="mb-16 px-3 md:px-10">
             <div className="content">
                <div className="md:col-span-8">
                    <p className="badge">Best Cocktails</p>
                    <h2>
                        Where every detail matters <span>-</span>
                        from muddle to garnish
                    </h2>
                </div>

                <div className="sub-content">
                    <p>Every cocktail we serve is a reflection of our obsession with datail-from the first muddle to the final garnish. That care is what turns a simple drink into something turly memorable.</p>

                    <p className='md:text-3xl text-xl font-bold'>
                        <span className='text-4xl'>4.5</span>/5<br/> 
                        <span className='text-sm'>More than 4,000 customers</span>
                    </p>
                </div>

             </div>
        </div>

        <div className="top-grid px-3 md:px-10">
            <div className="md:col-span-3">
                <div className="noisy">
                    <img src={Abt1} alt="grid-image-1" />
                </div>
            </div>
            <div className="md:col-span-6">
                <div className="noisy">
                    <img src={Abt2} alt="grid-image-2" />
                </div>
            </div>
            <div className="md:col-span-3">
                <div className="noisy">
                    <img src={Abt5} alt="grid-image-5" />
                </div>
            </div>
        </div>

        <div className="bottom-grid px-3 md:px-10">
            <div className="md:col-span-8">
                <div className="noisy">
                    <img src={Abt3} alt="grid-image-3" />
                </div>
            </div>

            <div className="md:col-span-4">
                <div className="noisy">
                    <img src={Abt4} alt="grid-image-4" />
                </div>
            </div>
        </div>


    </div>
  )
}

export default About