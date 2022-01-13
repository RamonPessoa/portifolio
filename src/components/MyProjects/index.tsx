import Project from './Project'
import portifolioIcon from '@imgs/portfolioIcon.png'
import buyList from '@imgs/buy_list.png'
import './style'

const MyProjects = ()=>{
    let projects = {
        portifolio: {
            name:"Portifólio",
            description: `Página web com minhas informações,
            com o objetivo de mostrar minhas
            experiências e meus conhecimentos`
        },
        buyList: {
            name: "Lista de compras",
            description: "Feijão"
        }
    }

    return(
        <section className="projects_section">
            <h2>Projetos</h2>
            <div className="projects_area">
                <Project img={portifolioIcon} alt="portifolio" projectName={projects.portifolio.name} description={projects.portifolio.description}/>
                <Project img={buyList} alt="Lista de compras" projectName={projects.buyList.name} description={projects.buyList.description}/>
            </div>
        </section>
    )
}

export default MyProjects