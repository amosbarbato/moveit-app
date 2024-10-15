import { useLocation } from "react-router-dom"

const User = () => {
  const location = useLocation()
  const user = location.state?.user

  if (!user) {
    return <p>Nenhuma informação do usuário disponível.</p>
  }

  return (
    <>
      <h1 className="bold">Usuario encontrado!</h1>
      <h3 className="medium">Bem vindo, {user.name}!</h3>
      <h3 className="medium">Email: {user.email}</h3>
    </>
  )
}

export default User
