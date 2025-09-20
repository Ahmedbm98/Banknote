import CartProductDiscont from "./CartProductDiscont";

function LeftCartDiscount({ cartItem }) {
  const { imgDisc, bgImg, title, price, descCart, cartProd } = cartItem;
  console.log(cartItem);
  return (
    <section className="flex flex-col md:flex-row gap-3 my-3">
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className={`bg-BgbannerDisc1 bg-cover bg-center py-7 flex  items-center rounded-[8px] w-full lg:w-1/2`}
      >
        <div className=" font-special font-simebold flex flex-col justify-between gap-7 px-4 ">
          <h2
            className={`${
              descCart.titleColor == "white" ? "text-white" : "text-black"
            }`}
          >
            {title}
          </h2>
          <div
            className={`flex flex-col ${
              descCart.spanColor == "orange"
                ? "text-[#FDC714]"
                : "text-[#410383]"
            } `}
          >
            <span>Only</span>
            <span>{price}</span>
          </div>
        </div>
        <img src={imgDisc} alt="curlit cream" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 ">
        {cartProd.map((itemPrd) => {
          return <CartProductDiscont key={itemPrd.id} prdCart={itemPrd} />;
        })}
      </div>
    </section>
  );
}

export default LeftCartDiscount;
