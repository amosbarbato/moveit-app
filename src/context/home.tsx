import styled from "styled-components"
import { Logo } from "../assets/logo"
import { Actions, Aside } from "../components/aside"
import { Button } from "../components/ui/button"
import { useNavigate } from "react-router-dom"

import { Hero } from "../components/main"

const Title = styled.h2`
  font-size: 18px; margin-top: 24px;
`

const Home = () => {
  const navigate = useNavigate()

  return (
    <main>
      <Aside>
        <Logo />
        <Title className="bold">Welcome!</Title>

        <Actions className="space-in-top">
          <Button
            className="semibold"
            mode="button"
            type="submit"
            variant="fill"
            onClick={() => navigate('/login')}
          >
            Log In
          </Button>
          <Button
            className="semibold"
            mode="button"
            type="submit"
            variant="fill"
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </Button>
        </Actions>
      </Aside>

      <Hero />
    </main>
  )
}

export default Home
