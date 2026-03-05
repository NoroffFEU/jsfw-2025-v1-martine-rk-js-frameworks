import React from "react";
import { ApiSingleProductResponse } from "@/app/interfaces/product";
import SinglePageProduct from "../../components/SinglePageProuductCard";

/**
 * SingleProductPage
 *
 * Fetches a single product from the "Online Shop" API using the product ID from the route params.
 * Caches the data and revalidate
 * (revalidates the data at most once every 3600 seconds (1 hour)).
 *
 * Passes the fetched product to the SinglePageProduct component.
 *
 * @returns The rendered SinglePageProduct component with the fetched product.
 */
export default async function SingleProductPage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const { id: productId } = await params;

    const response = await fetch(
      `https://v2.api.noroff.dev/online-shop/${productId}`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      if (response.status === 404) {
        return (
          <div className="flex h-screen items-center justify-center text-red-700">
            <p>Could not find product with id: {productId}.</p>
          </div>
        );
      }
      throw new Error("Failed to fetch product");
    }

    const result: ApiSingleProductResponse = await response.json();
    const product = result.data;

    return (
      <div className="min-h-screen w-full flex flex-col pt-20 px-4 xs:px-6 break-all sm:break-normal items-center">
        <SinglePageProduct product={product} />
      </div>
    );
  } catch {
    return (
      <div className="flex h-screen items-center justify-center text-red-700">
        <p>Could not load the product. Try again later.</p>
      </div>
    );
  }
}
