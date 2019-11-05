import React from 'react';
// import style from '../app.css'

const CardDisplay = (props) => {
    return (
        <div className='card-display'>
         <div className='card'>
             <img className='card-img' src="https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
            <span>{props.cardNumber}</span>
            <span className='card-name'>{props.firstName}</span>
            <span className='card-name'>{props.lastName}</span>
          <div className='date'>
            <span>{props.expMonth}</span>
            <span>{props.expYear}</span>
          </div>
         </div>
        </div>
    )
}

export default CardDisplay