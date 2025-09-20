import bgDisc1 from "../../assets/Imgs/prodDiscount/DiscCream1.png";
import bgDisc2 from "../../assets/Imgs/prodDiscount/Discount2.jpg";
import cream1 from "../../assets/Imgs/prodDiscount/curlit1.png";
import cream3 from "../../assets/Imgs/prodDiscount/curlit2.png";
import cream2 from "../../assets/Imgs/prodDiscount/image.png";
import cartPrd1 from "../../assets/Imgs/prodDiscount/prdDiscount1.png";
import cartPrd2 from "../../assets/Imgs/prodDiscount/prdDiscount2.png";
import cartPrd3 from "../../assets/Imgs/prodDiscount/prdDiscount3.png";
import cartPrd4 from "../../assets/Imgs/prodDiscount/prdDiscount4.png";
import cartPrd5 from "../../assets/Imgs/prodDiscount/prdDiscount5.png";
import cartPrd6 from "../../assets/Imgs/prodDiscount/prdDiscount6.png";

import CounterTiming from "../SharedComponents/CounterTiming";
import HeadingSection from "../SharedComponents/HeadingSection";
import LeftCartDiscount from "./LeftCartDiscount";
function MainProductDiscounts() {
  const DataTiming = [
    { id: 1, number: 50, time: "Days" },
    { id: 2, number: 20, time: "Hour" },
    { id: 3, number: 53, time: "Min" },
    { id: 4, number: 57, time: "Sec" },
  ];

  const DataDiscount = [
    {
      id: 1,
      bgImg: bgDisc1,
      imgDisc: cream1,
      title: "Your Biggest Flex Leave-In Conditioner for Curly Hair",
      price: 250,
      descCart: {
        titleColor: "white",
        spanColor: "orange",
      },
      cartProd: [
        { id: 1, imgCart: cartPrd1, pricePrd: 220 },
        { id: 2, imgCart: cartPrd2, pricePrd: 220 },
      ],
    },
    {
      id: 2,
      bgImg: bgDisc2,
      imgDisc: cream2,
      title: "OLLANO Anti Hair Loss Lotion",
      price: 290,
      descCart: {
        titleColor: "black",
        spanColor: "black",
      },
      cartProd: [
        { id: 1, imgCart: cartPrd3, pricePrd: 270 },
        { id: 2, imgCart: cartPrd4, pricePrd: 220 },
      ],
    },
    {
      id: 3,
      bgImg: bgDisc1,
      imgDisc: cream3,
      title: "Your Biggest Flex Leave-In Conditioner for Curly Hair",
      price: 250,
      descCart: {
        titleColor: "white",
        spanColor: "orange",
      },
      cartProd: [
        { id: 1, imgCart: cartPrd5, pricePrd: 220 },
        { id: 2, imgCart: cartPrd6, pricePrd: 220 },
      ],
    },
  ];

  return (
    <section className="py-[64px] container">
      <div className="mb-[32px] flex items-center justify-between gap-1">
        <HeadingSection heading={"Products With Discounts"} />
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-2">
          {DataTiming.map((dateTime) => {
            return <CounterTiming key={dateTime.id} dateTime={dateTime} />;
          })}
        </div>
      </div>
      <div className="border-[1px] border-txtPrimary rounded-[4px] p-[12px] ">
        {DataDiscount.map((cartItem) => {
          return <LeftCartDiscount key={cartItem} cartItem={cartItem} />;
        })}
      </div>
    </section>
  );
}

export default MainProductDiscounts;
