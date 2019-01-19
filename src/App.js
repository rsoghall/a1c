import React, { Component } from 'react';
import './App.css';
import CalcResults from './Components/CalcResults'
import axios from 'axios';
// import Input from './input'

class App extends Component {
  constructor () {
    super();
    this.state = {
      result: [],
      BG: '',
      A1c: null
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

  // handleAddBG(){
  //   this.state.result.push(this.state.BG)
  //   var avg = (this.state.result.reduce((a, b) => parseFloat(a) + parseFloat(b), 0.0))/this.state.result.length

  //   let A1c=(46.7 + +avg)/28.7
  //   this.setState({
  //     A1c: A1c,
  //     BG: ''
  //   })
  // }

  handleAddBG(){
    let A1c=(46.7 + +this.state.BG)/28.7
    this.setState({
      A1c: A1c
    })
    let bodyObj ={
      BG: this.state.BG,
      A1c: A1c
    }
    axios.post('/api/result', bodyObj)
    .then(response => {
      
      console.log('post data', response);

    this.setState({
        result: response.data
    })
  })
    this.setState({
      BG: '',
      A1c: null
    })
  }
    handleGettingResults (){
      axios.get('/api/result')
        .then(response => {
          console.log(' get data', response)

          this.setState({
            result: response.data
          })
        })
    }


  render() {
    const mappedResults =this.state.result.map((eachResultsObj) => {
      return (
        <CalcResults key={eachResultsObj.index} result={eachResultsObj}/>
      )
    })
    return (
      <div className="App">
      
        <div>
          <input onChange = {(e) => this.handleInputBG(e.target.value)}
          value={this.state.BG}
          placeholder={'Add BG'}/>
          <button onClick={() =>this.handleAddBG()}>Get A1c</button>
          <button onClick={() => this.handleGettingResults()}>Get Results</button>
        </div>
        {this.state.A1c}
        {mappedResults}
      </div>
    );
  }
}

export default App;
