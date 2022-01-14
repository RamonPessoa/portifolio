import './style'
import jsIcon from '@icons/icon_js.svg'
import css3 from '@icons/icon_css.svg'
import html from '@icons/icon_html5.svg'
import react from '@icons/icon_react.svg'
import webpack from '@icons/icon_webpack.svg'
import tsIcon from '@icons/icon_ts.svg'
import sassIcon from '@icons/icon_sass.svg'
import gitIcon from '@icons/icon_git.svg'
import SkillsBar from './SkillBar'

const Skills = ()=>{
    return(
        <section id='skills' className="skills_section">
            <h2>Skills</h2>
            <div className='skills'>
                <div className='known_skills'>
                    <h3>Experiência:</h3>
                    <div className='icons'>
                        <SkillsBar img={jsIcon} language='JavaScript' />
                        <SkillsBar img={css3} language='CSS3' />
                        <SkillsBar img={html} language='HTML5' />
                        <SkillsBar img={react} language='React' />
                        <SkillsBar img={webpack} language='Webpack' />
                        <SkillsBar img={sassIcon} language='sass' />
                        <SkillsBar img={tsIcon} language='typescript' />
                        <SkillsBar img={gitIcon} language='git' />
                    </div>
                </div>
                <div className='learning_skills'>
                    <h3>Estudando:</h3>
                    <div className='icons'>
                        <SkillsBar img={tsIcon} language='typescript' />
                        <SkillsBar img={gitIcon} language='git' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills