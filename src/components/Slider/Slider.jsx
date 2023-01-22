import "./slider.css"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Slider({ sliderPosts }) {
  return (
    <div className="slider-container">
      <i className="fa-solid fa-arrow-left review-swiper-button-prev"></i>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation={{
          nextEl: '.review-swiper-button-next',
          prevEl: '.review-swiper-button-prev',
        }}  
        loop={true}
        className='swiper'
      >
        {
          sliderPosts?.map(p => (
            <SwiperSlide key={p.id} className='swiper-slide'>
              <div className="slide-img">
                <img src={p.urlToImage} alt="" />
              </div>
              <div className="slide-info">
                <h3 className="slide-title">{p.title}</h3>
                <p className="slide-desc">{p.description}</p>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <i className="fa-solid fa-arrow-right review-swiper-button-next"></i>
    </div>
  );
}
export default Slider;