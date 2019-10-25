import React from 'react';


const CardDisplay = (props) => {
    return (
        <div className='card-display'>
            <img className='logo' src="" alt=""/>
            <span className='card-name'>{props.cardInfo.firstName}</span>
        </div>
    )
}

export default CardDisplay