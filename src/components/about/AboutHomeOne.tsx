'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

interface DataType {
  img: string;
  sub_title: string;
  title: string;
  des: string;
}[]

const about_slider: DataType[] = [
  {
    img: "/assets/img/about_teamwork.jpg", // Contoh: cari di Google 'tim kerja IT', 'IT teamwork', 'collaboration technology'
    sub_title: "Misi Kami",
    title: `Membantu Bisnis Tumbuh Lewat Solusi Digital`,
    des: `inticode.store hadir untuk memberikan solusi IT yang inovatif dan terpercaya. Kami percaya teknologi dapat mendorong pertumbuhan bisnis Anda ke level berikutnya. Fokus kami adalah memberikan layanan terbaik mulai dari pengembangan software, website, aplikasi, hingga konsultasi IT.`,
  },
  {
    img: "/assets/img/about_innovation.jpg", // Contoh: cari di Google 'inovasi teknologi', 'innovation technology', 'digital innovation'
    sub_title: "Inovasi Tanpa Batas",
    title: `Teknologi Terkini untuk Masa Depan Bisnis Anda`,
    des: `Kami selalu mengikuti perkembangan teknologi terbaru untuk memastikan solusi yang kami berikan relevan dan efektif. Setiap proyek kami kerjakan dengan semangat inovasi dan komitmen pada kualitas.`,
  },
  {
    img: "/assets/img/about_support.jpg", // Contoh: cari di Google 'dukungan IT', 'IT support', 'customer support technology'
    sub_title: "Dukungan Penuh",
    title: `Mitra Digital yang Siap Membantu Anda`,
    des: `Tim kami siap mendampingi Anda mulai dari konsultasi, implementasi, hingga maintenance. inticode.store berkomitmen menjadi mitra digital yang dapat diandalkan untuk setiap kebutuhan IT bisnis Anda.`,
  },
]

const AboutHomeOne = () => {
  return (
    <>
      <div className="cs_height_130 cs_height_lg_60"></div>
      <Swiper
        loop={true}
        speed={1000}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".cs_swiper_button_next",
          prevEl: ".cs_swiper_button_prev",
        }}
        pagination={{
          el: ".cs_pagination",
          clickable: true,
          type: "fraction",

          renderFraction: function (currentClass, totalClass) {
            return `<span class="${currentClass}"></span> 
             ${' / '}
             <span class="${totalClass}"></span>`;
          },

        }}
        className="cs_slider cs_slider_2">
        {about_slider.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="cs_about cs_style_1">
              <div className="cs_about_bg cs_bg" style={{ backgroundImage: `url(${item.img})` }}></div>
              <div className="container">
                <div className="cs_about_text">
                  <div className="cs_section_heading cs_style_1">
                    <div className="cs_section_heading_text">
                      <div className="cs_section_subtitle">{item.sub_title}</div>
                      <h2 className="cs_section_title">
                        {item.title}
                      </h2>
                    </div>
                  </div>
                  <div className="cs_height_40 cs_height_lg_30"></div>
                  <p className="cs_m0">
                    {item.des}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="container">
          <div className="cs_swiper_controll">
            <div className="cs_pagination cs_style2 cs_primary_font"></div>
            <div className="cs_swiper_navigation_wrap">

              <div style={{ cursor: 'pointer' }} className="cs_swiper_button_prev">
                <svg width="82" height="24" viewBox="0 0 82 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M82 1H2L24 23" stroke="currentColor" />
                </svg>
              </div>
              <div style={{ cursor: 'pointer' }} className="cs_swiper_button_next">
                <svg width="82" height="24" viewBox="0 0 82 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 23H80L58 1" stroke="currentColor" />
                </svg>
              </div>

            </div>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default AboutHomeOne;