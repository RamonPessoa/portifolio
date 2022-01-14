import { Container } from './style' 

type contactProps = {
    img: string,
    alt: string,
    link: string
}

const Contact = (props: contactProps) => {
    return(
        <Container>
            <a href={props.link} target="blank">
                <img src={props.img} alt={props.alt} />
            </a>
        </Container>
    )
}

export default Contact