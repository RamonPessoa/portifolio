import { Container, Content } from './style'
import portolioIcon from '@imgs/portfolioIcon.png'

const About = () => {
    return(
        <Container id='sobre'>
            <h2>Sobre</h2>
            <Content>
                <img src={portolioIcon} alt="Foto" />
                <p>Me chamo Ramon, tenho 22 anos, sou formado em Análise e Desenvolvimento de Sistemas pela Univercidade Estácio de Sá, possuo certa 
                facilidade em me comunicar e lidar com pessoas, experiência com trabalho em equipe. Atualmente estou focado em aprender TypeScript juntamente com React, 
                possuo nível avançado de conversação e escrita em inglês.</p>
            </Content>
        </Container>
    )
}

export default About