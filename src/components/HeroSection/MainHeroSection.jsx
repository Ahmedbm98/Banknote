import CategorySwiper from "./CategorySwiper";
import LiveChat from "./LiveChat";
import UpperHero from "./UpperHero";

export default function MainHeroSection() {
  return (
    <header className="min-h-dvh bg-bgHero py-[64px] relative">
      <UpperHero />
      <CategorySwiper />
      <LiveChat />
    </header>
  );
}
