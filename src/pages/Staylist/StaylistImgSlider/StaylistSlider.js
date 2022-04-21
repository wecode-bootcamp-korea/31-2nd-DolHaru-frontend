import styled from 'styled-components';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StaylistSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <StyledSlide {...settings}>
      {images.map((img, index) => (
        <img key={index} src={img} alt="stay slide" />
      ))}
    </StyledSlide>
  );
};

export default StaylistSlider;

const StyledSlide = styled(Slider)`
  img {
    width: 300px;
    height: 200px;
    border-radius: 15px;
  }

  .slick-slide {
    display: inline-block;
  }

  .slick-list {
    width: 300px;
    height: 200px;
    overflow: hidden;
    z-index: 100;
  }

  .slick-prev {
    left: 5px;
    width: 50px !important;
    z-index: 9999;
    opacity: 0;
  }

  .slick-next {
    right: 5px;
    width: 50px !important;
    opacity: 0;
    z-index: 999;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
  }

  .slick-prev:hover,
  .slick-next:hover {
    opacity: 1;
  }

  .slick-prev:hover:before,
  .slick-next:hover:before {
    color: white;
  }

  .slick-dots {
    position: absolute;
    bottom: 10px;
    z-index: 999;

    li button:before {
      color: white;
    }
  }
`;
