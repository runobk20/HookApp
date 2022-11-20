import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const AboutPage = () => {

  const {user} = useContext(UserContext);

  return (
    <>
      <h1 className="text-center">About</h1>
      <hr />

      <h2 className="text-center">This is the information about the user!</h2>

      <div className="border border-primary d-flex flex-column align-items-center">
        <p>Username: {user.name}</p>
        <p>E-mail: {user.mail}</p>
        <p>User Id: {user.id}</p>
      </div>
    </>
  )
}
