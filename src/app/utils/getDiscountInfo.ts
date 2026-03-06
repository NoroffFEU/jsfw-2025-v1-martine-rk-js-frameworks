import { Product } from "@/app/interfaces/product";

/**
 * Calculates the discount information for a product.
 *
 * @returns hasDiscount and discountPercentage
 */
export default function getDiscountInfo(product: Product) {
  const hasDiscount =
    product.discountedPrice != null && product.discountedPrice < product.price;

  const discountPercentage =
    product.discountedPrice && product.price > 0
      ? (
          ((product.price - product.discountedPrice) / product.price) *
          100
        ).toFixed(0)
      : 0;

  return { hasDiscount, discountPercentage };
}
