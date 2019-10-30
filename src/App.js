import React from 'react';

import CardForm from './components/CardForm.js'
import CardDisplay from './components/CardDisplay.js'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      cardInfo: {
        cardNumber: 0,
        firstName: '',
        secondName: '',
        expMonth: '',
        expDay: '',
        expYear: '',
        submitted: false,
      }
    }
  }

  handleChange = (event) => {
   this.setState({
     cardNumber: event.target.value
   })
  }
  render(){
    return (
      <div className='app'>
        <CardForm handleChange={this.handleChange} />
        <CardDisplay  cardInfo={this.state.cardInfo} />
      </div>
    )
  }
}

export default App;
