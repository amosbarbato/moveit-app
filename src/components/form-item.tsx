import styled from "styled-components"
import { color } from "../global"
import { Button } from "./ui/button"

type Props = {
  className: string
  label: string
  placeholder: string
  icon: string
  type: 'password' | 'text'
  value: string
  onChange: (e) => void
}

const Container = styled.div`
  display: flex; flex-direction: column; gap: 10px;

  > div { display: flex; align-items: center; }
`
const Label = styled.label`
  display: block;
  font-size: 13px; color: ${color.dark};
`
const Input = styled.input`
  flex: 1; height: 38px; font-size: 14px; padding-inline: 16px;
  border-radius: 8px 0 0 8px; outline: 1px solid ${color.clean}; border: none;
  background: ${color.clean};

  &:focus { outline: 1px solid ${color.purple}; }
  &::placeholder { opacity: 0.6; }
`

export const Item = ({ className, label, placeholder, icon, type, value, onChange }: Props) => {
  return (
    <Container>
      <Label className={className}>{label}</Label>

      <div>
        <Input
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
        />
        <Button
          mode="tag"
          className="semibold"
          variant="fill"
          type="button"
        >
          <img src={icon} />
        </Button>
      </div>
    </Container>
  )
}
