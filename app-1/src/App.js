import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
      super(props)
      this.state = {
        inputVal: ''
      }
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value){
    this.setState({
      inputVal: value
    })
  }

  render(){
    return (
      <div className="App">
        <input onChange={(e)=>this.handleChange(e.target.value)} />
        <div>{this.state.inputVal}</div>
      </div>
    );
  }

  
}

export default App;
