import beautyCat1 from "../../assets/Imgs/categoryBeauty1.png";
import beautyCat2 from "../../assets/Imgs/categoryBeauty2.png";
import beautyCat3 from "../../assets/Imgs/categoryBeauty3.png";
import beautyCat4 from "../../assets/Imgs/categoryBeauty4.png";
import beautyCat5 from "../../assets/Imgs/categoryBeauty5.png";
import beautyCat6 from "../../assets/Imgs/categoryBeauty6.png";
import CartCategory from "../SharedComponents/CartCategory";
import HeadingSection from "../SharedComponents/HeadingSection";
import ShopButton from "../SharedComponents/ShopButton";

function BeautySection() {
  const DataCategoryBeauty = [
    {
      id: 1,
      titleCat: "Skin  Care",
      imgCat: beautyCat1,
    },
    {
      id: 2,
      titleCat: "Perfumes",
      imgCat: beautyCat2,
    },
    {
      id: 3,
      titleCat: "Hair Care",
      imgCat: beautyCat3,
    },
    {
      id: 4,
      titleCat: "Body Care",
      imgCat: beautyCat4,
    },
    {
      id: 5,
      titleCat: "Health & Personal Care",
      imgCat: beautyCat5,
    },
    {
      id: 6,
      titleCat: "Natural & Essential  ",
      imgCat: beautyCat6,
    },
  ];
  return (
    <section className="py-[64px] container">
      <div className="mb-[32px] flex items-center justify-between">
        <HeadingSection heading={"Beauty"} />
        <ShopButton showMore={"all"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-[24px] ">
        {DataCategoryBeauty.map((catBeauty) => {
          return <CartCategory key={catBeauty.id} category={catBeauty} />;
        })}
      </div>
    </section>
  );
}

export default BeautySection;
