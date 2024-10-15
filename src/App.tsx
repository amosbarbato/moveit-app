import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./context/login"
import Signup from "./context/signup"
import Global from "./global"

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
      </Routes>
    </BrowserRouter>
  )
}

export default App
