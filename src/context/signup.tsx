import styled from "styled-components"
import { Logo } from "../assets/logo"
import { Aside } from "../components/aside"
import { Form } from "../components/form"
import { Item } from "../components/form-item"

import mail from "../assets/mail.svg"
import lock from "../assets/lock.svg"
import { Button } from "../components/ui/button"
import { Separator } from "../components/ui/separator"
import { useNavigate } from "react-router-dom"
import { FormEvent, useState } from "react"
import { signup } from "../services/api"
import { Hero } from "../components/main"
import { Alert } from "../components/ui/alert"

type Props = {
  title: string
}

const Title = styled.h2`
  font-size: 18px; margin-top: 24px;
`

const Signup = ({ title }: Props) => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!name) {
      setError('Woops, something is wrong, try again later!')
      return
    }

    if (!email) {
      setError('Woops, something is wrong, try again later!')
      return
    }

    if (!password) {
      setError('Woops, something is wrong, try again later!')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match, check your credentials.')
      return
    }

    try {
      await signup(name, email, password)
      setSuccess('Signup successful!')
      setError(null)
      // console.log('Signup successful!', { name, email, password })
    } catch (error) {
      setError('Signup failed!')
      // console.log('Signup failed!')
    }
  }

  const handleCloseAlert = () => {
    setError(null);
    setSuccess(null)
  };

  return (
    <main>
      <Aside>
        {error && <Alert message={error} type="error" onClose={handleCloseAlert} />}
        {success && <Alert message={success} type="success" onClose={handleCloseAlert} />}
        <Logo />
        <Title className="bold">{title}</Title>

        <Form onSubmit={handleSubmit}>
          <Item
            className='on-label'
            type='text'
            label='Name'
            placeholder='Enter your name'
            icon={mail}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Item
            className='on-label'
            type='text'
            label='Email Address'
            placeholder='Enter your email address'
            icon={mail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Item
            className='on-label'
            type='password'
            label='Password'
            placeholder='Enter your Password'
            icon={lock}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Item
            className="off-label"
            type='password'
            label='Password'
            placeholder='Repeat you password'
            icon={lock}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form>

        <div>
          <Button
            className="semibold"
            mode="button"
            type="button"
            variant="fill"
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Separator />
          <Button
            className="semibold"
            mode="button"
            type="submit"
            variant="outline"
            onClick={() => navigate('/login')}
          >
            Login Now
          </Button>
        </div>
      </Aside>

      <Hero />
    </main>
  )
}

export default Signup
