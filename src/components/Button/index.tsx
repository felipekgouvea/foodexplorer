import { Article } from '@phosphor-icons/react'
import { ButtonContainer } from './styles'

export function Button() {
  return (
    <ButtonContainer>
      <Article />
      <span>Pedidos</span>
      <strong>(0)</strong>
    </ButtonContainer>
  )
}
