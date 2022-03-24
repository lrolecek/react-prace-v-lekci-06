import React from 'react';

const Textatko = () => {

	const handleChange = (event) => {
		console.log('menim textove pole');
		console.log(event.target.value);
	}

	return (
		<input type="text" onChange={handleChange} />
	);
}

export default Textatko;