import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "../../style";
import { filePath } from "../../modules/util";

const Wrapper = styled.section`
  width: 100%;
  overflow-x: hidden;
  padding-bottom: 3em;
`;

const BannerCp = () => {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:3100/api/banner")
      .then(({ data }) => {
        const { content: contents, BoardFiles } = data.list;
        setBanner(
          contents.split("^^").map((v, i) => {
            let [title, price, content, link] = v.split("|");
            return {
              title,
              price,
              content,
              link,
              file: filePath(BoardFiles[i].saveName),
            };
          })
        );
      })
      .catch((err) => console.log(err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        {banner.map((v, i) => (
          <div>
            <img src={v.file} className="w100" alt={v.title} key={i} />
          </div>
        ))}
      </Slider>
    </Wrapper>
  );
};

export default React.memo(BannerCp);
