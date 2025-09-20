function ShopButton({ showMore }) {
  return (
    <button className="px-[6px] py-[7px] lg:py-[10px] uppercase text-[#1E1E1E] border-[#1E1E1E] border-[1px] rounded-[4px]">
      Shop {showMore}
    </button>
  );
}

export default ShopButton;
