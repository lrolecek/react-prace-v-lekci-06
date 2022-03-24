import React from 'react';
import { render } from 'react-dom';
import './style.css';

const people = [
  { name: 'Alena', age: '31', hair: 'blonde' },
  { name: 'Petra', age: '27', hair: 'black' },
  { name: 'Jana', age: '19', hair: 'brunete' },
  { name: 'Katka', age: '31', hair: 'red' },
];

import Person from './components/Person';

const App = () => {
  return (
    <>

      <h2>Lidi</h2>
      <ul>
        { people.map(person => <li>{person.name}</li>) }
      </ul>

      <h2>Lidi o trochu lépe</h2>
      <Person name="Erika" age="21" hair="green" />


    </>
  );
}

render(<App />, document.querySelector('#app'));
