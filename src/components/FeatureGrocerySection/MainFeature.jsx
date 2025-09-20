import product1 from "../../assets/Imgs/Background card product (1).png";
import product2 from "../../assets/Imgs/Background card product (2).png";
import product3 from "../../assets/Imgs/Background card product (3).png";
import product4 from "../../assets/Imgs/Background card product (4).png";
import product5 from "../../assets/Imgs/Background card product (5).png";
import product6 from "../../assets/Imgs/Background card product (6).png";
import ArrowButtons from "../SharedComponents/ArrowButtons";
import CartProducts from "../SharedComponents/CartProducts";
import HeadingSection from "../SharedComponents/HeadingSection";

function MainFeature() {
  const ProductofData = [
    {
      id: 1,
      titlePrd: "Revana Tomato Sauce 800gm",
      img: product1,
      price: 150,
    },
    {
      id: 2,
      titlePrd: "Revana Tomato Sauce 800gm",
      img: product2,
      price: 200,
    },
    {
      id: 3,
      titlePrd: "Revana Tomato Sauce 800gm",
      img: product3,
      price: 180,
    },
    {
      id: 4,
      titlePrd: "Revana Tomato Sauce 800gm",
      img: product4,
      price: 240,
    },
    {
      id: 5,
      titlePrd: "Revana Tomato Sauce 800gm",
      img: product5,
      price: 230,
    },
    {
      id: 6,
      titlePrd: "Revana Tomato Sauce 800gm",
      img: product6,
      price: 190,
    },
  ];

  return (
    <section className="py-[64px] container">
      <div className="mb-[32px] flex items-center justify-between">
        <HeadingSection heading={"Featured Grocery"} />
        <ArrowButtons />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 ">
        {ProductofData.map((product) => {
          return <CartProducts product={product} key={product.id} />;
        })}
      </div>
    </section>
  );
}

export default MainFeature;
