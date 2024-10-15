import styled from "styled-components"
import { Logo } from "../assets/logo"
import { Aside } from "../components/aside"
import { Form } from "../components/form"
import { Item } from "../components/form-item"

import mail from "../assets/mail.svg"
import lock from "../assets/lock.svg"
import { Button } from "../components/ui/button"
import { Separator } from "../components/ui/separator"
import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../services/api"

type Props = {
  title: string
}

const Title = styled.h2`
  font-size: 18px; margin-top: 24px;
`

const Login = ({ title }: Props) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const response = await login(email, password)
      const userData = response.data

      navigate('/user', { state: { user: userData } })
      // console.log('Login successful!', { email, password });
    } catch (error) {
      console.log('Login failed!')
    }
  }

  return (
    <>
      <Aside>
        <Logo />
        <Title className="bold">{title}</Title>

        <Form onSubmit={handleSubmit}>
          <Item
            className="on-label"
            type='text'
            label='Email Address'
            placeholder='Enter your email address'
            icon={mail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Item
            className="on-label"
            type='password'
            label='Password'
            placeholder='Enter your Password'
            icon={lock}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form>

        <div>
          <Button
            className="semibold"
            mode="button"
            type="submit"
            variant="fill"
            onClick={handleSubmit}
          >
            Login Now
          </Button>
          <Separator />
          <Button
            className="semibold"
            mode="button"
            type="button"
            variant="outline"
            onClick={() => navigate('/signup')}
          >
            Signup Now
          </Button>
        </div>
      </Aside>
    </>
  )
}

export default Login
