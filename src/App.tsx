import NavMenu from '@/src/components/Nav';
import Hero from '@/src/components/Hero';
import Skills from '@/src/components/Skills'
import './sass/style'

const App = ()=>{
  return(
    <div>
      <NavMenu />
      <Hero/>
      <Skills/>
    </div>
  )
}

export default App