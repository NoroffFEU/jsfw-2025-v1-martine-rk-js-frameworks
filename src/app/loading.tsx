"use client";
import React from "react";

/**
 * ProductLoading component
 *
 * Display a loading state while product data is being fetched.
 * Shows a message and a spinner loader animation.
 *
 * @returns The ProductLoading UI
 */
export default function Loading() {
  return (
    <div
      role="status"
      className="flex flex-col w-full h-screen items-center justify-center gap-4"
    >
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
        <span>Loading...</span>
      </div>
      <p>Please wait a moment while we load the page.</p>
    </div>
  );
}
