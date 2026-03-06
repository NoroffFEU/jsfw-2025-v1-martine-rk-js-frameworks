"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import useCartStore from "@/app/stores/cartstore";
import QuantitySelector from "@/app/components/QuantitySelector";
import PaymentMockUp from "./components/PaymentMockUp";
import TotalItems from "@/app/utils/totalItems";

/**
 * Cart Page.
 *
 * Displays the user's shopping cart with all products currently added.
 * Displays the number of products in the cart in the h1.
 * Each product shows image, title, price, quantity selector and trash can icon.
 *
 * Users can update product quantities with the quantity selector or
 * remove a product by clicking the trash icon.
 *
 * Displays a mock-up payment section and shows subtotal, shipping and total cost.
 * The "Send order" redirects the user to "/pages/confirmation/" page
 * and clears the cart 1 second later.
 *
 * If the cart is empty, a message saying "Your cart is empty" is displayed.
 *
 * @returns The cart page
 */
export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);
  const { totalItems } = TotalItems();

  const totalPrice = items.reduce(
    (price, item) => price + item.price * item.quantity,
    0
  );

  const shipping = 4;
  const subtotal = totalPrice;
  const finalTotal = shipping + subtotal;

  const router = useRouter();
  const handleCheckout = () => {
    router.push("/pages/confirmation/");
    setTimeout(() => clearCart(), 1000);
  };

  if (items.length === 0) {
    return (
      <div className="max-w-4xl min-h-screen mx-auto p-4 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-6">Your Cart ({totalItems})</h1>
        <p className="text-gray-600">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen p-4">
      <div className="px-4 w-[98%] sm:max-w-300 mx-auto mt-20 flex flex-col items-center mb-10">
        <div className="flex w-full sm:px-20 m2:px-0">
          <h1 className="text-2xl font-bold mb-6 text-left">
            Your Cart ({totalItems})
          </h1>
        </div>

        <div className="flex w-full gap-10 flex-col lg:flex-row sm:px-20 m2:px-0">
          <div className="space-y-4 w-full">
            {items.map((product) => (
              <div
                key={product.id}
                className="flex flex-col md:flex-row items-center gap-4 border rounded-2xl p-4"
              >
                <div className="flex xs:flex-row flex-col w-full items-center gap-4">
                  <Link
                    href={`/features/products/product/${product.id}`}
                    className="cursor-pointer"
                  >
                    <Image
                      src={
                        product.image.url || "/images/No-image-available.svg"
                      }
                      alt={product.image.alt || product.title}
                      width={100}
                      height={100}
                      className="rounded-xl object-cover w-24 h-24"
                    />
                  </Link>
                  <div className="flex flex-col">
                    <h2 className="font-semibold">{product.title}</h2>
                    <p className="text-gray-500">${product.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex flex-row-reverse sm:gap-2 xs:gap-6 gap-2 w-full justify-center xs:justify-start">
                  <button
                    onClick={() => removeItem(product.id)}
                    className="text-red-600 hover:text-charcoal cursor-pointer"
                    title="remove"
                  >
                    <Trash2 size={25} />
                  </button>
                  <QuantitySelector
                    quantity={product.quantity}
                    setQuantity={(newQuantity) =>
                      updateQuantity(product.id, newQuantity)
                    }
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="lg:max-w-107 w-full flex flex-col gap-4 justify-between">
            <PaymentMockUp />
            <div className="w-full h-fit gap-2 flex xxs:flex-row flex-col items-center mt-6">
              <input
                placeholder="Promo code"
                disabled
                className="bg-white border border-gray-300 rounded-full h-10 w-full px-2"
              />
              <button className="flex w-22 items-center justify-center px-8 py-2 bg-charcoal text-white gap-2 rounded-full cursor-pointer border border-charcoal hover:text-charcoal hover:bg-white active:scale-95">
                Apply
              </button>
            </div>
            <div className="w-full bg-gray-200 gap-2 p-2 rounded-md flex flex-col justify-between text-[1rem] text-gray-600 xxs:break-normal break-all">
              <div className="w-full flex xxs:flex-row flex-col xxs:justify-between items-center">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="w-full flex xxs:flex-row flex-col xxs:justify-between items-center">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="w-full flex xxs:flex-row flex-col xxs:justify-between items-center text-xl mt-2 text-charcoal font-bold">
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="flex w-full items-center justify-center px-8 py-2 bg-charcoal text-white gap-2 rounded-full cursor-pointer border border-charcoal hover:text-charcoal hover:bg-white active:scale-95"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
