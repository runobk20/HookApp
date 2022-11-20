import { Route, Routes, Navigate } from "react-router-dom"
import { UserProvider } from "./context/UserProvider";
import { HomePage, LoginPage, AboutPage, Navbar } from "./index";

const paths = [
  {
    path: "/",
    name: "Home"
  },
  {
    path: "/about",
    name: "About"
  },
  {
    path: "Login",
    name: "Login"
  }
]

export const MainApp = () => {
  return (
    <UserProvider>
        <Navbar paths={paths}/>
        <hr />

        <Routes>

            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>

            <Route path="/*" element={<Navigate to="/"/>}/>
            {/* <Route path="/*" element={<HomePage/>}/> */}

        </Routes>
    </UserProvider>
  )
}
