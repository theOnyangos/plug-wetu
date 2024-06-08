import React from "react";
import useScreenSize from "../../hooks/useScreenSize";
import { BiSolidPhoneCall } from "react-icons/bi";

const CartButtons = ({ items, cartTotal }) => {
  const isMobile = useScreenSize();

  return (
    <div>
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
    </div>
  );
};

export default CartButtons;
