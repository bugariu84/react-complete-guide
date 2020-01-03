import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    index: 0,
    person: { name: "Bogdan", age: 35 },
    persons: [
      { name: "Bogdan", age: 35 },
      { name: "Catalin", age: 37 },
      { name: "Mihai", age: 24 }
    ]
  }


  switchNameHandler = () => {
    let index = this.state.index + 1;

    if (index === this.state.persons.length) {
      index = 0;
    }

    this.setState({
      index, 
      person: this.state.persons[index]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        {/* <Person name="Bogdan" age="35" >I like to feel myself</Person> */}
        <Person name={this.state.person.name} age={this.state.person.age} />
      </div>
    );
  }
}

export default App;