import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      array: ['food', 'water', 'shelter', 'entertainment']
    }
  }

  render(){
    let display = this.state.array.map((element, index)=>{
      return <h2 key={index}>{element}</h2>
    })

    return (
      <div className="App">
       {display} 
      </div>
    );
  }
  
}

export default App;
