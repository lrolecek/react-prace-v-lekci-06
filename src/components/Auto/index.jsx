import React, {useState} from 'react';


const Auto = () => {

	const [tankLevel, setTankLevel] = useState('full');

	const handleClick = () => {
		setTankLevel('almost empty');
	}

	return (
		<div className="auto">
			<h3>Auto</h3>
			<p>Stav nádrže: {tankLevel}</p>

			<button onClick={handleClick}>Ujeď hodně kilometrů</button>
		</div>
	)
}

export default Auto;
