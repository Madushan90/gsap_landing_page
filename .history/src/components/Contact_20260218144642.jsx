import React, { use } from 'react'
import { openingHours, socials } from '../constants/constants'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'


const Contact = () => {

  useGSAP(() => {

    const titleSplit = SplitText.create('#contact h2', {type: 'words'});

    const timeLine = gsap.timeline({
    scrollTrigger: {
      trigger: '#contact',
      start: 'top center',
        },
        ease: 'power1.inOut',
      });

      timeLine.from(titleSplit.words, {
        opacity: 0, yPercent: 100, stagger: 0.02
      }).from('#contact h3, #contact p', {
        opacity: 0, yPercent: 20, stagger: 0.1})


  });



  return (
    <footer id='contact'>

      <img src="../../src/images/footer-right-leaf.png" alt="Leaf Right" id="f-right-leaf"/>
      <img src="../../src/images/footer-left-leaf.png" alt="Leaf Left" id="f-left-leaf"/>

      <div className="content">
        <h2>Where To Find Us </h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>17, Mile Drive, The Lone Cypress, CA, Pebble Beach, 93953</p>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>(555) 123-4567</p>
          <p>hello@mocktailjsc.com</p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time)=>(
            <p key={time.day}>
              {time.day}: {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socail Media</h3>
          <div className="flex-center gap-5 mt-3">
            {socials.map((social)=>(
              <a 
              key={social.name} 
              href={social.url} 
              target='_blank'
              rel='noopener noreferrrer'
              aria-label={social.name}>
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>

      </div>

    </footer>
  )
}

export default Contact