import { FormEvent, ReactNode } from "react"
import styled from "styled-components"
import { color } from "../../global"

export type Props = {
  children: ReactNode | ReactNode[]
  mode: 'button' | 'tag'
  type: 'button' | 'submit'
  className: string
  variant?: 'outline' | 'fill'
  onClick?: (e: FormEvent) => void
}

const Container = styled.button<Props>`
  display: flex; align-items: center; justify-content: center;
  height: 40px; font-size: 14px;
  width: ${(props) => props.mode === 'tag' ? '40px' : '100%'};
  color: ${(props) => props.variant === 'outline' ? color.purple : 'white'};
  background: ${(props) => props.variant === 'outline' ? 'transparent' : color.purple};
  border: 1px solid ${(props) => props.variant === 'outline' ? color.purple : 'transparent'};
  border-radius: ${(props) => props.mode === 'tag' ? '0 8px 8px 0' : '8px'};
  transition: 0.3s ease;

  &:hover {
    background: ${(props) => props.variant === 'outline' ? color.purple : color.darkPurple};
    border: 1px solid ${(props) => props.variant === 'outline' ? color.purple : color.darkPurple};
    color: white;
    cursor: ${(props) => props.mode === 'tag' ? 'auto' : 'pointer'};
  }

  > img { height: 20px; }
`

export const Button = ({ mode, children, className, type, variant, onClick }: Props) => {
  return (
    <Container
      mode={mode}
      className={className}
      type={type}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </Container>
  )
}
