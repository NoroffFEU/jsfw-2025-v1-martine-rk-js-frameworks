import React from "react";
import Image from "next/image";
import { Product } from "@/app/interfaces/product";
import { Star, BadgePercent } from "lucide-react";
import BackButton from "@/app/components/BackButton";
import QuantityAndAddToCartButtons from "@/app/components/QuantityAndAddToCart";
import getDiscountInfo from "../../../utils/getDiscountInfo";
/**
 * SinglePageProduct component
 *
 * Displays image, title, ratings, price, description, tags, quantity selector and "Add to cart" button, reviews.
 * Calculates and displays "%" icon and discount percentage on the top right of the product image, if the product has an discount.
 * Displays current price and before price in lighter gray with strike through.
 *
 * @returns The single page product UI
 */
export default function SinglePageProduct({ product }: { product: Product }) {
  const { hasDiscount, discountPercentage } = getDiscountInfo(product);

  return (
    <div className="w-full max-w-150 lg:max-w-300 flex flex-col items-center">
      <div className="w-full h-fit flex items-center mb-6 mt-2">
        <BackButton />
      </div>
      <div className="w-full h-fit flex flex-col lg:flex-row justify-between gap-6">
        <div className="relative w-full aspect-square ">
          <Image
            src={product.image.url || "/images/No-image-available.svg"}
            alt={product.image.alt || product.title}
            className="w-full object-contain rounded-md"
            loading="lazy"
            height={400}
            width={600}
          />

          {hasDiscount && (
            <p
              className="absolute top-2 right-2 bg-red-700 p-2 flex items-center gap-1 text-white rounded-full"
              title="Discount"
            >
              <BadgePercent size={20} />
              <strong> {discountPercentage}%</strong>
            </p>
          )}
        </div>

        <div className="w-full h-fit gap-10 lg:gap-0 lg:h-150 flex flex-col justify-between py-10">
          <div className="flex flex-col">
            <div className="w-full flex justify-between items-center">
              <div className="w-full">
                <h1 className="font-bold text-2xl">{product.title}</h1>
              </div>
              <div className="w-full flex gap-2 items-center justify-end">
                <p className="flex items-center gap-2">
                  <Star fill="#e7c936" className="text-[#e7c936]" />
                  {product.rating}
                </p>
                <p className="text-gray-500 text-[0.875rem]">
                  ({product.reviews.length})
                </p>
              </div>
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
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="font-bold">DESCRIPTION</h2>
              <p>{product.description}</p>
            </div>
            <p className="flex flex-wrap gap-2">
              {Array.isArray(product.tags)
                ? product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-black px-2 py-1 rounded-full "
                    >
                      {tag}
                    </span>
                  ))
                : product.tags}
            </p>
          </div>

          <div className="flex xs:flex-row flex-col w-full justify-between gap-2">
            <QuantityAndAddToCartButtons product={product} />
          </div>
        </div>
      </div>
      <div className="w-full max-w-150 h-fit mt-6 mb-10 flex flex-col gap-4">
        <p className="font-bold">REVIEWS</p>
        <div className="flex flex-col gap-2">
          {Array.isArray(product.reviews) && product.reviews.length > 0 ? (
            product.reviews.map((review) => (
              <span
                key={review.id}
                className="bg-white text-black px-2 py-1 rounded-md border border-gray-400 text-center"
              >
                <span className="flex w-full justify-center gap-2">
                  <Star fill="#e7c936" className="text-[#e7c936]" />
                  {review.rating}
                </span>
                <div className="flex-col flex w-full">
                  <span>{review.description}</span>{" "}
                  <span>- {review.username}</span>
                </div>
              </span>
            ))
          ) : (
            <span className="bg-gray-200 px-2 py-1 rounded-full">
              No reviews
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
