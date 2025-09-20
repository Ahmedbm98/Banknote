import beauty1 from "../../assets/Imgs/beautyPick1.png";
import beauty2 from "../../assets/Imgs/beautyPick2.png";
import beauty3 from "../../assets/Imgs/beautyPick3.png";
import beauty4 from "../../assets/Imgs/beautyPick4.png";
import beauty5 from "../../assets/Imgs/beautyPick5.png";
import beauty6 from "../../assets/Imgs/beautyPick6.png";
import CartProducts from "../SharedComponents/CartProducts";
import HeadingSection from "../SharedComponents/HeadingSection";
import ShopButton from "../SharedComponents/ShopButton";

function MainBeautyPicks() {
  const DataOfBeauty = [
    {
      id: 1,
      titlePrd: "Shizaal Herba Kid Shampoo",
      img: beauty1,
      price: 200,
    },
    {
      id: 2,
      titlePrd: "Doctorz Perfume For Women",
      img: beauty2,
      price: 200,
    },
    {
      id: 3,
      titlePrd: "Anti Hair Lotion EWEM For All Hair Type",
      img: beauty3,
      price: 180,
    },
    {
      id: 4,
      titlePrd: "Ojuy Shower Gel Strawberry",
      img: beauty4,
      price: 240,
    },
    {
      id: 5,
      titlePrd: "Ojuy Shower Gel Strawberry",
      img: beauty5,
      price: 230,
    },
    {
      id: 6,
      titlePrd: "Ojuy Shower Gel Strawberry",
      img: beauty6,
      price: 190,
    },
  ];
  return (
    <section className="py-[64px] container">
      <div className="mb-[32px] flex items-center justify-between">
        <HeadingSection heading={"Beauty Picks"} />
        <ShopButton showMore={"now"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 ">
        {DataOfBeauty.map((productBeauty) => {
          return (
            <CartProducts product={productBeauty} key={productBeauty.id} />
          );
        })}
      </div>
    </section>
  );
}

export default MainBeautyPicks;
