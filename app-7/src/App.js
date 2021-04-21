import React, { Component } from 'react';
import './App.css';
import NewTask from './components/NewTask'
import List from './components/List'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      tasks: ['work', 'more work'],
      userInput: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  handleChange(value){
    this.setState({ userInput : value })
    
  }

  addTask(task){
    this.setState({ tasks: [...this.state.tasks, task], userInput: '' })
    

  }

  render(){
    console.log(this.state.userInput)
    return (
      <div className="App">
        <h1>MY TO-DO LIST:</h1>
        <NewTask 
          userInput={this.state.userInput} 
          updateInput={this.handleChange} 
          addItem = {this.addTask}
          />
        <List tasks={this.state.tasks}/>
      </div>
    );

  }
  
}

export default App;
