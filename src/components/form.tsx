import { ReactNode } from "react"
import styled from "styled-components"

type Props = {
  children: ReactNode
}

const Container = styled.form`
  width: 100%; margin-block: 30px; display: grid; gap: 20px;
`

export const Form = ({ children }: Props) => {
  return (
    <Container>
      {children}
    </Container>
  )
}
