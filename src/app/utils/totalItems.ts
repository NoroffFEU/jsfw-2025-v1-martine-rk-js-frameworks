import useCartStore from "../stores/cartstore";

/**
 * Calculates the total quantity of items in the cart.
 *
 * @returns The total number of items in the cart.
 */
export default function TotalItems() {
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  return { totalItems };
}
