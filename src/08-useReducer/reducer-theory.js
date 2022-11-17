

const initialState = [{
    id: 1,
    description: 'Enter the Grand Line',
    done: false
}];

const todoReducer = (state = initialState, action = {}) => {

    if(action.type === 'Add todo') {
        state = [...state, action.payload];
        return state;
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    desc: 'Enter the New World',
    done: false
}

const addTodoAction = {
    type: 'Add todo',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction);

