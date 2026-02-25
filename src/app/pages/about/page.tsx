import React from "react";
import Image from "next/image";

/**
 * About us page
 *
 * Displays title, our history with Lorem Ipsum generated placeholder text and logo signature.
 *
 * @returns The About us page
 */
export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center pt-26 md:px-20 break-all md:break-normal px-4">
      <div className="flex flex-col max-w-180 w-full gap-6">
        <h1 className="text-[1.75rem] text-center">About us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere.{" "}
        </p>

        <div>
          <h2 className="text-[1.75rem]">Our history</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
            Iaculis massa nisl malesuada lacinia integer nunc posuere.
          </p>
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
