"use client";
import React, { useState } from "react";
import { Product } from "@/app/interfaces/product";
import { ShoppingCart } from "lucide-react";
import useCartStore from "@/app//stores/cartstore";
import QuantitySelector from "@/app/components/QuantitySelector";

/**
 * QuantityAndAddToCartButtons component
 *
 * Display quantity selector and "Add to cart" button for a product.
 * Manages the selected quantity and adds the product to the cart when clicked.
 *
 * @returns The UI for selecting quantity and add product to cart
 */
export default function QuantityAndAddToCartButtons({
  product,
}: {
  product: Product;
}) {
  const addToCart = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col gap-2">
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <button
        type="button"
        aria-label="Add to cart"
        onClick={() => addToCart(product, quantity)}
        className="flex w-full items-center justify-center px-8 py-2 bg-charcoal text-white gap-2 rounded-full cursor-pointer border border-charcoal hover:bg-white hover:text-charcoal active:scale-95"
      >
        <ShoppingCart />
        Add to cart
      </button>
    </div>
  );
}
