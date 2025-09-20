function CartCategory({ category }) {
  const { titleCat, imgCat } = category;
  return (
    <div>
      <div>
        <img
          src={imgCat}
          alt={`${titleCat}`}
          title={`${titleCat}`}
          loading="lazy"
          className="rounded-[4px] w-full h-full object-cover"
        />
      </div>
      <div>
        <h3 className="font-special pt-[16px]">{titleCat}</h3>
      </div>
    </div>
  );
}

export default CartCategory;
