import styled from "styled-components"
import { color } from "../../global"

import AlertIcon from "../../assets/allert.svg"

type Props = {
  message: string
  type: 'error' | 'success'
  onClose: () => void;
}

const Container = styled.article<{ type: 'error' | 'success' }>`
  position: fixed; top: 12px; z-index: 1; display: flex; align-items: center;
  gap: 16px; width: 28%; padding-block: 18px; padding-inline: 18px 48px;
  border-radius: 4px; font-size: 14px; color: white;
  background-color: ${(props) => (props.type === 'error' ? color.alert : color.success)};

  @media(max-width: 1200px) { width: 94% }

  .close {
    position: absolute; right: 16px; top: 10px;

    &:hover { cursor: pointer }
  }
`

export const Alert = ({ message, type, onClose }: Props) => {
  return (
    <Container type={type} className="medium">
      <img src={AlertIcon} alt="" />
      {message}
      <p className="close" onClick={onClose}>X</p>
    </Container>
  )
}
