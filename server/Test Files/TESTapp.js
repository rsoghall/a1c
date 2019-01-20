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
    };    
    this.handleDeleteBG = this.handleDeleteBG.bind(this);
  }
  
  
  componentDidMount (){
    document.title = "A1c App Project"
  }

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

  handleEditBG(){
    axios.put(`/api/result`)
    .then((response)=>{
      this.setState({
        result: response.data
      })
    })
  }

  handleDeleteBG(i){
    console.log("jkanskjdnkajsdnkjansdkjanskjdnasd :: " + this.state.result)
    axios.delete('/api/result/'+i)
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

    const mappedResults = this.state.result.map((eachResultsObj, index) => {
      return (
        <CalcResults key={index} result={eachResultsObj} onDeleteClick={() => this.handleDeleteBG(index)}/>
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
        </div>
        {this.state.A1c}
        {mappedResults}
        
      </div>
    );
  }
}

// export default App;

