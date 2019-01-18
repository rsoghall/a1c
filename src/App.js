import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {

  //Example
  componentDidMount (){
    axios.get ('/api/a1c')
    .then(res => console.log(res))
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
