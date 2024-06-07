import React, { useState } from "react";
import useTruncate from "../../hooks/useTruncate";
import { useCart } from "../../store/useCart";
import { BiSolidTrash } from "react-icons/bi";
import useToastTheme from "../../hooks/useToastTheme";

const CartItem = ({ item }) => {
  const { truncateDescription } = useTruncate();
  const { showToast } = useToastTheme();
  const { removeFromCart, decreaseCartTotal, increaseCartTotal } = useCart();

  const increaseQuantity = () => {
    increaseCartTotal(item);
  };

  const decreaseQuantity = () => {
    decreaseCartTotal(item);
  };

  return (
    <div className="w-full bg-white dark:bg-dark rounded-md p-4 shadow-sm mb-3">
      <div className="flex flex-col justify-between items-start gap-2 w-full">
        <div className="flex gap-5 items-start w-full">
          <img
            src={item.image}
            alt="Product"
            className="w-20 object-cover rounded-md"
          />
          <div className="flex-1">
            <h1 className="text-sm font-semibold dark:text-slate-200 leading-tight mb-1">
              {truncateDescription(item.title, 50)}
            </h1>
            <p className="text-xs dark:text-slate-200">
              <span className="text-cyan-500 font-semibold">Color:</span>{" "}
              {item.color}
            </p>
            <p className="text-xs dark:text-slate-200">
              <span className="text-cyan-500 font-semibold">Size:</span>{" "}
              {item.size}
            </p>
            <p className="text-xs dark:text-slate-200">
              <span className="text-cyan-500 font-semibold">Quantity:</span>{" "}
              {item.quantity} Items
            </p>
            <p className="text-xl tracking-tight font-semibold text-cyan-500 dark:text-slate-200">
              KES {item.price}
            </p>
            <p className="text-sm leading-none font-normal text-gray-500 dark:text-gray-400 line-through">
              Ksh {item.discount}
            </p>
          </div>
        </div>

        {/* Bottom Section  */}
        <div className="flex justify-between items-center w-full">
          <div className="flex-1">
            <button
              onClick={() => {
                removeFromCart(item.id);
                showToast("success", "Item removed from cart.");
              }}
              className="text-red-500 text-sm flex bg-red-5 items-center space-x-2"
            >
              <BiSolidTrash className="inline" /> <span>Remove</span>
            </button>
          </div>

          <div className="flex-1 w-full">
            {/* Quantity Buttons */}
            <div className="flex justify-between items-center">
              <button
                onClick={decreaseQuantity}
                className="btn bg-slate-200 text-primary dark:bg-white dark:text-darken dark:hover:bg-cyan-500 hover:bg-secondary hover:text-white w-8 md:w-10 h-8 md:h-10 rounded-md"
              >
                -
              </button>
              <span className="text-sm md:text-lg font-semibold text-primary dark:text-slate-200">
                {item.quantity}
              </span>
              <button
                onClick={increaseQuantity}
                className="btn bg-slate-200 text-primary dark:bg-white dark:text-darken dark:hover:bg-cyan-500 hover:bg-secondary hover:text-white w-8 md:w-10 h-8 md:h-10 rounded-md"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
