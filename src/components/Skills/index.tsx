import './style'
import jsIcon from '@imgs/javascript-original.svg'
import css3 from '@imgs/css3-original.svg'
import SkillsBar from './SkillBar'

const Skills = ()=>{
    return(
        <section className="skills">
            <h1>Skills</h1>
            <div className='skills_bars'>
                <SkillsBar img={jsIcon} language='JavaScript' />
                <SkillsBar img={css3} language='CSS3' />
            </div>
        </section>
    )
}

export default Skills