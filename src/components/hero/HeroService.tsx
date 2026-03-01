import React from "react";
import Link from "next/link";

interface DataType {
  id: number;
  title: string;
  description: string;
}

const banner_data: DataType[] = [
  {
    id: 1,
    title: "Pembuatan Aplikasi",
    description:
      "Kami membantu bisnis Anda membangun aplikasi mobile dan web yang modern, aman, dan scalable sesuai kebutuhan.",
  },
  {
    id: 2,
    title: "Pengembangan Website",
    description:
      "Layanan pembuatan website profesional untuk meningkatkan kredibilitas dan kehadiran digital bisnis Anda.",
  },
  {
    id: 3,
    title: "Layanan Digital",
    description:
      "Solusi digital terintegrasi mulai dari sistem informasi, integrasi API, hingga automasi proses bisnis.",
  },
  {
    id: 4,
    title: "Desain Produk Digital",
    description:
      "UI/UX Design yang fokus pada pengalaman pengguna dan tampilan visual yang menarik.",
  },
  {
    id: 5,
    title: "Digital Marketing",
    description:
      "Strategi pemasaran digital untuk menjangkau lebih banyak pelanggan dan meningkatkan penjualan.",
  },
  {
    id: 6,
    title: "Pengembangan Aplikasi iOS",
    description:
      "Jasa pembuatan aplikasi iOS untuk memperluas jangkauan bisnis Anda di platform Apple.",
  },
];

const HeroService = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      <section className="position-relative">
        <div className="container">
          <div className="cs_section_heading cs_style_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_word_writting">
              Tingkatkan Bisnis Anda dengan Layanan Digital Terbaik dari Kami
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_card_1_list">
            {banner_data.map((item, i) => (
              <div key={i} className="cs_card cs_style_1 anim_div_ShowDowns">
                <div className="cs_card_left">
                  <div
                    className="cs_card_number cs_primary_font"
                    style={{
                      backgroundImage: `url('/assets/img/portfolio_solution_2.jpg')`,
                    }}
                  >
                    0{i + 1}
                  </div>
                </div>
                <div className="cs_card_right">
                  <div className="cs_card_right_in">
                    <h2 className="cs_card_title">
                      {/* Tidak bisa diklik */}
                      {item.title}
                    </h2>
                    <div className="cs_card_subtitle">{item.description}</div>
                  </div>
                </div>
                {/* Hapus link agar tidak bisa diklik */}
                {/* <div className="cs_card_link_wrap">
                  <Link href="/service-details" className="cs_card_link">...</Link>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroService;
