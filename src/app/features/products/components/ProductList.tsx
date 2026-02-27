"use client";
import ProductCard from "./ProductCard";
import { Search } from "lucide-react";
import PaginationControls from "@/app/components/PaginationControls";
import { Product } from "@/app/interfaces/product";
import { useProductFilters } from "@/app/hooks/useProductFilter";

/**
 * ProductList component
 *
 * Displays a list of products with filtering, sorting, search, maximum price and pagination.
 * Uses the "useProductFilters" hook to manage the state of filtering, sorting, searching, and pagination state.
 *
 * @returns The ProductList UI
 */
export default function ProductList({ products }: { products: Product[] }) {
  const {
    currentPage,
    setCurrentPage,
    selectedCategory,
    searchTerm,
    sort,
    categories,
    currentItems,
    totalPages,
    setSort,
    setSearchTerm,
    setSelectedCategory,
    handlePageChange,
    maxPrice,
    setMaxPrice,
  } = useProductFilters(products);

  return (
    <div className="w-[90%] min-h-screen xl2:px-16">
      <div className="w-full flex flex-col md:flex-row gap-10">
        <div>
          <div className="w-full sm:w-45 flex flex-col gap-2 sm:gap-4 md:mt-8">
            <div className="mb-6">
              <label htmlFor="category" className="block font-bold mb-2">
                CATEGORIES
              </label>

              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-2 py-2 rounded-full bg-gray-200"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <p className="font-bold">SORT BY</p>
              <select
                title="select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="w-full px-2 py-2 rounded-full bg-gray-200"
              >
                <option value="default">Default</option>
                <option value="high-to-low">High to low</option>
                <option value="low-to-high">Low to high</option>
                <option value="a-to-z">A to Z</option>
                <option value="z-to-a">Z to A</option>
              </select>
            </div>
            <div>
              <label htmlFor="price-range font-bold">
                <strong>Maks price </strong>($ {maxPrice}):{" "}
              </label>
              <input
                title="Price range"
                type="range"
                id="price-range"
                min="0"
                max="4000"
                step="50"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="relative w-full md:mt-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300"
            />
          </div>
          <h2 className="text-[1.5rem] text-charcoal mt-4">Products</h2>
          {currentItems.length > 0 ? (
            <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {currentItems.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ul>
          ) : (
            <p>No products found.</p>
          )}
          <div className="w-full flex flex-col items-center justify-center gap-4 my-10">
            <PaginationControls
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
