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
                <ul>
                    {cocktailLists.map((name, country, detail, price) =>(
                        <li key={name}>
                            <div className="md:me-28">
                                {/* <h3>{name}</h3> */}
                                <p>{country} | {detail}</p>
                            </div>
                            <span>- {price}</span>
                        </li>
                    ) )}
                             
                </ul>
            </div>
        </div>
    </section>     
  )
}

export default Cocktails