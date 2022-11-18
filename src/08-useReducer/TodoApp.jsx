import { useEffect, useReducer } from "react"
import { TodoList, AddTodo, todoReducer } from "./"
import { TodoHelper } from "../Helpers/Todo"


const initialState = [
    {
        id: 1,
        description: 'Start adding task in the right menu',
        done: false
    },
];

const reduceInit = () => {
    return JSON.parse(localStorage.getItem('todos')) || initialState;
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer( todoReducer, initialState, reduceInit);

    const addTodoHandler = (value) => {
        const newTodo = new TodoHelper(value).create();
        const action = {
            type: 'Add Todo',
            payload: newTodo
        }
        dispatch(action);
    }

    const deleteTodoHandler = (todoId) => {
        const action = {
            type: 'Delete Todo',
            payload: todoId
        }

        dispatch(action);
    }
  
    const todoStatusHandler = (todoId) => {
        const action = {
            type: 'Todo Status',
            payload: todoId
        }

        dispatch(action);
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

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
