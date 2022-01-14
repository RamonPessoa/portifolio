import { Container, ContactsList } from './style'
import Contact from './Contact'
import linkedinIcon from '@icons/icon_linkedin.svg'
import gmailIcon from '@icons/icon_gmail.svg'
import whatsappIcon from '@icons/icon_whatsapp.svg'
const Contacts = () =>{
    return(
        <Container id='contatos'>
            <h2>Contatos</h2>
            <ContactsList>
                <Contact img={linkedinIcon} alt="Linkedin" link="https://www.linkedin.com/in/ramonspessoa/" />
                <Contact img={gmailIcon} alt="Gmail" link="mailto:reimund.programmer@gmail.com" />
                <Contact img={whatsappIcon} alt="Whatsapp" link="tel:+55021996245808" />
            </ContactsList>
        </Container>
    )
}


export default Contacts