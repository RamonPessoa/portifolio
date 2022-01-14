import { ButtonStyle } from './style'

type buttonProps = {
    value?: any,
    link?: string
}


const Button = (props: buttonProps) =>{
    return (
        <ButtonStyle href={props.link} target="blank">
            <button>{props.value}</button>
        </ButtonStyle>
    )
}

export default Button
