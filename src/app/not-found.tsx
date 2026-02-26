import React from "react";
import Link from "next/link";

/* Used Tailwind CSS FlowBite example, and changed it to fit better with the online shop. 
Link: https://flowbite.com/blocks/marketing/404/ */

/**
 * NotFound component
 *
 * Renders a 404 page when the route is not found.
 * Displays a "404" heading, a message and "Back to Homepage" link.
 *
 * @returns The not-found UI
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary text-charcoal">
      <div className="mx-auto max-w-screen-sm text-center px-2 gap-4 flex flex-col items-center">
        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl ">
          404
        </h1>
        <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl ">
          Something&apos;s missing.
        </p>
        <p className="mb-4 text-lg font-light ">
          Sorry, we can&apos;t find that page. You&apos;ll find lots to explore
          on the home page.{" "}
        </p>
        <Link
          href="/"
          className="flex items-center justify-center px-12 py-2 bg-charcoal text-white gap-2 rounded-full cursor-pointer border border-charcoal hover:bg-white hover:text-charcoal active:scale-95"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
