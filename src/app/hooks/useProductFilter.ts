import { useMemo, useState } from "react";
import { Product } from "../interfaces/product";

/**
 * Custom hook for filtering, sorting and paginating list of produts.
 *
 * Filters products by category, search term and maximum price.
 * Sorts products by price (high-to-low, low-to-high) and by title (A-to-Z, Z-to-A).
 * Paginates the product list with 9 items per page.
 *
 * @param products - Array of products to filter, sort and paginate
 * @returns An object containing: currentPage, selectedCategory, searchTerm, sort,
 * filteredProducts, currentItems, categories, handleCategoryChange,
 * handlePageChange, setSort, setSearchTerm, resetPage, totalPages,
 * maxPrice and setMaxPrice.
 */
export function useProductFilters(products: Product[]) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All products");
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("default");
  const [maxPrice, setMaxPrice] = useState<number>(4000);

  const itemsPerPage = 9;

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const categoryMatch =
          selectedCategory === "All products" ||
          product.tags.includes(selectedCategory);

        const searchMatch =
          searchTerm.trim() === "" ||
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description?.toLowerCase().includes(searchTerm.toLowerCase());

        const priceMatch = product.price <= maxPrice;

        return categoryMatch && searchMatch && priceMatch;
      })
      .sort((a, b) => {
        if (sort === "high-to-low") {
          return Number(b.price) - Number(a.price);
        } else if (sort === "low-to-high") {
          return Number(a.price) - Number(b.price);
        } else if (sort === "a-to-z") {
          return a.title.localeCompare(b.title);
        } else if (sort === "z-to-a") {
          return b.title.localeCompare(a.title);
        } else {
          return 0;
        }
      });
  }, [products, selectedCategory, searchTerm, sort, maxPrice]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const categories = useMemo(() => {
    const allCategories = new Set(products.flatMap((p) => p.tags));
    return ["All products", ...Array.from(allCategories)];
  }, [products]);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(1);
    }
  };
  return {
    currentPage,
    setCurrentPage,
    selectedCategory,
    searchTerm,
    sort,
    filteredProducts,
    currentItems,
    categories,
    setSelectedCategory,
    handlePageChange,
    setSort,
    setSearchTerm,
    totalPages,
    maxPrice,
    setMaxPrice,
  };
}
