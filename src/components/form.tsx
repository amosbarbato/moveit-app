import { FormEvent, ReactNode } from "react"
import styled from "styled-components"

type Props = {
  children: ReactNode
  onSubmit?: (e: FormEvent) => void
}

const Container = styled.form`
  width: 100%; margin-block: 30px; display: grid; gap: 20px;
`

export const Form = ({ onSubmit, children }: Props) => {
  return (
    <Container onSubmit={onSubmit}>
      {children}
    </Container>
  )
}
