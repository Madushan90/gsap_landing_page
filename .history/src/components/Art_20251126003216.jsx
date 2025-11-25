import React from 'react' 
import { goodLists } from '../constants/constants'

const Art = () => {
  return (
    <div id='art'>
        <div className="container mx-auto h-full pt-20">
            <h2 className="will-fade">The Art</h2>

            <div className="content">
                <ul className="space-y-4 will-fade">
                    {goodLists.map((features, index)=>{
                        return (
                            <li key={index} className='flex items-center gap-2'>
                                <img src='../../src/images/check.png' alt='check' />
                                <p>{features}</p>
                            </li>
                        );
                    })}
                </ul>

                <div className="cocktail-img">
                    <img src='../../src/images/under-img.jpg' 
                        alt='cocktail' 
                        className='abs-center masked-img size-full object-contain'
                    
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Art