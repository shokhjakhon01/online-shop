import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/loader";
import classes from "../styles/single.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const Single = () => {
  const { id } = useParams();
  const [singleData, setSingleData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getSingleData = async () => {
      const res = await fetch("https://dummyjson.com/products/" + id);
      const data = await res.json();
      setSingleData(data);
      setLoading(false);
    };
    getSingleData();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={`${classes.wrapper} container`}>
      <h2 className={classes.title}>
        <span>Name: </span>
        {singleData.title}
      </h2>
      <p className={classes.about}>
        <span>About: </span>
        {singleData.description}
      </p>
      <div>
        <div className="main-swiper">
          <Swiper
            effect={"coverflow"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={true}
            className="mySwiper"
          >
            {singleData?.images?.map((img, i) => {
              return (
                <SwiperSlide key={i}>
                  <img width={450} height={300} src={img} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <p className={classes.about}>
        <span>Price: </span>
        {singleData.price}$
      </p>
      <p className={classes.about}>
        <span>rating:</span> {singleData.rating}
      </p>
    </div>
  );
};

export default Single;
