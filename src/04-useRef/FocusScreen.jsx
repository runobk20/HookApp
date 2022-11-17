import { useRef } from 'react';

export const FocusScreen = () => {
	const inputRef = useRef();

	const focusInput = () => {
        inputRef.current.select();
    };

	return (
		<div className="container mx-auto my-4 p-4">
			<h1>Focus Screen</h1>
			<hr />

			<input
            ref={inputRef}
				type="text"
				placeholder="Enter your name"
				className="form-control"
			/>

			<button onClick={focusInput} className="btn btn-primary my-2">
				Focus
			</button>
		</div>
	);
};
