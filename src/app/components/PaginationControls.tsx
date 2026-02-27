import React from "react";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { PaginationProps } from "@/app/interfaces/pagination";

/**
 * PaginationControls component
 *
 * Renders pagination buttons.
 * Show previous/next arrows and numbered buttons for each page.
 * Highlights the current page with bold font weight.
 *
 * @returns The pagination controls UI
 */

export default function PaginationControls({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center gap-2">
      <button
        title="previous"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <CircleChevronLeft className="w-10 h-10 cursor-pointer hover:text-gray-400" />
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          style={{
            fontWeight: currentPage === number ? "bold" : "normal",
            margin: "0 5px",
            fontSize: "text-[1rem] md:text-[1.2rem]",
            cursor: "pointer",
          }}
        >
          {number}
        </button>
      ))}
      <button
        title="next"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <CircleChevronRight className="w-10 h-10 cursor-pointer hover:text-gray-400" />
      </button>
    </div>
  );
}
