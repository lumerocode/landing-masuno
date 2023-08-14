import "../../scss/sections/discount.scss"
import GrupoImagen from "../../assets/sections_group.png"
import Subrayado from "../../assets/section_subrayado.png"
import Slide01 from "../../assets/discount_imagen01.png"
import Slide02 from "../../assets/discount_imagen02.png"
import Slide03 from "../../assets/discount_imagen03.png"



const Discount = () => {

    return(
        <section id="discount" className="discount">
            <div className="discount__section">
                <div className="discount__section__line">
                    <div className="line__separator"></div>
                    <div className="line_group">
                        <img src={GrupoImagen} />
                    </div>
                </div>
                <div className="discount__section__title">
                    <h2>¿Como obtengo el descuento por Cyber Days?</h2>
                    <img src={Subrayado} />
                </div>
                <p className="discount__section__text">Para adquirir nuestro descuento especial por <span>Cyber Days</span> sigue los siguientes pasos</p>


                <div className="discount__section__slides">
                    <div className="discount__section--slide">
                        <h2>Paso 1</h2>
                        <img src={Slide01} />
                        <h2>Regístrate</h2>
                        <p>Completa el formulario con tus datos personales y acepta los términos.</p>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Discount;