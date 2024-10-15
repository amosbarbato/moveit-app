import styled from "styled-components"
import { Logo } from "../assets/logo"
import { Aside } from "../components/aside"
import { Form } from "../components/form"
import { Item } from "../components/form-item"

import mail from "../assets/mail.svg"
import lock from "../assets/lock.svg"
import { Button } from "../components/ui/button"
import { Separator } from "../components/ui/separator"

type Props = {
  title: string
}

const Title = styled.h2`
  font-size: 18px; margin-top: 24px;
`

const Login = ({ title }: Props) => {
  return (
    <>
      <Aside>
        <Logo />
        <Title className="bold">{title}</Title>

        <Form>
          <Item
            className="on-label"
            type='text'
            label='Email Address'
            placeholder='Enter your email address'
            icon={mail}
          />
          <Item
            className="on-label"
            type='password'
            label='Password'
            placeholder='Enter your Password'
            icon={lock}
          />
        </Form>

        <div>
          <Button
            className="semibold"
            mode="button"
            type="submit"
            variant="fill"
          >
            Login Now
          </Button>
          <Separator />
          <Button
            className="semibold"
            mode="button"
            type="button"
            variant="outline"
          >
            Signup Now
          </Button>
        </div>
      </Aside>
    </>
  )
}

export default Login
