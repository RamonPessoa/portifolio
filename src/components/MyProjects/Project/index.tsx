import './style'
const Project = (props: any)=>{
    return(
        <div className='project'>
            <img className='project_img' src={props.img} alt={props.alt}/>
            <h3 className='project_name'>{props.projectName}</h3>
            <p className='project_description'>{props.description}</p>
        </div>
    )
}

export default Project