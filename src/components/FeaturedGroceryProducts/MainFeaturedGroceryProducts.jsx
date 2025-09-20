import groceryPrd1 from "../../assets/Imgs/groceryProduct1.png";
import groceryPrd2 from "../../assets/Imgs/groceryProduct2.png";
import groceryPrd3 from "../../assets/Imgs/groceryProduct3.png";
import groceryPrd4 from "../../assets/Imgs/groceryProduct4.png";
import groceryPrd5 from "../../assets/Imgs/groceryProduct5.png";
import groceryPrd6 from "../../assets/Imgs/groceryProduct6.png";
import CartProducts from "../SharedComponents/CartProducts";
import HeadingSection from "../SharedComponents/HeadingSection";
import ShopButton from "../SharedComponents/ShopButton";

function MainFeaturedGroceryProducts() {
  const DataOfGrocery = [
    {
      id: 1,
      titlePrd: "Shizaal Herba Kid Shampoo",
      img: groceryPrd1,
      price: 200,
    },
    {
      id: 2,
      titlePrd: "Doctorz Perfume For Women",
      img: groceryPrd2,
      price: 200,
    },
    {
      id: 3,
      titlePrd: "Anti Hair Lotion EWEM For All Hair Type",
      img: groceryPrd3,
      price: 200,
    },
    {
      id: 4,
      titlePrd: "Ojuy Shower Gel Strawberry",
      img: groceryPrd4,
      price: 200,
    },
    {
      id: 5,
      titlePrd: "Ojuy Shower Gel Strawberry",
      img: groceryPrd5,
      price: 200,
    },
    {
      id: 6,
      titlePrd: "Ojuy Shower Gel Strawberry",
      img: groceryPrd6,
      price: 200,
    },
  ];
  return (
    <section className="py-[64px] container">
      <div className="mb-[32px] flex items-center justify-between">
        <HeadingSection heading={"Featured Grocery"} />
        <ShopButton showMore={"now"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 ">
        {DataOfGrocery.map((GroceryProduct) => {
          return (
            <CartProducts product={GroceryProduct} key={GroceryProduct.id} />
          );
        })}
      </div>
    </section>
  );
}

export default MainFeaturedGroceryProducts;
