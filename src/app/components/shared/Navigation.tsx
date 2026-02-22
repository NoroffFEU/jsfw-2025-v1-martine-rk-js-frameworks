"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import React, { useState } from "react";
import { Menu } from "lucide-react";

/**
 * Navigation component
 *
 * Displays the website navigation bar with: logo, navigation links (home and cart)
 *
 * @returns The Navigation UI
 */
export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 z-50 bg-white w-full h-14.5 flex justify-between py-2 px-4 shadow border-b border-gray-200 items-center">
        <div className="w-full"></div>
        <div className="w-fit">
          <Link href="/">
            <Image
              src="/../logo/The-Selection.svg"
              alt="The Selection logo"
              width={400}
              height={400}
              className="object-cover"
            />
          </Link>
        </div>
        <div className="md:hidden w-full flex justify-end">
          <button
            title="hamburger menu"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <Menu />
          </button>
        </div>
        <div
          className={`${isOpen ? "flex" : "hidden"} w-full md:flex gap-2 justify-end md:flex-row flex-col z-50 bg-white md:border-0 border-b border-t border-b-gray-300 border-t-gray-300 md:relative absolute translate-y-18 -translate-x-4 md:translate-y-0 md:translate-x-0 md:text-left text-center`}
        >
          <Link
            className={`${pathname === "/" ? "active" : ""} hover:text-primary hover:bg-secondary hover:rounded-full px-4 py-2`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`${pathname === "/pages/cart" ? "active" : ""} hover:text-primary hover:bg-secondary hover:rounded-full px-4 py-2`}
            href="/pages/cart"
          >
            Cart (0)
          </Link>
        </div>
      </nav>
    </>
  );
}
