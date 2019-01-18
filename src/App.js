import React, { Component } from 'react';
// import axios from 'axios'
import './App.css';
// import CalcResults from './Components/CalcResults'

class App extends Component {
  constructor () {
    super();
    this.state = {
      result: [],
      BG: '',
      A1c: 0
    }
  }
  
  // //Example
  // // componentDidMount (){
  // //   axios.get ('/api/a1c')
  // //   .then(res => console.log(res))

  handleInputBG(value){
    this.setState({
      BG: value
    })
  }

  handleAddBG(){
    let A1c=(46.7 + +this.state.BG)/28.7
    this.setState({
      A1c: A1c
    })
  }


  render() {
    return (
      <div className="App">
      <div>
        <input onChange = {(e) => this.handleInputBG(e.target.value)}
        value={this.state.BG}
        placeholder={'Add BG'}></input>
        <button onClick={() =>this.handleAddBG()}>Get A1c</button>
      </div>
      {this.state.A1c}
      {/* <h1>Input BG</h1>
      <p>Calculate A1c from GB Input</p> */}
      
      </div>
    );
  }
}

export default App;
