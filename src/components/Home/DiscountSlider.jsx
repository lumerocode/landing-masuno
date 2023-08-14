import "../../scss/sections/discountSlider.scss"
import Slide01 from "../../assets/discount_imagen01.png"
import Slide02 from "../../assets/discount_imagen02.png"
import Slide03 from "../../assets/discount_imagen03.png"
import { Swiper, SwiperSlide } from 'swiper/react';
// Importamos Swiper Estilos 
import 'swiper/css';
import 'swiper/css/pagination';
// Importamos modulos requeridos
import { Pagination } from 'swiper/modules';

const DiscountSlider = () => {

    return(
        <>
            <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            className="myswiper__slider"
            >
                <SwiperSlide>
                    <div className="discount__section--slide">
                        <h2>Paso 1</h2>
                        <img src={Slide01} />
                        <h2>Regístrate</h2>
                        <p>Completa el formulario con tus datos personales y acepta los términos.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="discount__section--slide">
                        <h2>Paso 2</h2>
                        <img src={Slide02} />
                        <h2>Recibe un cupón</h2>
                        <p>Recibirás un correo electrónico donde podrás ver el cupón de descuento.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="discount__section--slide">
                        <h2>Paso 3</h2>
                        <img src={Slide03} />
                        <h2>Empieza a ahorrar</h2>
                        <p>¡Y listo! Podrás usarlo del 28 al 30 de Marzo por compras en nuestra tienda online.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )

}

export default DiscountSlider;