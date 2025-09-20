import MainBeautyPicks from "./components/BeautyPicksSection/MainBeautyPicks";
import BeautySection from "./components/BeautySection/BeautySection";
import MainCleaning from "./components/CleaningSection/MainCleaning";
import MainFeaturedGroceryProducts from "./components/FeaturedGroceryProducts/MainFeaturedGroceryProducts";
import MainFeature from "./components/FeatureGrocerySection/MainFeature";
import MainFooter from "./components/Footer/MainFooter";
import MainFurniture from "./components/FurnitureSection/MainFurniture";
import MainHeroSection from "./components/HeroSection/MainHeroSection";
import MainHousehold from "./components/HouseholdSection/MainHousehold";
import MainNavbar from "./components/Navbar/MainNavbar";
import MainProductDiscounts from "./components/ProductDiscounts/MainProductDiscounts";
import ButtonScroll from "./components/SharedComponents/ButtonScroll";

function App() {
  return (
    <>
      <MainNavbar />
      <MainHeroSection />
      <MainProductDiscounts />
      <MainFeature />
      <MainHousehold />
      <BeautySection />
      <MainFurniture />
      <MainBeautyPicks />
      <MainCleaning />
      <MainFeaturedGroceryProducts />
      <ButtonScroll />
      <MainFooter />
    </>
  );
}

export default App;
