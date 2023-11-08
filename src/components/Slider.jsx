/* eslint-disable react/prop-types */
// import Carousel from "./Carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

SwiperCore.use([Navigation]);

const Slider = ({ films }) => {
  return (
    <>
      <div>
        <Swiper navigation>
          {films.map((item) => {
            console.log(item);
            // const { id, slideBg, slideTitle, slideDescription } = item;
            return (
              <SwiperSlide key={item.FilmName}>
                <Carousel
                  slideTitle={item.FilmName}
                  slideDescription={item.description}
                  slideBg={item.imageSrc}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};
export default Slider;
