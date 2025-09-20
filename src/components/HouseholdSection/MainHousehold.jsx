import household1 from "../../assets/Imgs/household1.png";
import household2 from "../../assets/Imgs/household2.png";
import household3 from "../../assets/Imgs/household3.png";
import household4 from "../../assets/Imgs/household4.png";
import household5 from "../../assets/Imgs/household5.png";
import household6 from "../../assets/Imgs/household6.png";
import CartCategory from "../SharedComponents/CartCategory";
import HeadingSection from "../SharedComponents/HeadingSection";
import ShopButton from "../SharedComponents/ShopButton";

function MainHousehold() {
  const DataHouseHold = [
    {
      id: 1,
      titleCat: "Dinner Sets",
      imgCat: household1,
    },
    {
      id: 2,
      titleCat: "Drinkware ",
      imgCat: household2,
    },
    {
      id: 3,
      titleCat: "Kitchen Items",
      imgCat: household3,
    },
    {
      id: 4,
      titleCat: "Dutch Oven",
      imgCat: household4,
    },
    {
      id: 5,
      titleCat: "Hanging Fork Knife",
      imgCat: household5,
    },
    {
      id: 6,
      titleCat: "Storage Boxes",
      imgCat: household6,
    },
  ];
  return (
    <section className="py-[64px] container">
      <div className="mb-[32px] flex items-center justify-between">
        <HeadingSection heading={"Household Supplies"} />
        <ShopButton showMore={"all"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-[24px] ">
        {DataHouseHold.map((catHouse) => {
          return <CartCategory key={catHouse.id} category={catHouse} />;
        })}
      </div>
    </section>
  );
}

export default MainHousehold;
