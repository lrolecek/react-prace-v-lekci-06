import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Person from './components/Person';
import Klikatko from './components/Klikatko';
import Textatko from './components/Textatko';

import Auto from './components/Auto';
import Pocitadlo from './components/Pocitadlo';

const people = [
  { id: 1, name: 'Alena', age: '31', hair: 'blonde' },
  { id: 2, name: 'Petra', age: '27', hair: 'black' },
  { id: 3, name: 'Jana', age: '19', hair: 'brunete' },
  { id: 8, name: 'Katka', age: '31', hair: 'red' },
  { id: 113, name: 'Eva', age: '14', hair: 'blue' },
];

const App = () => {
  return (
    <>
      <Pocitadlo />

      <hr />

      <Auto />

      <hr />

      <Textatko />

      <hr />

      <Klikatko />

      <hr />

      <h2>Lidi</h2>
      <ul>
        {/* { people.map(person => <li>{person.name}</li>) } */}
      </ul>

      <h2>Lidi o trochu lépe</h2>
      {
        people.map((person, index) => (
          <Person
            key={index}
            name={person.name}
            age={person.age}
            hair={person.hair}
          />
        ))
      }


    </>
  );
}

render(<App />, document.querySelector('#app'));
