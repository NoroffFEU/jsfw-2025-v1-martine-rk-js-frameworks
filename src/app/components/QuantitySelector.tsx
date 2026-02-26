"use client";
/**
 * QuantitySelector displays buttons to increase or decrease number.
 *
 * @returns The quantity controls UI
 */
export default function QuantitySelector({
  quantity,
  setQuantity,
}: {
  quantity: number;
  setQuantity: (n: number) => void;
}) {
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    setQuantity(Math.max(1, quantity - 1));
  };

  return (
    <div className="w-fit flex items-center bg-white border border-gray-400 rounded-full">
      <button
        onClick={handleDecrement}
        disabled={quantity <= 1}
        className="px-4 py-2 cursor-pointer"
      >
        -
      </button>
      <span className="w-6 text-center font-semibold">{quantity}</span>

      <button onClick={handleIncrement} className="px-4 py-2 cursor-pointer">
        +
      </button>
    </div>
  );
}
