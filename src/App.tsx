import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./context/login"
import Signup from "./context/signup"
import Global from "./global"
import User from "./context/user"

function App() {
  return (
    <BrowserRouter>
      <Global />
      <Routes>
        <Route
          path="/login"
          element={
            <Login title='Login into your account' />
          }
        />

        <Route
          path="/signup"
          element={
            <Signup title='Sign in and start today!' />
          }
        />

        <Route
          path="/user"
          element={
            <User />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
