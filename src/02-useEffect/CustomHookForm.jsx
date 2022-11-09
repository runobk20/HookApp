import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const CustomHookForm = () => {

    const {formState, onInputChange, onFormReset, username, email, password} = useForm({
        username: '',
        email: '',
        password: ''
    });

    //const {username, email, password} = formState;

	return (
		<div className="p-4 m-2">
			<h1>Formulario con custom Hook</h1>
			<hr />

			<input
				type="text"
				className="form-control my-4"
				placeholder="username"
				name="username"
                value={username}
                onChange={onInputChange}
			/>

            <input
				type="text"
				className="form-control my-4"
				placeholder="email"
				name="email"
                value={email}
                onChange={onInputChange}
			/>

        <input
				type="password"
				className="form-control my-4"
				placeholder="password"
				name="password"
                value={password}
                onChange={onInputChange}
			/>

        <button onClick={onFormReset} className="btn btn-primary">Borrar campos</button>
		</div>
	);
};
