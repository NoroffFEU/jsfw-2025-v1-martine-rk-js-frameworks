/**
 * PaymentMockUp component
 *
 * All input fields are disabled and the Apple Pay button is a placeholder for UI purposes only.
 *
 * @returns The payment mockup UI
 */
export default function PaymentMockUp() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold h-10 text-xl">Payment method</h2>
      <div>
        <button className="flex w-full items-center justify-center px-8 py-2 bg-charcoal text-white gap-2 rounded-full cursor-pointer border border-charcoal hover:text-charcoal hover:bg-white active:scale-95">
           Apple pay
        </button>
      </div>
      <hr></hr>
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="h-fit mb-2 font-medium text-[1rem]">
            Contact information
          </h3>

          <input
            placeholder="Email"
            disabled
            className="bg-white w-full rounded-md p-2 border border-gray-300"
          />
        </div>
        <div>
          <h3 className="h-fit font-medium mb-2 text-[1rem]">
            Shipping information
          </h3>
          <div className="flex flex-col gap-2">
            <input
              placeholder="Full name"
              disabled
              className="bg-white w-full rounded-md p-2 border border-gray-300"
            />
            <input
              placeholder="Address"
              disabled
              className="bg-white w-full rounded-md p-2 border border-gray-300"
            />
            <input
              placeholder="City"
              disabled
              className="bg-white w-full rounded-md p-2 border border-gray-300"
            />
            <input
              placeholder="Zip code"
              disabled
              className="bg-white w-full rounded-md p-2 border border-gray-300"
            />
            <input
              placeholder="Phone"
              disabled
              className="bg-white w-full rounded-md p-2 border border-gray-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
