"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, Percent, ShoppingCart } from "lucide-react";
import { Product } from "@/app/interfaces/product";

/**
 * ProductCard component displays single products with image, price, rating, tags, and a "add to cart" button.
 * Displays "% Discount" on top right of the image if the product has a discount.
 * Displays current price and before price in lighter gray with strike through.
 *
 * @returns The product card UI
 */
export default function ProductCard({ product }: { product: Product }) {
  const hasDiscount =
    product.discountedPrice != null && product.discountedPrice < product.price;

  return (
    <li className="w-full p-4 flex flex-col gap-3">
      <Link href={`/features/products/product/${product.id}`}>
        <div className="relative w-full aspect-square">
          <Image
            src={product.image.url || "/images/No-image-available.svg"}
            alt={product.image.alt || product.title}
            fill
            className="object-cover rounded-3xl"
            sizes="(max-width: 768px) 100vw, 33vw"
          />

          {hasDiscount && (
            <p className="absolute text-[0.8rem] md:text-[1rem] top-4 right-4 bg-red-700 px-4 py-2 flex items-center gap-2 text-white rounded-full">
              <Percent /> Discount
            </p>
          )}
        </div>
      </Link>
      <div className="grid gap-4">
        <div className="flex justify-between">
          <h2 className="font-bold text-2xl">{product.title}</h2>
        </div>

        <div className="flex items-center gap-1">
          {hasDiscount ? (
            <>
              <p className="text-[1.125rem]">${product.discountedPrice}</p>
              <del className="text-gray-500 text-[0.875rem]">
                ${product.price}
              </del>
            </>
          ) : (
            <p className="text-[1.125rem]">${product.price}</p>
          )}
        </div>

        <p className="flex flex-wrap gap-2">
          {product.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-black px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </p>

        <p className="flex items-center gap-2">
          <Star fill="#e7c936" className="text-[#e7c936]" />
          {product.rating}
        </p>
      </div>

      <div className="flex w-full flex-col justify-between gap-2">
        <button
          type="button"
          aria-label="Add to cart"
          className="flex w-full items-center justify-center px-8 py-2 bg-charcoal text-white gap-2 rounded-full cursor-pointer border border-charcoal hover:bg-white hover:text-charcoal active:scale-95"
        >
          <ShoppingCart />
          Add to cart
        </button>
      </div>
    </li>
  );
}
