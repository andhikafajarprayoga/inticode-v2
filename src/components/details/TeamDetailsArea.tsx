import React from "react";
import avatar_img_1 from "@/assets/img/team_detalils.jpg";
import Image from "next/image";

interface DataType {
  des: string;
  info: {
    title: string;
    des: string;
  }[];
}

const team_content: DataType = {
  des: `Andhika Fajar Prayoga adalah Project Manager di Inticode.store yang berpengalaman dalam mengelola tim dan memastikan setiap proyek berjalan lancar, tepat waktu, dan sesuai kebutuhan klien. Siap membantu transformasi digital bisnis Anda dengan solusi terbaik.`,
  info: [
    {
      title: `Address:`,
      des: `Kota Bandung`,
    },
    {
      title: `Email:`,
      des: `andhikafajarprayoga@gmail.com`,
    },
    {
      title: `Phone:`,
      des: `085963160777`,
    },
    {
      title: `Website:`,
      des: `www.inticode.store`,
    },
  ],
};

const { des, info } = team_content;

const TeamDetailsArea = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text anim_text_writting">
              <h2 className="cs_section_title">
                Andhika Fajar Prayoga &nbsp;&bull;&nbsp; Project Manager
              </h2>
            </div>
          </div>
        </div>
      </section>

      <div className="cs_height_100 cs_height_lg_60"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <Image src={avatar_img_1} alt="team_detalils" />
            <div className="cs_height_lg_30"></div>
          </div>
          <div className="col-md-7">
            <div className="cs_team_details">
              <div className="cs_team_details_text">
                <p>{des}</p>
                <div className="cs_height_50 cs_height_lg_50"></div>

                {info.map((item, i) => (
                  <div key={i} className="d-flex">
                    <p className="col-md-2 col-4 cs_medium cs_primary_color">
                      {item.title}
                    </p>
                    <p className="col-md-4 col-10">{item.des}</p>
                  </div>
                ))}
              </div>
              <div className="cs_height_50 cs_height_lg_50"></div>
              <div className="cs_btn cs_style_2">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default TeamDetailsArea;
