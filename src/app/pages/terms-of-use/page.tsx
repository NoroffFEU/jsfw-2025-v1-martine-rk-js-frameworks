import React from "react";
import Image from "next/image";

/**
 * Terms of use page.
 *
 * Shows title, a list with Lorem Ipsum generated placeholder text and logo signature.
 *
 * @returns The Terms of use page
 */
export default function TermsOfUse() {
  return (
    <div className="min-h-screen flex flex-col items-center pt-26 md:px-20 break-all sm:break-normal px-4">
      <div className="flex flex-col max-w-180 w-full gap-6">
        <h1 className="text-[1.75rem] text-center">Terms of use</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. Pulvinar vivamus
          fringilla lacus nec metus bibendum egestas.
        </p>

        <div>
          <ul className="list-decimal w-full px-8 md:px-16 flex flex-col gap-4">
            <li>
              Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
              hendrerit semper vel class aptent taciti sociosqu. Ad litora
              torquent per conubia nostra inceptos himenaeos.
            </li>
            <li>
              Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
              hendrerit semper vel class aptent taciti sociosqu. Ad litora
              torquent per conubia nostra inceptos himenaeos.
            </li>
            <li>
              Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
              hendrerit semper vel class aptent taciti sociosqu. Ad litora
              torquent per conubia nostra inceptos himenaeos.
            </li>
          </ul>
        </div>
        <div className="w-full flex items-center justify-center mt-20 md:mt-30 mb-20">
          <Image
            src="/../logo/logo-with-signature.svg"
            alt="The Selection logo signature"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
