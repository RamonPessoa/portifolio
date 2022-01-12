import './style'
import portifolioicon from '@imgs/portfolioIcon.png'

const Hero = () => {
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
                    <button>Download CV</button>
                    <button>Contatos</button>
                </div>
        </section>
    )
}

export default Hero