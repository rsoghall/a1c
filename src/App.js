import React, { Component } from 'react';
import './App.css';
import CalcResults from './Components/CalcResults'
import axios from 'axios';


class App extends Component {
  constructor () {
    super();
    this.state = {
      result: [],
      BG: '',
      A1c: null
    }
    this.handleDeleteBG = this.handleDeleteBG.bind(this);
    this.handleEditBG = this.handleEditBG.bind(this);
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
      A1c: A1c.toFixed(1)
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
    
    handleEditBG(i){
      console.log('EditBG :: ' + this.state.result)
      axios.put(`/api/result`+i)
      .then((response)=>{
        this.setState({
          result: response.data
        })
      })
    }

    handleDeleteBG(i){
      console.log('DeleteBG :: ' + this.state.result)
      axios.delete(`/api/result/`+i)
      .then((response)=>{
        this.setState({
          result: response.data
        })
      })
    }
    


  render() {
    const mappedResults =this.state.result.map((eachResultsObj, index) => {
      return (
        <CalcResults key={index} result={eachResultsObj} onDeleteClick={(i) => this.handleDeleteBG(index) }/>        
      )
        // *** How do I add the this this.handleEditBG here so it will pull from CalcResults: <button onClick={props.onEditClick}>Edit</button>
        
      // const mappedResults =this.state.result.map((eachResultsObj, index) => {
      //   return (
      //     <CalcResults key={index} result={eachResultsObj} onEditClick={() => this.handleEditBG(index)}/>        
      //   )
    })

    return (
      <div className="App">
           
      
      
        <div>
          <input onChange = {(e) => this.handleInputBG(e.target.value)}
          value={this.state.BG}
          placeholder={'Add BG'}/>
          <button onClick={() => this.handleAddBG()}>Get A1c</button>
          {/* <div className="box">THis is a test</div> */}
      </div>
        {this.state.A1c}
        {mappedResults}
        
      </div>
      
    );
    
  }
}

export default App;
