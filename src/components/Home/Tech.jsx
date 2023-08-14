import "../../scss/sections/tech.scss"
import GrupoImagen from "../../assets/sections_group.png"
import Logo from "../../assets/tech_logo.png"
import Subrayado from "../../assets/section_subrayado.png"
import TechSlider from "./TechSlider"

const Tech = () => {
    return(
        <section id="tech" className="tech">
            <div className="tech__section">
                <div className="tech__section__line">
                    <div className="line__separator"></div>
                    <div className="line_group">
                        <img src={GrupoImagen} />
                    </div>
                </div>
                <img className="tech__section__logo" src={Logo} />
                <div className="tech__section__title">
                    <h2>Las mejores tecnologias de Más uno</h2>
                    <img src={Subrayado} />
                </div>
            </div>
            <div className="tech__slides">
                <TechSlider/>
            </div>
        </section>
    )
}

export default Tech;