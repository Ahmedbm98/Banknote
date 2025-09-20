import furniture1 from "../../assets/Imgs/furniture1.png";
import furniture2 from "../../assets/Imgs/furniture2.png";
import furniture3 from "../../assets/Imgs/furniture3.png";
import furniture4 from "../../assets/Imgs/furniture4.png";
import furniture5 from "../../assets/Imgs/furniture5.png";
import furniture6 from "../../assets/Imgs/furniture6.png";
import CartCategory from "../SharedComponents/CartCategory";
import HeadingSection from "../SharedComponents/HeadingSection";
import ShopButton from "../SharedComponents/ShopButton";
function MainFurniture() {
  const DataCategoryFurniture = [
    {
      id: 1,
      titleCat: "Coffee Table",
      imgCat: furniture1,
    },
    {
      id: 2,
      titleCat: "Sofa",
      imgCat: furniture2,
    },
    {
      id: 3,
      titleCat: "TV Tables",
      imgCat: furniture3,
    },
    {
      id: 4,
      titleCat: "Bedroom",
      imgCat: furniture4,
    },
    {
      id: 5,
      titleCat: "Desks & Chairs",
      imgCat: furniture5,
    },
    {
      id: 6,
      titleCat: "Wardrobe",
      imgCat: furniture6,
    },
  ];
  return (
    <section className="py-[64px] container">
      <div className="mb-[32px] flex items-center justify-between">
        <HeadingSection heading={"Furniture"} />
        <ShopButton showMore={"all"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-[24px] ">
        {DataCategoryFurniture.map((catFurniture) => {
          return <CartCategory key={catFurniture.id} category={catFurniture} />;
        })}
      </div>
    </section>
  );
}

export default MainFurniture;
