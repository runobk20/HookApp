import { useContext } from "react"
import { UserContext } from "./context/UserContext";


export const LoginPage = () => {

  const {user, setUser} = useContext(UserContext);

  return (
    <>
      <h1>Login</h1>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button 
      onClick={() => setUser({id: 1, name: 'Bruno', mail: 'bruno@google.com'})}
      className="btn btn-primary"
      >
        Set user
      </button>
    </>
  )
}
