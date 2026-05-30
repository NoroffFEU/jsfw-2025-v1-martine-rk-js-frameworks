import React from "react";
import Image from "next/image";
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
    <div className="flex flex-col min-h-screen items-center w-full">
      <div className="relative w-full h-screen flex items-center justify-center px-4">
        <Image
          src="/images/banner-image.jpg"
          alt="Banner"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 flex flex-col items-center gap-6 text-center">
          <h1 className="font-bold text-banner text-white drop-shadow-lg leading-tight">
            All your essentials,
            <br /> in one place.
          </h1>
          <a
            href="#products"
            className="px-8 py-3 bg-white text-gray-900 text-sm font-semibold rounded-full hover:bg-gray-100 active:scale-95 transition-all duration-200"
          >
            Shop now
          </a>
        </div>
      </div>

      <div
        id="products"
        className="w-full flex justify-center mt-10 scroll-mt-14"
      >
        <Products />
      </div>
    </div>
  );
}
