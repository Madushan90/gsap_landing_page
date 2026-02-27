import React from 'react'
import { useState } from 'react'
import { allCocktails } from '../constants/constants'


const Menu = () => {

    const [currentIndex, setCurrentIndex] = useState(second);
    
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

        <nav className='cocktail-tabs' aria-label='Cocktail Navigation'>
            {allCocktails.map((cocktail, index)=>{
                const isActive = index === currnetIndex;
                return (
                    <button key={cocktail.id}>
                        {cocktail.title}
                    </button>   
                )
            })}
        </nav>

    </section>
  )
}

export default Menu