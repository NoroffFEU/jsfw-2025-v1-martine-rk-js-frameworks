import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";
import toast from "react-hot-toast";
import { Product } from "../interfaces/product";

type CartItem = Product & { quantity: number };

export type CartStore = {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
};

const useCartStore = create<CartStore>()(
  devtools(
    persist(
      (set) => ({
        items: [],

        /**
         * Adds a product to the cart.
         * If the product already exists, increment its quantity.
         *
         * @param product - The product to add.
         * @param quantity - The quantity to add (1 as default)
         */
        addItem: (product, quantity = 1) =>
          set(
            (state) => {
              const existingItem = state.items.find(
                (item) => item.id === product.id
              );

              if (existingItem) {
                const updatedItems = state.items.map((item) =>
                  item.id === product.id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
                );

                toast.success(`Added ${quantity} × ${product.title}`);
                return { items: updatedItems };
              } else {
                const newItem = { ...product, quantity };
                const updatedItems = [...state.items, newItem];

                toast.success(`Added ${quantity} × ${product.title}`);
                return { items: updatedItems };
              }
            },
            false,
            "cart/addItem"
          ),

        /**
         * Removes a product entirely from the cart, regardless of quantity.
         *
         * @param {string} id - The ID of the product to remove.
         */
        removeItem: (id) =>
          set(
            (state) => {
              const updatedItems = state.items.filter((item) => item.id !== id);
              return { items: updatedItems };
            },
            false,
            "cart/removeItem"
          ),

        /**
         * Updates the quantity of a specific product in the cart.
         * Quantity can not go below 0.
         *
         * @param id - product ID
         * @param quantity - The new quantity.
         */
        updateQuantity: (id, quantity) =>
          set(
            (state) => {
              if (quantity <= 0) {
                return state;
              } else {
                const updatedItems = state.items.map((item) =>
                  item.id === id ? { ...item, quantity } : item
                );
                return { items: updatedItems };
              }
            },
            false,
            "cart/updateQuantity"
          ),

        /**
         * Clears all items from the cart.
         * @returns
         */
        clearCart: () => set({ items: [] }, false, "cart/clearCart"),
      }),
      {
        name: "shopping-cart-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export default useCartStore;
