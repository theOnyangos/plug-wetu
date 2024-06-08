import useScreenSize from "../../hooks/useScreenSize";
import {
  Footer,
  Navigation,
  BottomNavBar,
  ThemeChanger,
  MobileDetailsNavigation,
  CategoryProductsComponent,
} from "@/components";

const CategoryProductsScreens = () => {
  const isMobile = useScreenSize();

  return (
    <>
      {/* Navigation */}
      {isMobile ? (
        <MobileDetailsNavigation title={"Category Products"} />
      ) : (
        <Navigation />
      )}

      {/* Category Products */}
      <CategoryProductsComponent />

      {/* Theme Changer */}
      <ThemeChanger />

      {/* Mobile Bottom Navbar */}
      <BottomNavBar />

      <Footer />
    </>
  );
};

export default CategoryProductsScreens;
