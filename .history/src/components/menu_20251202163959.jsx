import React from 'react'

const Menu = () => {
  return (
    <section id='menu' aria-labelledby='menu-headimg'>
        <img src='../../src/images/slider-left-leaf.png' 
            alt='left leaf'
            id='m-left-leaf'
        />
        <img src='../../src/images/slider-right-leaf.png' 
            alt='right leaf'
            id='m-right-leaf'
        />

        <h2 id='menu-heading' className="sr-only">
            Cocktail Menu
        </h2>

    </section>
  )
}

export default Menu