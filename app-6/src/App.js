import React, { Component } from 'react';
import './App.css';
import ToDo from './ToDo'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      tasks: ['clean kitchen', 'wipe counters', 'scrub toilet', 'make dinner'],
      userInput: ''
    }

    this.addToList = this.addToList.bind(this);
  }

  addToList(){
    this.setState({ tasks: [...this.state.tasks, this.state.userInput], userInput: '' })
  }

  handleChanges(value){
    this.setState({ userInput: value })
  }

  render(){
    let todo = this.state.tasks.map((el, i)=>{
      return <ToDo key={i} task={el} />
  })
    return (
      <div className="App">
        <h1>My To-Do List</h1>
        <input value={this.state.userInput} placeholder={'Add new task'} onChange={e=>this.handleChanges(e.target.value)} />
        <button onClick={this.addToList}>Add</button>
        {todo}
      </div>
    );

  }
}

export default App;
