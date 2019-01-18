import React, { Component } from 'react';
// import axios from 'axios'
import './App.css';
// import CalcResults from './Components/CalcResults'

class App extends Component {
  constructor () {
    super();
    this.state = {
      result: [],
      BG: ''
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
    
  }


  render() {
    return (
      <div className="App">
      <div>
        <input onChange = {(e) => this.handleInputBG(e.target.val)}
        value={this.state.result}
        placeholder={'Add BG'}></input>
        <button OnClick={() =>this.handleAddBG()}>Get A1c</button>
      </div>
      {/* <h1>Input BG</h1>
      <p>Calculate A1c from GB Input</p> */}
      
      </div>
    );
  }
}

export default App;
