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

			{ tankLevel === 'full' && <p>Máš plnou nádrž, můžeš jet až do Číny.</p> }

			<button onClick={handleClick}>Ujeď hodně kilometrů</button>
		</div>
	)
}

export default Auto;
