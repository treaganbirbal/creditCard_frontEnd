import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardForm from './components/CardForm.js'
import CardDisplay from './components/CardDisplay.js'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      cardInfo: {
        cardNumber: [],
        firstName: '',
        secondName: '',
        expMonth: '',
        expDay: '',
        expYear: '',
        submitted: false,
      }
    }
  }
  render(){
    return (
      <div className='app'>
        <CardForm />
        <CardDisplay />
      </div>
    )
  }
}

export default App;
