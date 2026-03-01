
'use client'

import React, { useState } from 'react';
import About from '@/components/about/About';
import AwardsHomeOne from '@/components/awards/AwardsHomeOne';
import BannerAbout from '@/components/brand/BannerAbout';
import BrandHomeOne from '@/components/brand/BrandHomeOne';
import FunFactHomeOne from '@/components/funfact/FunFactHomeOne';
import Gellary from '@/components/gellary/Gellary';
import TeamArea from '@/components/team/TeamArea';
import Testimonial from '@/components/testimonial/Testimonial';
import VideoHomeOne from '@/components/video/VideoHomeOne';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne'; 

// export const metadata = {
//   title: "About Vixan - Digital  Creative Agency Next js Template",
// };

const index = () => { 

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BannerAbout />
            <FunFactHomeOne style_3={true} />
            <About />
            <TeamArea />
            <AwardsHomeOne style_2={true} />
            <Testimonial />
          </main>
          <FooterOne />
        </div>
      </div>
 
    </Wrapper>
  );
};

export default index;