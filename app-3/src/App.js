import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      array: ['food', 'drink', 'shelter', 'entertainment'],
      inputVal: ''
    }

    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges(value){
    this.setState({ inputVal: value })
  }

  render(){
    let displayArray = this.state.array.filter((el, i)=>{
      return el.includes(this.state.inputVal)
    }).map((el, i)=>{
      return <h2 key={i}>{el}</h2>
    })
    return (
      <div className="App">
        <input onChange={e=>this.handleChanges(e.target.value)}/>
        <div>{displayArray}</div>
      </div>
    );
  }
  
}

export default App;
