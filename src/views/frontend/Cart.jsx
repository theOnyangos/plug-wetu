import React, { useState } from "react";
import useScreenSize from "../../hooks/useScreenSize.mjs";
import Navigation from "../../components/utils/Navigation";
import DynamicHelmet from "../../components/DynamicHelmet";
import ScrollableComponent from "../../components/utils/ScrollableComponent";
import MobileDetailsNavigation from "../../components/utils/MobileDetailsNavigation";
import useToastTheme from "../../hooks/useToastTheme";
import toast, { Toaster } from "react-hot-toast";
import ThemeChanger from "../../components/ThemeChanger";
import { BiSolidTrash } from "react-icons/bi";
import useTruncate from "../../hooks/useTruncate";

const Cart = () => {
  const isMobile = useScreenSize();
  const { toasterTheme } = useToastTheme();
  const { truncateDescription } = useTruncate();
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    // if (quantity > productDetails.maxQuantity) {
    //   toast.error(
    //     "You have reached the maximum quantity for this product",
    //     toasterTheme()
    //   );
    //   return;
    // }
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    // if (quantity === 1) {
    //   toast.error(`You cannot have less than 1 quantity`, toasterTheme());
    //   return;
    // }

    setQuantity(quantity - 1);
  };

  return (
    <ScrollableComponent>
      <DynamicHelmet
        title="Plug-wet - Cart Summary Page"
        description="All items place in cart will appear here..."
      />

      {/* Navigation */}
      {isMobile ? <MobileDetailsNavigation /> : <Navigation />}

      <section className="mt-3">
        <div className="container mx-auto">
          {/* Cart Summary */}
          <h1 className="text-base font-normal dark:text-slate-200 mb-2">
            Cart Summary
          </h1>
        </div>

        {/* Cart Summary Subtotal */}
        <div className="w-full bg-white dark:bg-dark rounded-md p-5 shadow-sm mb-3">
          <h1 className="text-lg font-semibold dark:text-slate-200 flex justify-between items-center">
            Subtotal <span>Ksh 0.00</span>
          </h1>
          <p className="text-gray-500 text-sm dark:text-slate-200">
            Your cart items will appear here...
          </p>
        </div>

        <div className="container mx-auto">
          {/* Cart Summary */}
          <h1 className="text-base font-normal dark:text-slate-200 mb-2">
            Cart (2)
          </h1>

          {/* Cart Summary Items */}
          <div className="w-full bg-white dark:bg-dark rounded-md p-4 shadow-sm mb-3">
            <div className="flex flex-col justify-between items-start gap-2 w-full">
              <div className="flex gap-5 items-start w-full">
                <img
                  src="/images/image-1.webp"
                  alt="Product"
                  className="w-20 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h1 className="text-sm font-semibold dark:text-slate-200 leading-tight mb-1">
                    {truncateDescription(
                      `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Magni, ipsam?`,
                      50
                    )}
                  </h1>
                  <p className="text-xs dark:text-slate-200">
                    <span className="text-primary font-semibold">Color:</span>{" "}
                    Blue
                  </p>
                  <p className="text-xs dark:text-slate-200">
                    <span className="text-primary font-semibold">Size:</span>{" "}
                    Large
                  </p>
                  <p className="text-xl tracking-tight font-semibold text-primary dark:text-slate-200">
                    Ksh 2,500
                  </p>
                  <p className="text-sm leading-none font-normal text-gray-500 dark:text-gray-400 line-through">
                    Ksh 3,500
                  </p>
                </div>
              </div>

              {/* Bottom Section  */}
              <div className="flex justify-between items-center w-full">
                <div className="flex-1">
                  <button className="text-red-500 text-sm flex items-center space-x-2">
                    <BiSolidTrash className="inline" /> <span>Remove</span>
                  </button>
                </div>

                <div className="flex-1 w-full">
                  {/* Quantity Buttons */}
                  <div className="flex justify-between items-center">
                    <button
                      onClick={decreaseQuantity}
                      className="btn bg-slate-200 text-primary dark:bg-white dark:text-darken dark:hover:bg-slate-400 hover:bg-secondary hover:text-white w-8 md:w-10 h-8 md:h-10 rounded-md"
                    >
                      -
                    </button>
                    <span className="text-sm md:text-lg font-semibold text-primary dark:text-slate-200">
                      {quantity}
                    </span>
                    <button
                      onClick={increaseQuantity}
                      className="btn bg-slate-200 text-primary dark:bg-white dark:text-darken dark:hover:bg-slate-400 hover:bg-secondary hover:text-white w-8 md:w-10 h-8 md:h-10 rounded-md"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full bg-white dark:bg-dark rounded-md p-4 shadow-sm mb-3">
            <div className="flex flex-col justify-between items-start gap-2 w-full">
              <div className="flex gap-5 items-start w-full">
                <img
                  src="/images/image-1.webp"
                  alt="Product"
                  className="w-20 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h1 className="text-sm font-semibold dark:text-slate-200 leading-tight mb-1">
                    {truncateDescription(
                      `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Magni, ipsam?`,
                      50
                    )}
                  </h1>
                  <p className="text-xs dark:text-slate-200">
                    <span className="text-primary font-semibold">Color:</span>{" "}
                    Blue
                  </p>
                  <p className="text-xs dark:text-slate-200">
                    <span className="text-primary font-semibold">Size:</span>{" "}
                    Large
                  </p>
                  <p className="text-xl tracking-tight font-semibold text-primary dark:text-slate-200">
                    Ksh 2,500
                  </p>
                  <p className="text-sm leading-none font-normal text-gray-500 dark:text-gray-400 line-through">
                    Ksh 3,500
                  </p>
                </div>
              </div>

              {/* Bottom Section  */}
              <div className="flex justify-between items-center w-full">
                <div className="flex-1">
                  <button className="text-red-500 text-sm flex items-center space-x-2">
                    <BiSolidTrash className="inline" /> <span>Remove</span>
                  </button>
                </div>

                <div className="flex-1 w-full">
                  {/* Quantity Buttons */}
                  <div className="flex justify-between items-center">
                    <button
                      onClick={decreaseQuantity}
                      className="btn bg-slate-200 text-primary dark:bg-white dark:text-darken dark:hover:bg-slate-400 hover:bg-secondary hover:text-white w-8 md:w-10 h-8 md:h-10 rounded-md"
                    >
                      -
                    </button>
                    <span className="text-sm md:text-lg font-semibold text-primary dark:text-slate-200">
                      {quantity}
                    </span>
                    <button
                      onClick={increaseQuantity}
                      className="btn bg-slate-200 text-primary dark:bg-white dark:text-darken dark:hover:bg-slate-400 hover:bg-secondary hover:text-white w-8 md:w-10 h-8 md:h-10 rounded-md"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full bg-white dark:bg-dark rounded-md p-4 shadow-sm mb-3">
            <div className="flex flex-col justify-between items-start gap-2 w-full">
              <div className="flex gap-5 items-start w-full">
                <img
                  src="/images/image-1.webp"
                  alt="Product"
                  className="w-20 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h1 className="text-sm font-semibold dark:text-slate-200 leading-tight mb-1">
                    {truncateDescription(
                      `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Magni, ipsam?`,
                      50
                    )}
                  </h1>
                  <p className="text-xs dark:text-slate-200">
                    <span className="text-primary font-semibold">Color:</span>{" "}
                    Blue
                  </p>
                  <p className="text-xs dark:text-slate-200">
                    <span className="text-primary font-semibold">Size:</span>{" "}
                    Large
                  </p>
                  <p className="text-xl tracking-tight font-semibold text-primary dark:text-slate-200">
                    Ksh 2,500
                  </p>
                  <p className="text-sm leading-none font-normal text-gray-500 dark:text-gray-400 line-through">
                    Ksh 3,500
                  </p>
                </div>
              </div>

              {/* Bottom Section  */}
              <div className="flex justify-between items-center w-full">
                <div className="flex-1">
                  <button className="text-red-500 text-sm flex items-center space-x-2">
                    <BiSolidTrash className="inline" /> <span>Remove</span>
                  </button>
                </div>

                <div className="flex-1 w-full">
                  {/* Quantity Buttons */}
                  <div className="flex justify-between items-center">
                    <button
                      onClick={decreaseQuantity}
                      className="btn bg-slate-200 text-primary dark:bg-white dark:text-darken dark:hover:bg-slate-400 hover:bg-secondary hover:text-white w-8 md:w-10 h-8 md:h-10 rounded-md"
                    >
                      -
                    </button>
                    <span className="text-sm md:text-lg font-semibold text-primary dark:text-slate-200">
                      {quantity}
                    </span>
                    <button
                      onClick={increaseQuantity}
                      className="btn bg-slate-200 text-primary dark:bg-white dark:text-darken dark:hover:bg-slate-400 hover:bg-secondary hover:text-white w-8 md:w-10 h-8 md:h-10 rounded-md"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ThemeChanger />
      <Toaster />
    </ScrollableComponent>
  );
};

export default Cart;
