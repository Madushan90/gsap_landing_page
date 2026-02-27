import { useRef, useState } from 'react'
import { allCocktails } from '../constants/constants'


const Menu = () => {

    const contentRef = useRef();

    const [currentIndex, setCurrentIndex] = useState(0);

    const totalCocktails = allCocktails.length;

    const goToSlide = (index) => {
        const newIndex = (index+totalCocktails) % totalCocktails;
        setCurrentIndex(newIndex);
    }

    const getCocktailAt = (indexOffset) => {
        return allCocktails[(currentIndex + indexOffset + totalCocktails) % totalCocktails];
    }

    const currentCocktail = getCocktailAt(0);
    const prevCocktail = getCocktailAt(-1);
    const nextCocktail = getCocktailAt(1);
    
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
                const isActive = index === currentIndex;
                return (
                    <button 
                    key={cocktail.id} 
                    className={`${isActive ? 'text-white border-white' : 'text-white/50 border-white/50'}`}
                    onClick={() =>goToSlide(index)}>
                        {cocktail.name}
                    </button>   
                )
            })}
        </nav>

        <div className="content">
            <div className="arrows">
                <button 
                    className='flex flex-col items-center text-center gap-4'
                    onClick={() => goToSlide(currentIndex - 1)}>
                    <span>{prevCocktail.name}</span>    
                    <img src='../../src/images/right-arrow.png' 
                        alt='arrow right'
                        aria-hidden="true"
                    />
                </button>

                <button 
                    className='flex flex-col items-center text-center gap-4'
                    onClick={() => goToSlide(currentIndex + 1)}>
                    <span>{nextCocktail.name}</span>    
                    <img src='../../src/images/left-arrow.png' 
                        alt='arrow left'
                        aria-hidden="true"
                    />
                </button>
            </div>
            <div className="cocktail">
                <img className='object-contain' src={currentCocktail.image} 
                    alt='current cocktail'
                />
            </div>
            
        </div>

        <div className="recipe">
                <div ref={contentRef} className='info'>
                    <p>Recipe For: </p>
                    <p id='title'>{currentCocktail.name}</p>
                </div>
            </div>
                <div className="details">
                    <h2>{currentCocktail.title}</h2>
                    <p>{currentCocktail.description}</p>
                </div>

    </section>
  )
}

export default Menu