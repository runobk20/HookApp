import { useRef } from "react";


export const AddTodo = ({submitFn}) => {
    const inputRef = useRef();

    const onFormSubmit = event => {
        event.preventDefault();
        const value = inputRef.current.value;

		if (value.length < 1) return;
		submitFn(value);
    }

	return (
		<form onSubmit={onFormSubmit}>
			<input
                ref={inputRef}
				type="text"
				placeholder="What are you gonna do?"
				className="form-control my-2"
			/>
			<button className="btn btn-outline-primary" type="submit">
				Add
			</button>
		</form>
	);
};
