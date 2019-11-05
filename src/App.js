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
    // console.log(event.target.value)
   this.setState({
     [event.target.name] : event.target.value
   })
  }
  render(){
    return (
      <div className='app'>
        <CardForm cardNumber={this.state.cardNumber} firstName={this.state.firstName} lastName={this.state.lastName} handleChange={this.handleChange} />
        <CardDisplay cardNumber={this.state.cardNumber} firstName={this.state.firstName} lastName={this.state.lastName}  />
      </div>
    )
  }
}

export default App;
