import { useReducer, useEffect } from "react";
import { todoReducer } from "../08-useReducer";
import { TodoHelper } from "../Helpers/Todo";

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

export const useTodo = () => {

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
    }, [todos]);

    return {
        todos,
        addTodoHandler,
        deleteTodoHandler,
        todoStatusHandler
    }

}