import "../../scss/sections/techSlider.scss"
import Slide01 from "../../assets/tech_imagen01.png"
import Slide02 from "../../assets/tech_imagen02.png"
import Slide03 from "../../assets/tech_imagen03.png"
import Start from "../../assets/tech_start.png"
import { Swiper, SwiperSlide } from 'swiper/react';
// Importamos Swiper Estilos 
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Importamos modulos requeridos
import { Navigation, Pagination } from 'swiper/modules';

const TechSlider = () => {

    return(

        <>
            <Swiper
                style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
                }}
                autoplay={{
                    delay: 100,
                    disableOnInteraction: false,
                }}
                navigation={true}
                pagination={{
                clickable: true,
                }}
                modules={[Navigation, Pagination]}
                className="mySwiper__slider--tech"
            >
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <div className="swiper__zoom--left">
                            <img src={Start} />
                            <h2>PHP</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Cursus cursus erat massa vel id nunc. Ultricies dui pharetra laoreet laoreet laoreet habitasse iaculis lobortis. Amet diam dolor tincidunt congue sagittis in.</p>
                            <button className="button-primary">Ver tecnlogía</button>
                        </div>
                        <img className="swiper__zoom--right" src={Slide01} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <div className="swiper__zoom--left">
                            <img src={Start} />
                            <h2>Flutter</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Cursus cursus erat massa vel id nunc. Ultricies dui pharetra laoreet laoreet laoreet habitasse iaculis lobortis. Amet diam dolor tincidunt congue sagittis in.</p>
                            <button className="button-primary">Ver tecnlogía</button>
                        </div>
                        <img className="swiper__zoom--right" src={Slide02} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <div className="swiper__zoom--left">
                            <img src={Start} />
                            <h2>Diseño UX/UI</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Cursus cursus erat massa vel id nunc. Ultricies dui pharetra laoreet laoreet laoreet habitasse iaculis lobortis. Amet diam dolor tincidunt congue sagittis in.</p>
                            <button className="button-primary">Ver tecnlogía</button>
                        </div>
                        <img className="swiper__zoom--right" src={Slide03} />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>

    )

}

export default TechSlider;