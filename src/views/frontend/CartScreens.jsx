import { useState, useMemo } from "react";
import useScreenSize from "../../hooks/useScreenSize.js";
import { Toaster } from "react-hot-toast";
import { useCart, useCartItems } from "../../store/useCart";
import {
  Navigation,
  CartButtons,
  ThemeChanger,
  DynamicHelmet,
  CartComponent,
  ScrollableComponent,
  MobileDetailsNavigation,
} from "@/components";

const CartScreens = () => {
  const [items, setItems] = useState([]);
  const isMobile = useScreenSize();
  const cartItems = useCartItems();
  const { cartTotal } = useCart();

  useMemo(() => {
    setItems(cartItems);
  }, [cartItems]);

  return (
    <ScrollableComponent>
      <DynamicHelmet
        title="Plug-wet - Cart Summary Page"
        description="All items place in cart will appear here..."
      />

      {/* Navigation */}
      {isMobile ? <MobileDetailsNavigation title={"Cart"} /> : <Navigation />}

      {/* Cart Summary */}
      <CartComponent cartTotal={cartTotal} items={items} />

      {/* Checkout button */}
      <CartButtons items={items} cartTotal={cartTotal} />

      {/* Theme Changer */}
      <ThemeChanger />

      <Toaster />
    </ScrollableComponent>
  );
};

export default CartScreens;
