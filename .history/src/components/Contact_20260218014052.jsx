import React from 'react'
import { openingHours } from '../constants/constants'


const Contact = () => {
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

      </div>

    </footer>
  )
}

export default Contact