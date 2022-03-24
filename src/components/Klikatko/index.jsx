import React from 'react';

const Klikatko = () => {

	const handleClick = () => {
		console.log('nekdo na me kliknul');
	}

	return (
		<button onClick={handleClick}>
			Klikni na mě
		</button>
	);
}

export default Klikatko;