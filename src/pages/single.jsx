import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/loader";
import classes from "../styles/single.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { useDispatch, useSelector } from "react-redux";
import CardService from "../service/card";
import {
	getSingleCardFailore,
	getSingleCardStart,
	getSingleCardSuccess,
} from "../slice/cards";

const Single = () => {
    const { id } = useParams();
    

	const dispatch = useDispatch();
    const { isloading, singleCard } = useSelector((state) => state.cards);
    

    
	useEffect(() => {
        const getSingleCard = async () => {
            dispatch(getSingleCardStart());
    
            try {
                const response = await CardService.getSingleCard(id);
                dispatch(getSingleCardSuccess(response));
            } catch (error) {
                dispatch(getSingleCardFailore());
            }
        };

		getSingleCard();
	}, [id]);


	if (isloading) {
		return <Loader />;
	}

	return (
		<div className={`${classes.wrapper} container`}>
			<h2 className={classes.title}>
				<span>Name: </span>
				{singleCard?.title}
			</h2>
			<p className={classes.about}>
				<span>About: </span>
				{singleCard?.description}
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
						className="mySwiper">
						{singleCard?.images?.map((img, i) => {
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
				{singleCard?.price}$
			</p>
			<p className={classes.about}>
				<span>rating:</span> {singleCard?.rating}
			</p>
		</div>
	);
};

export default Single;
