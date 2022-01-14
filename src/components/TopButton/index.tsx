import { useState, useEffect } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { Container } from './style'

const TopButton = ()=>{

    const [showButton, setShowButton] = useState(false)

    const checkPosition = ()=>{
        window.pageYOffset == 0? setShowButton(false) : setShowButton(true)  
    }

    const handleScroll = (direction: string) =>{
      const element = document.querySelector(direction)
      element?.scrollIntoView({behavior: 'smooth'})
    }

  useEffect(()=>{
    window.addEventListener('scroll', checkPosition)

    checkPosition()

    return ()=>{
      window.removeEventListener('scroll', checkPosition)
    }
  })

    return (
      <Container>
        {showButton == true ? <BsFillArrowUpCircleFill onClick={e=> handleScroll("#nav")}/> : null}
      </Container>
    )
}

export default TopButton