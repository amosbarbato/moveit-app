import { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

const Container = styled.aside`
  width: 30%; height: 100vh; padding: 35px; background: white; display: flex;
  flex-direction: column; align-items: center; justify-content: center;
  box-shadow: 0px 12px 50px 0px #0000001A;

  @media(max-width: 1200px) { width: 100% }

  > div { width: 100%; }
`

export const Actions = styled.div`
  display: flex; gap: 20px;
`

export const Aside = ({ children }: Props) => {
  return (
    <Container>
      {children}
    </Container>
  )
}
