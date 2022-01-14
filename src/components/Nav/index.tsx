import { Nav } from './style'
import Curriculo from '@/src/assets/download/Curriculo.pdf'
import Button from '../Button'

const NavMenu = ()=>{

const handleScroll = (direction: string) =>{
  const element = document.querySelector(direction)
  element?.scrollIntoView({behavior: 'smooth'})
}

  return(
      <Nav id='nav'>
        <ul>
          <li><a onClick={e => handleScroll("#skills")}>Skills</a></li>
          <li><a onClick={e => handleScroll("#projetos")}>Projetos</a></li>
          <li><a onClick={e => handleScroll("#sobre")}>Sobre</a></li>
          <li><a onClick={e => handleScroll("#contatos")}>Contatos</a></li>
          <Button value='Download CV' link={Curriculo}></Button>
        </ul>
      </Nav>
  )
}

export default NavMenu