import styled from "styled-components"

const Container = styled.div`
  width: 100%; margin-block: 12px; font-size: 12px; color: #C2C2C2;
  display: flex; align-items: center; justify-content: center; gap: 20px;

  > div { width: 100%; border-bottom: 1px solid #c2c2c2; }
`

export const Separator = () => {
  return (
    <Container>
      <div></div>
      <p>OR</p>
      <div></div>
    </Container>
  )
}
