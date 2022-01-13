import NavMenu from '@/src/components/Nav';
import Hero from '@/src/components/Hero';
import Skills from '@/src/components/Skills'
import MyProjects from '@/src/components/MyProjects'
import './sass/style'

const App = ()=>{
  return(
    <div>
      <NavMenu />
      <Hero/>
      <Skills/>
      <MyProjects/>
    </div>
  )
}

export default App