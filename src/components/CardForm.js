import React from  'react';

const CardForm = (props) => {
    return (
        <div className='form-container'>
         <form>
             <p>Card Number</p>
             <input onChange={props.handleChange} name='cardNumber' value={props.cardNumber} type="text"/>
             <p>First Name</p>
             <input onChange={props.handleChange} value={props.firstName} name='firstName' type="text"/>
             <p>Last Name</p>
             <input onChange={props.handleChange} value={props.lastName} name='secondName' type="text"/>
             <p>Expire</p>
             <select onChange={props.handleChange} name="" id="">
                 <option >January</option>
             </select>
             <select onChange={props.handleChange} name="" id="">
                 <option value={props.expDay}>01</option>
             </select>
             <select onChange={props.handleChange} name="" id="">
                 <option value={props.expYear}>2020</option>
             </select>
             <input type="submit"/>
         </form>
        </div>
    )
}

export default CardForm ;