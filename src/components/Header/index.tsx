import { HeaderContainer, HeaderContent } from "./styles";
import logo from '../../assets/images/logo.svg'
import headerRightEffect from '../../assets/images/header-right-effect.svg'
import headerLeftEffect from '../../assets/images/header-left-effect.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={headerLeftEffect} alt="" />
      <HeaderContent>
        <img src={logo} alt="" />
      </HeaderContent>
      <img src={headerRightEffect} alt="" />
    </HeaderContainer>
  )
}