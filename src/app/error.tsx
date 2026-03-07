"use client";

/**
 * DIsplays "Something went wrong" and a "try again" button to
 * attempt to recover by to re-rendering the segment.
 *
 * @returns The error UI component
 */
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="min-h-screen gap-4 flex flex-col items-center justify-center bg-primary text-charcoal">
      <h2 className="mb-4 text-3xl tracking-tight font-bold md:text-4xl">
        Something went wrong!
      </h2>
      <button
        type="button"
        aria-label="Try again"
        onClick={() => reset()}
        className="flex w-fit items-center justify-center px-8 py-2 bg-charcoal text-white gap-2 rounded-full cursor-pointer border border-charcoal hover:bg-white hover:text-charcoal active:scale-95"
      >
        Try again
      </button>
    </div>
  );
}
