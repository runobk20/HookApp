import { useReducer } from "react"
import { todoReducer } from "./todoReducer"

const initialState = [{
    id: Math.random() + 1,
    description: 'Find a crew',
    done: false
}]


export const TodoApp = () => {

    const [todos, dispatch] = useReducer( todoReducer, initialState)

  return (
    <div className="m-4">

        <h1 className="text-center">TodoApp</h1>
        <h4 className="text-center">Total: , Pending:</h4>
        <hr />

        <div className="row">

            <div className="col-7">
                <ul className="list-group">
                    {
                        todos.map( todo => (
                            <li key={todo.id}
                                className="list-group-item d-flex justify-content-between">
                                <span className="align-self-center">Item 1</span>
                                <button className="btn btn-danger">Delete</button>
                            </li>

                        ))
                    }
                </ul>
            </div>

            <div className="col-5">
                <h3>Add todo</h3>
                <hr />
                <form>
                    <input 
                    type="text"
                    placeholder="What are you gonna do?"
                    className="form-control my-2"
                    />
                    <button className="btn btn-outline-primary" type="submit">
                        Add
                    </button>
                </form>
            </div>

        </div>

    </div>
  )
}
