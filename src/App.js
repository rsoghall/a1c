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
  
  
  componentDidMount (){
  document.title = "A1c App Project"
  }

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
    handleGetBG(){
      axios.get('/api/result')
        .then(response => {
          console.log(' get data', response)

          this.setState({
            result: response.data
          })
        })
    }
    //handleDeleteMessages
    handleEditBG(){
      axios.put(`/api/result`)
      .then((response)=>{
        this.setState({
          result: response.data
        })
      })
    }

    handleDeleteBG(){
      axios.delete(`/api/result`)
      .then((response)=>{
        this.setState({
          result: response.data
        })
      })
    }
    


  render() {
    //   const mappedResults =this.state.result.map((eachResultsObj) => {
    //   return (
    //     <CalcResults key={eachResultsObj.index} result={eachResultsObj}/>
    //   )
    // })

    const mappedResults =this.state.result.map((eachResultsObj, index) => {
      console.log(eachResultsObj)
      console.log(index)
      return (
        <CalcResults key={index} result={eachResultsObj}/>
      )
    })

    return (
      <div className="App">
      
      
        <div>
          <input onChange = {(e) => this.handleInputBG(e.target.value)}
          value={this.state.BG}
          placeholder={'Add BG'}/>
          <button onClick={() => this.handleAddBG()}>Get A1c</button>
          <button onClick={() => this.handleGetBG()}>Get Results</button>
          <button onClick={() => this.handleEditBG()}>Edit</button>
          <button onClick={() => this.handleDeleteBG()}>Delele</button>
        </div>
        {this.state.A1c}
        {mappedResults}
        
      </div>
    );
  }
}

export default App;
