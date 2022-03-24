import React from 'react';
import './style.css';

const Person = ({name, age, hair}) => {

	return (
		<div class="person">
			<h3>{name}</h3>
			<p>Age {age}, {hair} hair</p>
		</div>
	);
}

export default Person;