import React, { useState, useMemo } from "react";
import useScreenSize from "../../hooks/useScreenSize.mjs";
import Navigation from "../../components/utils/Navigation";
import DynamicHelmet from "../../components/DynamicHelmet";
import toast, { Toaster } from "react-hot-toast";
import ThemeChanger from "../../components/ThemeChanger";
import { BiSolidPhoneCall } from "react-icons/bi";
import EmptyCart from "../../components/cart/EmptyCart";
import CartItem from "../../components/cart/CartItem";
import { useCart, useCartItems } from "../../store/useCart";
import ScrollableComponent from "../../components/utils/ScrollableComponent";
import MobileDetailsNavigation from "../../components/utils/MobileDetailsNavigation";

const Cart = () => {
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
      {isMobile ? <MobileDetailsNavigation /> : <Navigation />}

      <section className="pt-3 pb-20">
        <div className="container mx-auto">
          {/* Cart Summary */}
          <h1 className="text-base font-normal dark:text-slate-200 mb-2">
            Cart Summary
          </h1>
        </div>

        {/* Cart Summary Subtotal */}
        <div className="md:container md:mx-auto">
          <div className="w-full bg-white dark:bg-dark rounded-md p-5 shadow-sm mb-3">
            <h1 className="text-lg font-semibold dark:text-slate-200 flex justify-between items-center">
              Subtotal <span>Ksh {cartTotal}</span>
            </h1>
            <p className="text-gray-500 text-sm dark:text-slate-200">
              Your cart subtotals will appear here...
            </p>
          </div>
        </div>

        <div className="container mx-auto">
          {/* Cart Summary */}
          <h1 className="text-base font-normal dark:text-slate-200 mb-2">
            Cart ({items?.length} items)
          </h1>

          {/* Cart Summary Items */}
          {items.length > 0 ? (
            items?.map((item, index) => <CartItem key={index} item={item} />)
          ) : (
            <EmptyCart classes={"h-[550px]"} />
          )}
        </div>
      </section>

      {/* Checkout button */}
      {isMobile && items.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-dark p-3 shadow-xl">
          <div className="flex gap-2 items-center">
            <div className="flex gap-2 items-center">
              <button className="btn bg-slate-200 text-darken border border-darken dark:bg-slate-100 dark:text-darken hover:bg-slate-400 hover:text-slate-100 p-3 rounded-md">
                <BiSolidPhoneCall className="text-2xl" />
              </button>
            </div>
            <button className="btn font-normal text-white bg-darken dark:bg-primary dark:text-white hover:bg-secondary hover:text-white w-full py-3 flex justify-center items-center rounded-md">
              Checkout (KES {cartTotal})
            </button>
          </div>
        </div>
      )}

      {items.length === 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-dark p-3 shadow-xl">
          <div className="flex gap-2 items-center">
            <button className="btn font-normal text-white bg-darken dark:bg-primary dark:text-white hover:bg-secondary hover:text-white w-full py-3 flex justify-center items-center rounded-md">
              Start Shopping
            </button>
          </div>
        </div>
      )}

      <ThemeChanger />
      <Toaster />
    </ScrollableComponent>
  );
};



export default Cart;
