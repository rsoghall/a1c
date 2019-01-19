import React from 'react'
import axios from 'axios'

class Input extends React.Component {
 constructor() {
  super();
  this.state = {
   editItem: false,
   name: ''
  }
 }
 
 handleClick() {
  this.setState({ editItem: !this.state.editItem})
 }

 handleChange(value) {
  this.setState({ name: value})
 }
 handleUpdate() {
  let text = {
   text: this.state.name
  }
  axios.put(`/people/0`, text).then((response) => {
    this.props.updateList(response.data);
    this.handleClick();
  }).catch(error => console.log(error)) 
}
 render() {
  return (
   <div>
    {
     !this.state.editItem ?
    <button onClick={() => this.handleClick()}>Edit</button> :
    <div>
     <input 
      onChange = {(e) => this.handleChange(e.target.value)}
      value={this.state.name}
     />
     <button onClick={() => this.handleUpdate()}>Submit</button>
    </div>
    }
   </div>
  )
 }
}
// export default Input