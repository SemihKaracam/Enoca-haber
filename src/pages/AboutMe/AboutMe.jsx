import React from 'react'
import "./aboutme.css"
import profil from "../../assets/profil-fotografi.jpg"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import gpt from "../../assets/gpt3-ai.png"
import sneakers from "../../assets/sneakersv2.png"
import wordle from "../../assets/wordle-picture.png"

const projects = [
  {
    projectLink:"https://github.com/SemihKaracam/SNEAKERS_WEB_PAGE",
    img:sneakers
  },
  {
    projectLink:"https://github.com/SemihKaracam/wordle-js",
    img:wordle
  },
  {
    projectLink:"https://github.com/SemihKaracam/AI-Website",
    img:gpt
  },
]
function AboutMe() {
  return (
    <div className='aboutme'>
      <div className='personal-container'>
        <div className='profil-picture'>
          <img src={profil} alt="" />
        </div>
        <div className='personal-info'>
          <h3 className='my-name'>Semih Emir Karaçam</h3>
          <h4 className='my-job'>Frontend Developer</h4>
          <div className='aboutme-icons'>
            <a href="https://www.linkedin.com/in/semih-kara%C3%A7am/"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/SemihKaracam"><i class="fa-brands fa-github"></i></a>
          </div>
          <div className='personal-description'>
            <p>
              Bursa Uludağ Üniversitesi 3.Sınıf Bilgisayar Mühendisliği Lisans Öğrencisiyim.
              Yaklaşık 3 yıldır yazılımla ilgileniyorum. Bu sürecin ilk yılında görüntü işlemeyle ilgileniyordum ve uluslararası insansız hava aracı yarışması olan teknofestte finalist olan
              Ulucopter takımının yazılım ekibinde çalıştım.Fakat zamanla frontend developerlığa yönelmeye başladım ve web uygulamaları geliştirdikçe bu alana ilgim arttı.
              Son 2 yıldır frontend developerım. Hem takımla hem bireysel olarak birçok proje geliştirdim.
            </p>
          </div>
        </div>
      </div>
      <div className='project-slider'>
        <h3>SOME OF MY PROJECTS <a href="https://github.com/SemihKaracam"><i class="fa-brands fa-github"></i></a></h3> 
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          navigation 
          loop={true}
          className='aboutme-swiper'
        >
          {
            projects.map((p) => (
              <SwiperSlide className='swiper-slide'>
                  <div className='swiper-img' style={{backgroundImage:`url(${p.img})`}} alt="" >
                  </div>
              </SwiperSlide>
            ))
          }

        </Swiper>
      </div>
    </div>
  )
}

export default AboutMe