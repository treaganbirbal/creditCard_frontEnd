import React from 'react';

import CardForm from './components/CardForm.js'
import CardDisplay from './components/CardDisplay.js'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
        cardNumber: [],
        firstName: '',
        lastName: '',
        expMonth: '',
        expDay: '',
        expYear: '',
        submitted: false,
      }
  }

  handleChange = (event) => {
    // debugger;
    console.log(event.target.value)
   this.setState({
     cardNumber: event.target.value,
     firstName: event.taget.value,
     lastName: event.taget.value,
     expMonth: event.taget.value,
     expDay: event.taget.value,
     expYear: event.taget.value,
   })
  }
  render(){
    return (
      <div className='app'>
        <CardForm handleChange={this.handleChange} />
        <CardDisplay  cardInfo={this.state.cardNumber} />
      </div>
    )
  }
}

export default App;
