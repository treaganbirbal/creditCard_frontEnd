import React from  'react';

const CardForm = (props) => {
    return (
        <div className='form-container'>
         <form>
             <p>Card Number</p>
             <input onChange={props.handleChange} value='' type="text"/>
             <p>First Name</p>
             <input value='firstName' type="text"/>
             <p>Last Name</p>
             <input value='lastName' type="text"/>
             <p>Expire</p>
             <select name="" id="">
                 <option value="">January</option>
             </select>
             <select name="" id="">
                 <option value="">01</option>
             </select>
             <select name="" id="">
                 <option value="">2020</option>
             </select>
             <input type="submit"/>
         </form>
        </div>
    )
}

export default CardForm ;