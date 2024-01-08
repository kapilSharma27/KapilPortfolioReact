import React from 'react';

const ExpandingCards = ({ cards }) => {
    const [ activeCard, setActiveCard ] = React.useState(1);
    return (
      <div className='cards__container'>
        {cards.map((card) => {
          const style = {
            backgroundImage: `url(${card.image})`
          }
          return (
            <div 
              className={activeCard === card.id ? 'card active' : 'card inactive'}
              style={style}
              onClick={() => setActiveCard(card.id)}
             >
              <span className='card__title'>
                <h4>{card.title} by <span className='emphasis'>{card.author}</span></h4>
              </span>
            </div>
           )
         })}
      </div>
    )
  }

export default ExpandingCards;