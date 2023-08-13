import LogoFooter from "../../assets/masuno.png"
import Libro from "../../assets/libro_reclamaciones.png"
import Facebook from "../../assets/facebook.png"
import Twitter from "../../assets/twitter.png"
import Linkedin from "../../assets/linkedin.png"
import Phone from "../../assets/phone.svg"

const Footer = () => {

    return(
        <footer id="footer" className="footer">
            <section className="footer__section">
                <div className="footer__section__column">
                    <img className="footer__section--logo" src={LogoFooter} />
                    <p className="footer__section--title">Nosotros</p>
                    <p className="footer__section--text">Somos Mas uno</p>
                </div>
                <div className="footer__section__column">
                    <p className="footer__section--title">Te informamos</p>
                    <ul className="footer_section--list">
                        <a><li>Preguntas frecuentes</li></a>
                        <a><li>Términos y condiciones</li></a>
                        <a><li>Medios de pago</li></a>
                        <a><li>Políticas de entrega</li></a>
                        <a><li>Libro de reclamaciones</li></a>
                    </ul>
                    <img className="footer__section--book" src={Libro} />
                </div>
                <div className="footer__section__column">
                    <p className="footer__section--title">Contáctanos</p>
                    <div className="footer__section--number">
                        <img className="footer__section--phone" src={Phone} />
                        <p>00000-0000</p>
                    </div>
                    <ul className="red-social">
                        <a href="https://www.facebook.com" target="_blank"><img src={Facebook} /></a>
                        <a href="https://www.twitter.com" target="_blank"><img src={Twitter} /></a>
                        <a href="https://www.linkedin.com" target="_blank"><img src={Linkedin} /></a>
                    </ul>
                    <p className="footer__section--text footer__section--address">© 2022 Mas uno Lima - Perú</p>
                </div>
                <img src="" />
            </section>
        </footer>
    )
}

export default Footer;