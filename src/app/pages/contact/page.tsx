import React from "react";
import Image from "next/image";
import ContactForm from "@/app/components/ContactFrom";

/**
 * Contact us page.
 *
 * Shows title, contact information, opening hours, the ContactForm component and logo signature.
 *
 * @returns The Contact us page
 */
export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center pt-26 md:px-20 break-all md:break-normal px-4">
      <div className="flex flex-col max-w-180 w-full gap-6">
        <h1 className="text-[1.75rem] text-center">Contact us</h1>
        <div className="w-full text-center flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p>Email: theselection@gmail.com</p>
            <p> Phone: 12 34 56 67 </p>
          </div>
          <div>
            <p className="font-bold mb-4 text-[1.125rem]"> Opening hours:</p>
            <div className="flex flex-col gap-4">
              <p> Mon-Fri: 10-17 </p>
              <p> Sat-Sun: closed</p>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center mt-10">
          <ContactForm />
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
