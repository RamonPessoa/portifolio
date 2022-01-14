import './style'
import portifolioicon from '@imgs/portfolioIcon.png'
import Button from '@components/Button'
import Curriculo from '@/src/assets/download/Curriculo.pdf'

const Hero = () => {

    const handleScroll = (direction: string) =>{
        const element = document.querySelector(direction)
        element?.scrollIntoView({behavior: 'smooth'})
      }


    return(
        <section className="hero">
                <div className='hero_info'>
                    <img src={portifolioicon} alt="documento" />
                    <div className='hero_text'>
                        <h1>Ramon Pessoa</h1>
                        <p>{`<Desenvolvedor Web Front-End>`}</p>
                    </div>
                </div>
                <div className='hero_buttons'>
                    <Button value="Download CV" link={Curriculo}/>
                    <button onClick={e=> handleScroll("#contatos")}>Contatos</button>
                </div>
        </section>
    )
}

export default Hero