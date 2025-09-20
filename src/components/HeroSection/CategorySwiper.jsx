import { Swiper, SwiperSlide } from "swiper/react";
import accessories from "../../assets/Imgs/category/Accessories.png";
import agriculture from "../../assets/Imgs/category/agriculture.jpg";
import animalsFood from "../../assets/Imgs/category/animalsfood.jpg";
import carpet from "../../assets/Imgs/category/Carpet.png";
import car from "../../assets/Imgs/category/cars.png";
import cleaningSupplies from "../../assets/Imgs/category/CleaningSupplies.png";
import food from "../../assets/Imgs/category/Food.png";
import furniture from "../../assets/Imgs/category/Furniture.png";
import houseItems from "../../assets/Imgs/category/HouseItems.png";
import metals from "../../assets/Imgs/category/metals.jpg";
import mirror from "../../assets/Imgs/category/mirror.jpg";
import napkins from "../../assets/Imgs/category/napkins.jpg";
import painting from "../../assets/Imgs/category/Painting.png";

// Import Swiper styles
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
function CategorySwiper() {
  const dataOfCategory = [
    { catImg: accessories, titleCat: "accessories" },
    { catImg: agriculture, titleCat: "agriculture" },
    { catImg: animalsFood, titleCat: "animals Food" },
    { catImg: carpet, titleCat: "carpet" },
    { catImg: car, titleCat: "car" },
    { catImg: cleaningSupplies, titleCat: "cleaning Supplies" },
    { catImg: food, titleCat: "food" },
    { catImg: furniture, titleCat: "furniture" },
    { catImg: metals, titleCat: "metals" },
    { catImg: houseItems, titleCat: "house Items" },
    { catImg: mirror, titleCat: "mirror" },
    { catImg: painting, titleCat: "painting" },
    { catImg: napkins, titleCat: "napkins" },
  ];
  return (
    <Swiper
      className="mx-4 md:container"
      spaceBetween={10}
      slidesPerView={2}
      navigation={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      lazy={true}
      breakpoints={{
        640: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 8,
          spaceBetween: 20,
        },
      }}
    >
      {dataOfCategory.map((itemCategory, index) => {
        return (
          <SwiperSlide key={index} className="relative group">
            <img
              className="w-full h-full object-contain rounded-[8px]"
              src={itemCategory.catImg}
              alt={`${itemCategory.titleCat}`}
              title={`${itemCategory.titleCat}`}
            />
            <div className="absolute inset-0 z-10 bg-bgOrange/50 flex items-center justify-center text-center capitalize opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {itemCategory.titleCat}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default CategorySwiper;
