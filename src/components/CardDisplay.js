import React from 'react';
// import style from '../app.css'

const CardDisplay = (props) => {
    return (
        <div className='card-display'>
         <div className='card'>
             <img className='card-img' src="https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
            <span className='card-name'>{props.cardInfo.firstName}</span>
            <span className='card-name'>{props.cardInfo.lastName}</span>
          <div className='date'>
            <span>{props.cardInfo.expMonth}</span>
            <span>{props.cardInfo.expYear}</span>
          </div>
         </div>
        </div>
    )
}

export default CardDisplay