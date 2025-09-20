import HeroSwiper from "./HeroSwiper";

function HeroSlices() {
  return (
    <div className="bg-Bgbanner overflow-hidden bg-cover bg-center pt-[65px] pb-[15px] rounded-[8px] relative h-[500px] flex justify-center items-center ">
      <div className="bg-txtPrimary absolute z-10 -rotate-[38deg] top-0 right-[25%] md:right-[40%]  w-full py-3 text-center  flex flex-col text-2xl uppercase">
        <span>special</span>
        <span className="font-bold text-4xl md:text-5xl">offer</span>
      </div>
      <HeroSwiper />
    </div>
  );
}

export default HeroSlices;
