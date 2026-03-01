"use client";
import { useRouter } from "next/navigation";
import { CircleArrowLeft } from "lucide-react";

/**
 * BackButton component.
 *
 * A button that navigates to the previous page.
 *
 * @returns A button UI with back arrow icon
 */
export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      type="button"
      aria-label="Go back"
      title="Go back"
      onClick={handleBack}
      className="flex text-black cursor-pointer rounded-full hover:bg-gray-300 active:scale-95"
    >
      <CircleArrowLeft size={30} />
    </button>
  );
}
