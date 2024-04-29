import { HeaderContainer, HeaderLogo } from './styles'
import LogoImage from '../../assets/icon-logo.svg'
import { Input } from '../Input'
import { Button } from '../Button'
import { SignOut } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <img src={LogoImage} alt="Logo do Restaurante" />
        <h1>food explorer</h1>
      </HeaderLogo>
      <Input />
      <Button />
      <SignOut />
    </HeaderContainer>
  )
}
