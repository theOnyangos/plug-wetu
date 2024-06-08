import { EmptyCart, CartItem } from "@/components";

const CartComponent = ({ cartTotal, items }) => {
  return (
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
  );
};

export default CartComponent;
