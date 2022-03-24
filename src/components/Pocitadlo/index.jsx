import React, {useState} from 'react';


const Pocitadlo = () => {

	const [count, setCount] = useState('10');

	const handleClick = () => {
		setCount(count + 1);
	}

	return (
		<div className="pocitadlo">
			<h3>Počítadlo</h3>
			<p>{count}</p>

			<button onClick={handleClick}>Zvětši</button>
		</div>
	)
}

export default Pocitadlo;
