import './style.sass'

const SkillBar = ({img, language}: {img: string, language: string})=>{
    return(
        <div className='progression'>
            <img className='progression_bar_icon' src={img}/>
            <div>
                <p>{language}</p>
                <div className="progression_bar">
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default SkillBar