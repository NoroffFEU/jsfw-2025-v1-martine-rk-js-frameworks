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
        <div className="w-full sm:w-48 shrink-0">
          <div className="flex flex-col gap-5 md:mt-8">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="category"
                className="text-sm font-semibold tracking-widest uppercase text-gray-800"
              >
                Category
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-gray-100 text-sm text-gray-800 outline-none cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="sort"
                className="text-sm font-semibold tracking-widest uppercase text-gray-800"
              >
                Sort by
              </label>
              <select
                id="sort"
                title="select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-gray-100 text-sm text-gray-800 outline-none cursor-pointer"
              >
                <option value="default">Default</option>
                <option value="high-to-low">High to low</option>
                <option value="low-to-high">Low to high</option>
                <option value="a-to-z">A to Z</option>
                <option value="z-to-a">Z to A</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="price-range"
                  className="text-sm font-semibold tracking-widest uppercase text-gray-800"
                >
                  Max price
                </label>
                <span className="text-sm font-semibold text-gray-800">
                  ${maxPrice}
                </span>
              </div>
              <input
                title="Price range"
                type="range"
                id="price-range"
                min="0"
                max="4000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full cursor-pointer accent-black"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>$0</span>
                <span>$4,000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="relative w-full md:mt-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-9 pr-10 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setCurrentPage(1);
                }}
                className="absolute hover:cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-800 hover:text-gray-500 transition-colors"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
          <div>
            <h2 className="text-[1.5rem] text-black mt-4">Products</h2>
            <p>
              &#40;Showing page {currentPage} of {totalPages}&#41;
            </p>
          </div>
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
