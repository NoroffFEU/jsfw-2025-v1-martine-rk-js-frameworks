import Image from "next/image";
import Link from "next/link";

/**
 * Footer component
 *
 * Displays the website footer with: logo, navigation links (sustainability, about us, contact us and terms of use) and copyright information.
 * @returns The Footer UI
 */
export default function Footer() {
  return (
    <footer className="w-full h-fit p-2 bg-footer text-charcoal text-center flex flex-col  justify-center items-center">
      <div className="max-w-400 w-full h-fit flex md:flex-row flex-col md:justify-between items-center px-10 py-16 gap-16 md:gap-0">
        <div className="w-fit h-fit">
          <Image
            src="/../logo/The-Selection.svg"
            alt="The Selection logo"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
        <div className="w-full h-fit flex gap-6 md:gap-16 lg:gap-6 md:justify-end items-center text-[1.125rem] md:flex-row flex-col break-all">
          <div className="flex flex-col lg:flex-row lg:gap:16 gap-6 lg:text-center text-left">
            <Link href="/pages/sustainability">Sustainability</Link>
            <Link href="/pages/about">About us</Link>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap:16 gap-6 lg:text-center text-left">
            <Link href="/pages/contact">Contact us</Link>
            <Link href="/pages/terms-of-use">Terms of use</Link>
          </div>
        </div>
      </div>
      <div className="w-full h-fit p-8 text-[0.75rem] break-all">
        <p>
          &copy; {new Date().getFullYear()} The Selection store. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
