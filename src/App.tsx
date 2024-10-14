import Login from "./context/login"
// import Signup from "./context/signup"
import Global from "./global"

function App() {
  return (
    <>
      <Global />
      <Login title='Login into your account' />
      {/* <Signup title='Sign in and start today!' /> */}
    </>
  )
}

export default App
