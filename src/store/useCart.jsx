import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  cartItems: [],
  cartTotal: 0,
  totalQuantity: 0,
};

export const useCart = create(
  persist(
    (set, get) => ({
      cartItems: initialState.cartItems,
      cartTotal: initialState.cartTotal,
      totalQuantity: initialState.totalQuantity,
      addToCart: (item) =>
        set((state) => {
          const existingItemIndex = state.cartItems.findIndex(
            (cartItem) =>
              cartItem.id === item.id &&
              cartItem.color === item.color &&
              cartItem.size === item.size
          );

          if (existingItemIndex !== -1) {
            // Item with the same id, color, and size already exists in the cart
            const updatedCartItems = [...state.cartItems];
            const updatedItem = { ...updatedCartItems[existingItemIndex] };
            const newQuantity = updatedItem.quantity + item.quantity;

            updatedItem.quantity = newQuantity;
            updatedCartItems[existingItemIndex] = updatedItem;

            return {
              cartItems: updatedCartItems,
              cartTotal: state.cartTotal + item.price * item.quantity,
              totalQuantity: newQuantity,
            };
          } else {
            return {
              cartItems: [...state.cartItems, item],
              cartTotal: state.cartTotal + item.price * item.quantity,
              totalQuantity: state.totalQuantity + item.quantity,
            };
          }
        }),
      removeFromCart: (itemId) =>
        set((state) => {
          const itemToRemoveIndex = state.cartItems.findIndex(
            (item) => item.id === itemId
          );

          if (itemToRemoveIndex === -1) return state;

          const updatedCartItems = [...state.cartItems];
          const itemToRemove = { ...updatedCartItems[itemToRemoveIndex] };

          updatedCartItems.splice(itemToRemoveIndex, 1);

          if (
            itemToRemove.color !== undefined ||
            itemToRemove.size !== undefined
          ) {
            const newCartTotal =
              state.cartTotal - itemToRemove.price * itemToRemove.quantity;

            return {
              cartItems: updatedCartItems,
              cartTotal: newCartTotal,
              totalQuantity: state.totalQuantity - itemToRemove.quantity,
            };
          }

          const newCartItems = state.cartItems.filter(
            (item) => item.id !== itemId
          );

          const newCartTotal = calculateCartTotal(newCartItems);

          return {
            cartItems: newCartItems,
            cartTotal: newCartTotal,
            totalQuantity: calculateTotalQuantity(newCartItems),
          };
        }),

      decreaseCartTotal: (amount) =>
        set((state) => ({
          cartTotal: state.cartTotal - amount,
        })),
      increaseCartTotal: (amount) =>
        set((state) => ({
          cartTotal: state.cartTotal + amount,
        })),
      isInCart: (item) => {
        const cartItems = get().cartItems;
        return cartItems.some(
          (cartItem) =>
            cartItem.id === item.id &&
            cartItem.color === item.color &&
            cartItem.size === item.size
        );
      },
      updateCartItemQuantity: (itemId, quantity) =>
        set((state) => {
          const updatedCartItems = state.cartItems.map((item) => {
            if (item.id === itemId) {
              return { ...item, quantity: item.quantity + quantity };
            }
            return item;
          });

          const cartTotal = calculateCartTotal(updatedCartItems);
          const totalQuantity = calculateTotalQuantity(updatedCartItems);

          return {
            cartItems: updatedCartItems,
            cartTotal: cartTotal,
            totalQuantity: totalQuantity,
          };
        }),
      checkMaxQuantityExceeded: (productId, maxQuantity) =>
        checkMaxQuantityExceeded(productId, maxQuantity, get().cartItems),
    }),
    {
      name: "shopping-cart",
    }
  )
);

// Get cart items
export const useCartItems = () => {
  const cartItems = useCart((state) => state.cartItems);
  return cartItems;
};

const calculateCartTotal = (cartItems) => {
  return cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
};

const calculateTotalQuantity = (cartItems) => {
  return cartItems.reduce((totalQuantity, item) => {
    return totalQuantity + item.quantity;
  }, 0);
};

const checkMaxQuantityExceeded = (productId, maxQuantity, cartItems) => {
  const totalProductQuantity = cartItems.reduce((total, item) => {
    if (item.id === productId) {
      return total + item.quantity;
    }
    return total;
  }, 0);

  return totalProductQuantity > maxQuantity;
};
