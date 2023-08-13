import "../../scss/sections/cover.scss"
import Grupo01 from "../../assets/cover_grupo01.png"
import SubrayadoRojo from "../../assets/cover_subrayado_rojo.png"
import SubrayadoAzul from "../../assets/cover_subrayado_rojo.png"
import Porcentaje from "../../assets/cover_porcentaje.png"
import Scissors from "../../assets/cover_scissors.png"
import SubrayadoAzulV2 from "../../assets/cover_subrayado_azul_v2.png"
import Sello from "../../assets/cover_seal.png"

const Cover = () => {

    return(
        <section id="cover" className="cover">
            <section className="cover__section">
                <div className="cover__section__left">
                    <div className="cover__section__left--first">
                        <img src={Grupo01}/>
                        <p>ES HORA DE</p>
                    </div>
                    <h1 className="cover__section__left--title">CYBER DAYS</h1>
                    <div className="cover__section__left--last">
                        <p className="cover__section__left--text">EN</p>
                        <div className="cover__secetion__left--underline">
                            <p className="cover__section__left--title">Más uno</p>
                            <img src={SubrayadoRojo} />
                        </div>
                    </div>
                    <p className="cover__section__left--date">
                        Del 28 al 30 de marzo
                    </p>
                    <div className="coupon">
                        <div className="coupon__section">
                            <div className="coupon__section__title">
                                <p>Regístrate y obtén</p>
                                <img src={SubrayadoAzul}/>
                            </div>
                            <div className="coupon__section__percentage">
                                <img src={Porcentaje}/>
                                <p className="coupon__section__percentage--text">En tu primera compra de <span>CYBER DAYS</span></p>
                            </div>
                            <p className="coupon__section__text">Aplicamos el descuento mediante un código que se te eviará a tu correo registrado.</p>
                            <p className="coupon__section__text">
                                Cupón válido del 28 al 30 de marzo.
                            </p>
                            <p className="coupon__section__text">
                                *Aplican términos y condiciones
                            </p>
                            <img className="coupon__section__scissors" src={Scissors}/>
                        </div>
                    </div>
                </div>
                <div className="cover__section__right">
                    <div className="cover__section__right--form">
                        <img className="cover__section__right--seal" src={Sello} />
                        <div className="cover__section__right--title">
                            <h2>Completa tus datos</h2>
                            <img src={SubrayadoAzulV2} />
                        </div>
                        <form className="form">
                            <div className="form__inputGroup">
                                <div className="form__inputGroup__row">
                                    <label htmlFor="nombres">Nombres <span>*</span></label>
                                    <input type="text" id="nombres" name="nombres" placeholder="Ingrese sus nombres" required />
                                </div>
                                <div className="form__inputGroup__row">
                                    <label htmlFor="apellidos">Apellidos <span>*</span></label>
                                    <input type="text" id="apellidos" name="apellidos" placeholder="Ingrese sus apellidos" required />
                                </div>
                            </div>

                            <div className="form__inputGroup form__inputGroup--second">
                                <div className="form__inputGroup__row">
                                    <label htmlFor="telefono">Teléfono celular <span>*</span></label>
                                    <input type="number" id="telefono" name="telefono" placeholder="Ingrese númmero telefonico" required />
                                </div>
                                <div className="form__inputGroup__row">
                                    <label htmlFor="apellidos">Correo electrónico <span>*</span></label>
                                    <input type="email" id="email" name="email" placeholder="Ingrese su correo electrónico" required />
                                </div>
                            </div>

                            <div className="form__inputGroup form__inputGroup--second">
                                <div className="form__inputGroup__row">
                                    <label htmlFor="telefono">Tus favoritos</label>
                                    <select id="options" name="options">
                                        <option value="Pollo, Cerdo, Embutidos">Pollo, Cerdo, Embutidos</option>
                                        <option value="Pollo, Cerdo, Embutidos">Pollo, Cerdo, Embutidos</option>
                                        <option value="Pollo, Cerdo, Embutidos">Pollo, Cerdo, Embutidos</option>
                                    </select>
                                </div>
                                <div className="form__inputGroup__row">
                                    <div className="captcha">
                                        <label htmlFor="captcha-input">Enter Captcha</label>
                                        <div className="preview"></div>
                                        <div className="captcha-form">
                                        <input type="text" id="captcha-form" placeholder="Ingrese captcha"/>
                                        <button className="captcha-refresh">
                                        {/* <i className="fa-solid fa-arrow-rotate-right"></i>
                                        <FontAwesomeIcon icon={faArrowRotateRight} /> */}
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form__inputGroup--check form__inputGroup--second">
                                <div className="form_checkGroup">
                                    <input type="checkbox" className="mycheck" id="mycheck" required/> 
                                    <label htmlFor="mycheck">Acepto los <span>Términos y políticas de privacidad</span></label>
                                </div>
                                <div className="form_checkGroup">
                                    <input type="checkbox" className="mycheck" id="mycheck" required/> 
                                    <label htmlFor="mycheck">Acepto el <span>Uso de datos personales</span></label>
                                </div>
                            </div>
                            
                            <div className="form__button">
                                <button type="submit" className="button-primary">Registrarme</button>
                            </div>
                        </form>
                        <p className="cover__section__right--text">Aprovecha las mejores ofertas y descuentos en cerdo, congelados, embutidos <span>y mucho más.</span> No te pierdas de nada estos Cyberdays registrándote y obteniendo grandes descuentos exclusivos.</p>
                    </div>
                </div>
            </section>
        </section>
    )

}

export default Cover;