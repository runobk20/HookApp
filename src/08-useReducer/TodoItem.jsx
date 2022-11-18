export const TodoItem = ({ todo, deleteHandler, statusHandler }) => {
	return (
		<li
			key={todo.id}
			className="list-group-item d-flex justify-content-between"
		>
			<p className={`align-self-center ${todo.done ? 'done' : ''}`} onClick={() => statusHandler(todo.id)}>{todo.description}</p>
			<button className="btn btn-danger" onClick={() => deleteHandler(todo.id)}>Delete</button>
		</li>
	);
};
