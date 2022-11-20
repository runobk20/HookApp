import { useTodo } from "../hooks/useTodo"
import { TodoList, AddTodo} from "./"

export const TodoApp = () => {

    const { todos, addTodoHandler, deleteTodoHandler, todoStatusHandler } = useTodo();

    return (
        <div className="m-4">

            <h1 className="text-center">TodoApp</h1>
            <h4 className="text-center">Total: , Pending:</h4>
            <hr />

            <div className="row">

                <div className="col-7">
                    <TodoList todos={todos} deleteHandler={deleteTodoHandler} statusHandler={todoStatusHandler} />
                </div>

                <div className="col-5">
                    <h3>Add todo</h3>
                    <hr />
                    <AddTodo submitFn={addTodoHandler}/>
                    
                </div>

            </div>

        </div>
    )
}
