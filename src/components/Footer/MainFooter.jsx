import LowerFooter from "./LowerFooter";
import SocialFooter from "./SocialFooter";
import UpperFooter from "./UpperFooter";

function MainFooter() {
  return (
    <footer className=" ">
      <div className="bg-bgblackFooter py-[46px]">
        <UpperFooter />
        <SocialFooter />
      </div>
      <LowerFooter />
    </footer>
  );
}

export default MainFooter;
