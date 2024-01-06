import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
import { motion } from "framer-motion";

const Residencies = () => {
  return (
    <div className="r-wrapper" id="residencies">
      <div className="paddings innerWidth r-container">
        <motion.div className="r-head flexColStart"
        initial={{y:"5rem",opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{
          duration:3,
          type: "spring"
        }
        }
        >
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </motion.div>
        <Swiper {...sliderSettings}>
            <SliderButton/>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>

                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Residencies;

const SliderButton=()=>{
    const swiper = useSwiper();
    return(
        <div className="flexCenter r-buttons">
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    )
}
