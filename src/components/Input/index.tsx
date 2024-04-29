import { MagnifyingGlass } from '@phosphor-icons/react'
import { InputContainer } from './styles'

export function Input() {
  return (
    <InputContainer>
      <MagnifyingGlass />
      <input placeholder="Busque por pratos ou ingredientes" />
    </InputContainer>
  )
}
