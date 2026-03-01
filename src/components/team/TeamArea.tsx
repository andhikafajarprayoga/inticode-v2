import React from "react";
import Image from "next/image";
import team_data from "@/data/team_data";
import Link from "next/link";

const TeamArea = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1">
          <div className="cs_section_heading_text">
            <h2 className="cs_section_title anim_text_writting">
              Tim Profesional Inticode.store Siap Mendukung Transformasi Digital
              Bisnis Anda
            </h2>
          </div>
        </div>
      </div>

      <div className="cs_height_100 cs_height_lg_60"></div>
      <section>
        <div className="container">
          <div className="cs_team_section anim_div_ShowDowns">
            {team_data.slice(0, 4).map((item, i) => (
              <div key={i} className="cs_team_img">
                {/* Hapus Link, gambar dan nama tidak bisa diklik */}
                <Image src={item.img} alt="teamsimg1" />
                <div className="cs_portfolio_overlay"></div>
                <div className="cs_team_text">
                  <h6 className="cs_team_text_title">{item.avatar_name}</h6>
                  <p className="cs_team_subtitle">{item.designation}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cs_height_20 cs_height_lg_20"></div>
          <div className="cs_team_section anim_div_ShowDowns">
            {team_data.slice(4, 8).map((item, i) => (
              <div key={i} className="cs_team_img">
                {/* Hapus Link, gambar dan nama tidak bisa diklik */}
                <Image src={item.img} alt="teamsimg5" />
                <div className="cs_portfolio_overlay"></div>
                <div className="cs_team_text">
                  <h6 className="cs_team_text_title">{item.avatar_name}</h6>
                  <p className="cs_team_subtitle">{item.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamArea;
