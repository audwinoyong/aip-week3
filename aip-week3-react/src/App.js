import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 3
    }
  }

  onChangeNext = () => {
    this.setState( { number: this.state.number - 1 })
  }

  renderNextButton = () => {
    if (this.state.number !== 0) {
      return <button onClick={() => this.onChangeNext()}>Next</button>
    }
    return
  }

  render() {
    const mappedNumber = this.state.number === 0 ? 'Liftoff!' : this.state.number;

    return (
      <div style={{ padding: 30 }}>
        <h1>{mappedNumber}</h1>
        
        {this.renderNextButton()}
      </div> 
    );
  }
}

export default App;
