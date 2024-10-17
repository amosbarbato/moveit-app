import styled from "styled-components"
import Illustration from "../assets/illustration.svg"

const Container = styled.div`
  width: 70%; display: flex; flex-direction: column; align-items: center;
  justify-content: center;

  @media(max-width: 1200px) { display: none }

  > img { width: 400px }
`
const MainTitle = styled.h1`
  font-size: 26px
`

export const Hero = () => {
  return (
    <Container>
      <MainTitle className="medium">You should, MoveIt!</MainTitle>
      <img src={Illustration} alt="" />
    </Container>
  )
}
