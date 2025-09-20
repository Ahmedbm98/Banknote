import { Swiper, SwiperSlide } from "swiper/react";
import slice1 from "../../assets/Imgs/HeroSilces/slice1.jpg";
import slice2 from "../../assets/Imgs/HeroSilces/slice2.jpg";
import slice3 from "../../assets/Imgs/HeroSilces/slice3.jpg";
import slice4 from "../../assets/Imgs/HeroSilces/slice4.jpg";
import slice5 from "../../assets/Imgs/HeroSilces/slice5.jpg";
import slice6 from "../../assets/Imgs/HeroSilces/slice6.jpg";
import slice7 from "../../assets/Imgs/HeroSilces/slice7.jpg";
import slice8 from "../../assets/Imgs/HeroSilces/slice8.jpg";
import slice9 from "../../assets/Imgs/HeroSilces/slice9.jpg";

import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
function HeroSwiper() {
  const dataOfSlices = [
    { catImg: slice1, titleCat: "slice1" },
    { catImg: slice2, titleCat: "slice2" },
    { catImg: slice3, titleCat: "slice3" },
    { catImg: slice4, titleCat: "slice4" },
    { catImg: slice5, titleCat: "slice5" },
    { catImg: slice6, titleCat: "slice6" },
    { catImg: slice7, titleCat: "slice7" },
    { catImg: slice8, titleCat: "slice8" },
    { catImg: slice9, titleCat: "slice9" },
  ];
  return (
    <Swiper
      className="container "
      spaceBetween={10}
      slidesPerView={2}
      navigation={true}
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      lazy={true}
      breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }}
    >
      {dataOfSlices.map((itemSlice, index) => {
        return (
          <SwiperSlide key={index}>
            <img
              className="w-[170px] h-[255px] object-cover rounded-[93px]"
              src={itemSlice.catImg}
              alt={`${itemSlice.titleCat}`}
              title={`${itemSlice.titleCat}`}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default HeroSwiper;
