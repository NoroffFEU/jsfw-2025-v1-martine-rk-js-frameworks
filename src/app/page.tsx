import React from "react";
import Products from "./features/products/components/Products";

/**
 * Home page
 *
 * Displays a banner with text.
 * Renders the Products component to display a list of products with filtering and sorting.
 *
 * @returns The home page
 */
export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center w-full gap-10">
      <div className="w-full sm:min-h-screen max-h-100 bg-[url(/images/banner-image.jpg)] bg-cover bg-center h-screen flex items-center justify-center px-2">
        <h1 className="sm:-translate-y-40 text-center break-all font-bold text-banner text-primary text-shadow-gray-800 text-shadow-lg/30">
          All your essentials,
          <br /> in one place.
        </h1>
      </div>
      <Products />
    </div>
  );
}
