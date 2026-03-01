"use client";
import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import portfolio_img_1 from "@/assets/img/1.png";
import portfolio_img_2 from "@/assets/img/2.png";
import portfolio_img_3 from "@/assets/img/3.png";
import portfolio_img_4 from "@/assets/img/4.png";

interface DataType {
  img: StaticImageData;
  title: string;
  category: string;
}
[];

const portfolio_slider: DataType[] = [
  {
    img: portfolio_img_3, // Saran gambar: "website company profile mockup", "web design business"
    title: `Website Company Profile`,
    category: `Web Development / Company Profile`,
  },
  {
    img: portfolio_img_2, // Saran gambar: "figma design UI", "figma app mockup"
    title: `Desain UI/UX Figma`,
    category: `UI/UX Design / Figma`,
  },
  {
    img: portfolio_img_1, // Saran gambar: "mobile app development illustration", "app developer team"
    title: `Pengembangan Aplikasi Mobile`,
    category: `Mobile App Development`,
  },
  {
    img: portfolio_img_4, // Saran gambar: "upload app to playstore", "playstore publish illustration"
    title: `Jasa Upload Aplikasi ke Play Store`,
    category: `App Publishing / Play Store`,
  },
];

const PortfolioHomeOne = () => {
  return (
    <>
      <div className="cs_horizontal_scroll_wrap">
        <div className="cs_height_145 cs_height_lg_60"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_2">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                Portofolio
              </div>
              <h2 className="cs_section_title anim_heading_title">
                Proyek IT Solution Terbaru dari Kami
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
        </div>
        <Swiper
          loop={true}
          speed={1000}
          slidesPerView="auto"
          pagination={{
            el: ".cs_pagination",
            clickable: true,
          }}
          className="cs_horizontal_scrolls anim_div_ShowDowns"
        >
          {portfolio_slider.map((item, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <div className="cs_horizontal_scroll">
                {/* <Link href="/portfolio-details" className="cs_portfolio cs_style_1"> */}
                <div className="cs_portfolio cs_style_1">
                  <div className="cs_portfolio_img">
                    <Image src={item.img} alt="Thumb" />
                  </div>
                  <div className="cs_portfolio_overlay"></div>
                  <div className="cs_portfolio_info">
                    <h2 className="cs_portfolio_title">{item.title}</h2>
                    <div className="cs_portfolio_subtitle">{item.category}</div>
                  </div>
                </div>
                {/* </Link> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="cs_height_145 cs_height_lg_60"></div>
    </>
  );
};

export default PortfolioHomeOne;
