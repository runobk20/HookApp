import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = (iterationTimes) => {
    for (let i = 0; i < iterationTimes; i++) {
        console.log('Iterating');
        return `Iterated ${iterationTimes} times!`;
    }
}

export const MemoHook = () => {
	const { counter, increment } = useCounter(1000);
	const [show, setShow] = useState(true);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

	return (
		<div className="container mx-auto my-4">
			<h1>
				Counter: <small>{counter}</small>
			</h1>
			<hr />

            <h4>{memorizedValue}</h4>

			<button onClick={() => increment(100)} className="btn btn-primary">
				+1
			</button>

			<button
                className='btn btn-outline-primary'
				onClick={() => {
					setShow(!show);
				}}
			>
				Show/Hide {JSON.stringify(show)}
			</button>
		</div>
	);
};
