import googlePlay from "../../assets/Imgs/image App store.png";
import appStore from "../../assets/Imgs/image google.png";

function LowerFooter() {
  return (
    <section className="container flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0 py-5 text-sm text-center md:text-left">
      <p className="font-semibold ">
        Copyright 2025 <span className="text-txtPrimary px-1">Banknote</span>{" "}
        All rights reserved.
      </p>

      <div className="flex flex-col gap-3 md:flex-row md:gap-5 items-center">
        <p>Download App</p>
        <img
          src={googlePlay}
          alt="google Play"
          title="google Play"
          loading="lazy"
        />
        <img src={appStore} alt="App Store" title="App Store" loading="lazy" />
      </div>
    </section>
  );
}

export default LowerFooter;
