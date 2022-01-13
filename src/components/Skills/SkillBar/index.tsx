import './style.sass'

const SkillBar = ({img, language}: {img: string, language: string})=>{
    return(
        <div className='skill'>
            <img className='skill_icon' src={img}/>
                <p>{language}</p>
        </div>
    )
}

export default SkillBar