import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import smartphone from "../assets/smart.jpg";
import classes from "./styles/slider.module.css";
import { Autoplay, Pagination, Navigation } from "swiper";


const Slider = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <Swiper
      className={classes.swiper}
      pagination={{ clickable: true }}
      spaceBetween={10}
      slidesPerView={1}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide className={classes.img}>
        <img className={classes.img} src={smartphone} alt="" />
      </SwiperSlide>
      <SwiperSlide className={classes.img}>
        <img className={classes.img} src={smartphone} alt="" />
      </SwiperSlide>
      <SwiperSlide className={classes.img}>
        <img className={classes.img} src={smartphone} alt="" />
      </SwiperSlide>
      <SwiperSlide className={classes.img}>
        <img className={classes.img} src={smartphone} alt="" />
      </SwiperSlide>
      <div ref={navigationPrevRef} />
      <div ref={navigationNextRef} />
    </Swiper>
  );
};

export default Slider;
