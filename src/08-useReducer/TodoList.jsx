import { TodoItem } from "./TodoItem"


export const TodoList = ({todos, deleteHandler, statusHandler}) => {
  return (
    <ul className="list-group">
        {
            todos.map( todo => (
                <TodoItem key={todo.id} todo={todo} deleteHandler={deleteHandler} statusHandler={statusHandler}/>
            ))
        }
    </ul>
  )
}
