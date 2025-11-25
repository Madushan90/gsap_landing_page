import React from 'react'
import { cocktailLists } from '../constants/constants'
import CocktailLeftLeaf  from '../../src/images/cocktail-left-leaf.png'
import CocktailRightLeaf  from '../../src/images/cocktail-right-leaf.png'

const Cocktails = () => {
  return (
    <section id="cocktails" className="noisy">
        <img src={CocktailLeftLeaf} alt='left-leaf' id='c-left-leaf' />

        <img src={CocktailRightLeaf} alt='right-leaf' id='c-right-leaf' />

        <div className="list">
            <div className="popular">
                <h2>Most Popular Cocktails</h2>
                
            </div>
        </div>
    </section>     
  )
}

export default Cocktails