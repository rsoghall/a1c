import React, { Component } from 'react';
// import axios from 'axios'
import './App.css';
// import CalcResults from './Components/CalcResults'

class App extends Component {
  constructor () {
    super();
  
  // //Example
  // // componentDidMount (){
  // //   axios.get ('/api/a1c')
  // //   .then(res => console.log(res))

  // handleResultInput(value){
  //   this.setState({
  //     result: value
  //   })
  }
  

  render() {
    return (
      <div className="App">
      <div>
        <input ></input>
        <button>Get A1c</button>
      </div>
      <h1>Input BG</h1>
      <p>Calculate A1c from GB Input</p>
      
      </div>
    );
  }
}

export default App;
