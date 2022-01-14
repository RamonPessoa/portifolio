import { useState, useEffect } from 'react';
import NavMenu from '@components/Nav';
import Hero from '@components/Hero';
import Skills from '@components/Skills'
import MyProjects from '@components/MyProjects'
import About from '@components/About'
import Contacts from '@components/contacts'
import TopButton from '@components/TopButton';
import './sass/style'

const App = ()=>{

  return(
    <div>
      <NavMenu />
      <Hero/>
      <Skills/>
      <MyProjects/>
      <About/>
      <Contacts/>
      <TopButton/>
    </div>
  )
}

export default App