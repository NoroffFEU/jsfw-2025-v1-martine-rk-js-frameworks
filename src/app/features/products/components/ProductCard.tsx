"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, BadgePercent } from "lucide-react";
import { Product } from "@/app/interfaces/product";
import QuantityAndAddToCartButtons from "@/app/components/QuantityAndAddToCart";
import getDiscountInfo from "@/app/utils/getDiscountInfo";

/**
 * ProductCard component displays single products with image, price, rating, quantity selector and a "Add to cart" button.
 * Displays "%" icon and discount percentage on the top right of the product image, if the product has an discount.
 * Displays current price and before price in lighter gray with strike through.
 *
 * @returns The product card UI
 */
export default function ProductCard({ product }: { product: Product }) {
  const { hasDiscount, discountPercentage } = getDiscountInfo(product);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <li className="group w-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
      <Link
        href={`/features/products/product/${product.id}`}
        onClick={scrollToTop}
        className="block relative w-full aspect-square overflow-hidden bg-gray-50"
      >
        <Image
          src={product.image.url || "/images/No-image-available.svg"}
          alt={product.image.alt || product.title}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {hasDiscount && (
          <span className="absolute top-3 right-3 bg-red-600 text-white text-sm font-semibold tracking-wide px-2.5 py-1 rounded-full shadow">
            save {discountPercentage}%
          </span>
        )}
      </Link>

      <div className="flex flex-col gap-3 p-4 flex-1">
        <Link
          href={`/features/products/product/${product.id}`}
          onClick={scrollToTop}
        >
          <h2 className="font-semibold text-gray-900 text-base leading-snug line-clamp-2 hover:text-gray-600 transition-colors">
            {product.title}
          </h2>
        </Link>

        <div className="flex items-center gap-1.5">
          <Star size={14} fill="#FBBF24" className="text-amber-400 shrink-0" />
          <span className="text-sm font-medium text-gray-800">
            {product.rating}
          </span>
          <span className="text-sm text-gray-400">
            ({product.reviews.length})
          </span>
        </div>

        <div className="flex items-baseline gap-2">
          {hasDiscount ? (
            <>
              <span className="text-lg font-bold text-gray-900">
                ${product.discountedPrice}
              </span>
              <del className="text-gray-500 text-[0.875rem]">
                ${product.price}
              </del>
            </>
          ) : (
            <span className="text-lg font-bold text-gray-900">
              ${product.price}
            </span>
          )}
        </div>

        <div className="mt-auto">
          <QuantityAndAddToCartButtons product={product} />
        </div>
      </div>
    </li>
  );
}
