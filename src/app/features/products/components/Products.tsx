import ProductList from "./ProductList";
import { Product, ApiResponse } from "@/app/interfaces/product";

/**
 * Products component
 *
 * Fetches products from the "Online Shop" API with caching and revalidation
 * (revalidates the data at most once every 3600 seconds (1 hour)).
 *
 * Passes the fetched products to the ProductList component.
 *
 * @returns The rendered ProductList component with the fetched products.
 */
export default async function Products() {
  try {
    const response = await fetch(`https://v2.api.noroff.dev/online-shop`, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const result: ApiResponse = await response.json();
    const products: Product[] = result.data;

    return <ProductList products={products} />;
  } catch {
    return (
      <div className="flex pb-10 text-red-700">
        <p>Could not load the products. Try again later.</p>
      </div>
    );
  }
}
