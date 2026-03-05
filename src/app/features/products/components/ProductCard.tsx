"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, BadgePercent } from "lucide-react";
import { Product } from "@/app/interfaces/product";
import QuantityAndAddToCartButtons from "@/app/components/QuantityAndAddToCart";

/**
 * ProductCard component displays single products with image, price, rating, tags, and a "add to cart" button.
 * Calculates and displays "%" icon and discount percentage on the top right of the product image, if the product has an discount.
 * Displays current price and before price in lighter gray with strike through.
 *
 * @returns The product card UI
 */
export default function ProductCard({ product }: { product: Product }) {
  const hasDiscount =
    product.discountedPrice != null && product.discountedPrice < product.price;

  const discountPercentage =
    product.discountedPrice && product.price > 0
      ? (
          ((product.price - product.discountedPrice) / product.price) *
          100
        ).toFixed(0)
      : 0;

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
            <p
              className="absolute top-2 right-2 bg-red-700 p-2 flex items-center gap-2 text-white rounded-full"
              title="Discount"
            >
              <BadgePercent size={20} />
              <strong> {discountPercentage}%</strong>
            </p>
          )}
        </div>
      </Link>
      <div className="grid gap-4">
        <div className="flex justify-between">
          <h2 className="font-bold text-2xl">{product.title}</h2>
        </div>

        <div className="flex xxs:flex-row flex-col xxs:items-center gap-1">
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

        <div className="flex w-full gap-2 items-center">
          <p className="flex items-center gap-2">
            <Star fill="#e7c936" className="text-[#e7c936]" />
            {product.rating}
          </p>
          <p className="text-gray-500 text-[0.875rem]">
            ({product.reviews.length})
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col justify-between gap-2">
        <QuantityAndAddToCartButtons product={product} />
      </div>
    </li>
  );
}
