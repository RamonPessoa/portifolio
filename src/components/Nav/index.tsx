import './style'

const NavMenu = ()=>{
  return(
      <nav className='nav_menu'>
        <ul>
          <li><a href='#'>Skills</a></li>
          <li><a href="#">Projetos</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contatos</a></li>
          <button>Download CV</button>
        </ul>
      </nav>
  )
}

export default NavMenu