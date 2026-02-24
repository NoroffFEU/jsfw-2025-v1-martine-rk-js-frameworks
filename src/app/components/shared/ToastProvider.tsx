"use client";
import { Toaster } from "react-hot-toast";

/**
 * ToastProvider sets up a toast notification system for the website.
 *
 * @returns A toaster componet that shows notifications in the top right corner.
 */
export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      containerStyle={{
        top: 80,
        left: 40,
      }}
    />
  );
}
