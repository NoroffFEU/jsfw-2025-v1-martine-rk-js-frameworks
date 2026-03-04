import { CircleCheck } from "lucide-react";
import Link from "next/link";

/**
 * Confirmation page.
 *
 * Displays a CircleCheck icon, a thank you message and button leading back to the homepage.
 *
 * @returns The confirmation page
 */
export default function ConfirmationPage() {
  return (
    <div className="w-full  min-h-screen flex flex-col px-4 items-center justify-center gap-10">
      <div className="flex flex-col  max-w-120 items-center text-center gap-10">
        <CircleCheck size={60} />
        <h1 className="text-[2rem] font-bold break-all xs:break-normal">
          Thank you for your purchase!
        </h1>
        <p className="w-full text-[1.2rem] break-all xs:break-normal">
          Your order has been confirmed and is being prepared with care for
          shipment.
        </p>
        <Link
          href="/"
          className="flex w-fit items-center justify-center px-10 py-2 bg-charcoal text-white gap-2 rounded-full cursor-pointer border border-charcoal hover:bg-white hover:text-charcoal active:scale-95"
        >
          Go back to home
        </Link>
      </div>
    </div>
  );
}
