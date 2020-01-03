import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Person from './Person/Person';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
