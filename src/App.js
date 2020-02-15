import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    index: 0,
    person: { name: "Bogdan", age: 35 },
    showPersons: false,
    persons: [
      { name: "Bogdan", age: 35, id: 1 },
      { name: "Catalin", age: 37, id: 2 },
      { name: "Mihai", age: 24, id: 3 }
    ]
  }

  style ={
    button: {
      padding: "10px",
      backgroundColor: "green"
    }
  };

  togglePersonsHandler = (e) => {
    this.setState({showPersons: !this.state.showPersons});
  }

  deletePersonHandler = (person, index) => {
    let persons = [...this.state.persons];
    persons = persons.slice(1, index);

    this.setState({persons});
  }

  render() {
    const persons = this.state.persons.map((person, index) => {
      return (
        <Person 
          name={person.name} 
          age={person.name} 
          key={person.id} 
          click={() => this.deletePersonHandler(index)}/>
      );
    });
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button style={this.style.button} onClick={this.togglePersonsHandler}>Toggle persons</button>

        {this.state.showPersons ?
          <div>{persons}</div> : ""
        }
      </div>
    );
  }
}

export default App;