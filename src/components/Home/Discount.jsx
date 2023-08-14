import "../../scss/sections/discount.scss"
import GrupoImagen from "../../assets/sections_group.png"
import Subrayado from "../../assets/section_subrayado.png"
import DiscountSlider from "./DiscountSlider"



const Discount = () => {

    return(
        <section id="discount" className="discount">
            <div className="discount__section">
                <div className="discount__section__line">
                    <div className="line__separator"></div>
                    <div className="line_group">
                        <img src={GrupoImagen} alt="Grupo" />
                    </div>
                </div>
                <div className="discount__section__title">
                    <h2>¿Como obtengo el descuento por Cyber Days?</h2>
                    <img src={Subrayado} />
                </div>
                <p className="discount__section__text">Para adquirir nuestro descuento especial por <span>Cyber Days</span> sigue los siguientes pasos</p>
                <div className="discount__section__slides">
                    <DiscountSlider/>
                </div>


            </div>
        </section>
    )
}

export default Discount;