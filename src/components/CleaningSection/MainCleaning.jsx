import cleaning1 from "../../assets/Imgs/cleaning1.png";
import cleaning2 from "../../assets/Imgs/cleaning2.png";
import cleaning3 from "../../assets/Imgs/cleaning3.png";
import cleaning4 from "../../assets/Imgs/cleaning4.png";
import cleaning5 from "../../assets/Imgs/cleaning5.png";
import cleaning6 from "../../assets/Imgs/cleaning6.png";
import CartCategory from "../SharedComponents/CartCategory";
import HeadingSection from "../SharedComponents/HeadingSection";
import ShopButton from "../SharedComponents/ShopButton";
function MainCleaning() {
  const DataCategoryCleaning = [
    {
      id: 1,
      titleCat: "Air Freshers",
      imgCat: cleaning1,
    },
    {
      id: 2,
      titleCat: "Green glass and window",
      imgCat: cleaning2,
    },
    {
      id: 3,
      titleCat: "Multi-purpose cleaning paste with Calming",
      imgCat: cleaning3,
    },
    {
      id: 4,
      titleCat: "Magic Perfume for Household Purposes",
      imgCat: cleaning4,
    },
    {
      id: 5,
      titleCat: "Green glass and window",
      imgCat: cleaning5,
    },
    {
      id: 6,
      titleCat: "Defense Antiseptic Liquid",
      imgCat: cleaning6,
    },
  ];
  return (
    <section className="py-[64px] container">
      <div className="mb-[32px] flex items-center justify-between">
        <HeadingSection heading={"Cleaning Supplies"} />
        <ShopButton showMore={"all"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-[24px] ">
        {DataCategoryCleaning.map((catCleaning) => {
          return <CartCategory key={catCleaning.id} category={catCleaning} />;
        })}
      </div>
    </section>
  );
}

export default MainCleaning;
