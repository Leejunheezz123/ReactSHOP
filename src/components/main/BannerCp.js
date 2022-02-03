import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerCp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToscroll: 1,
  };

  return (
    <Slider {...settings}>
      <section>
        <img src="/img/banner-slider-1.jpg" className="w100" alt="Main banner" />
      </section>
      <section>
        <img src="/img/banner-slider-1.jpg" className="w100" alt="Main banner" />
      </section>
    </Slider>
  );
};

export default React.memo(BannerCp);
