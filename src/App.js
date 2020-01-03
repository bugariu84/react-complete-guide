import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const App = props => {
  const [indexState, setIndexState]     = useState(0);
  const [personState, setPersonState]   = useState({ name: "Bogdan", age: 35 });
  const [personsState, setPersonsState]  = useState([
    { name: "Bogdan", age: 35 },
    { name: "Catalin", age: 37 },
    { name: "Mihai", age: 24 }
  ]);

  const switchNameHandler = () => {
    let index = indexState + 1;

    if (index === personsState.length) {
      index = 0;
    }

    setIndexState(index);
    setPersonState(personsState[index]);
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      {/* <Person name="Bogdan" age="35" >I like to feel myself</Person> */}
      <Person name={personState.name} age={personState.age} />
    </div>
  );

}

export default App;