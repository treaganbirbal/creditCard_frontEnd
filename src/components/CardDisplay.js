import React from 'react';


const CardDisplay = (props) => {
    return (
        <div className='card-display'>
         <div className='card'>
            <span className='card-name'>{props.cardInfo.firstName}</span>
            <span className='card-name'>{props.cardInfo.lastName}</span>
          <div className='date'>
            <span>{props.cardInfo.expMonth}</span>
            <span>{props.cardInfo.expDay}</span>
            <span>{props.cardInfo.expYear}</span>
          </div>
         </div>
        </div>
    )
}

export default CardDisplay