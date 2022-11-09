import { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: '',
        email: '' 
    })

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setformState({
            ...formState,
            [ name ]: value
        })
    }

    /* useEffect( () => {
        console.log('useEffect called');
    },[]);

    useEffect( () => {
        console.log('formState changed');
    },[formState]);

    useEffect( () => {
        console.log('email changed');
    },[email]); */

	return (
		<div className="p-4 m-2">
			<h1>Formulario Simple</h1>
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
        {username === 'bruno' && <Message/>}
		</div>

	);
};
