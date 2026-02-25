"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

/**
 * ContactForm component
 *
 * A simple contact form that lets users send a message.
 * The form gets the user's fullName, email, subject and message.
 * Validates input fields to ensure they are all filled, email is valid and the message is at least 10 characters.
 * If a field is incorrect a toast message will show.
 *
 * When submitting it sends the form using EmailJS and shows a toast message for success.
 *
 * @returns The contact form UI.
 */

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fullName = (
      form.current?.elements.namedItem("full_name") as HTMLInputElement
    ).value.trim();
    const email = (
      form.current?.elements.namedItem("email") as HTMLInputElement
    ).value.trim();
    const subject = (
      form.current?.elements.namedItem("subject") as HTMLInputElement
    ).value.trim();
    const message = (
      form.current?.elements.namedItem("message") as HTMLTextAreaElement
    ).value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!fullName || !email || !subject || !message) {
      toast.error("All fields are required.");
      return;
    } else if (fullName.length < 3) {
      toast.error("Full name must be at least 3 characters.");
      return;
    } else if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email.");
      return;
    } else if (subject.length < 3) {
      toast.error("Subject must be at least 3 characters.");
      return;
    } else if (message.length < 10) {
      toast.error("Message must be at least 10 characters.");
      return;
    }

    emailjs
      .sendForm(
        "service_w8y8hkc",
        "template_qkufb7f",
        form.current as HTMLFormElement,
        {
          publicKey: "r3c1n7YOfT9LJU1zZ",
        }
      )
      .then(
        () => {
          toast.success("Message sent successfully.");
          form.current?.reset();
        },
        (error) => {
          toast.error(`Failed to send message. Please try again. ${error}`);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col w-full max-w-100 min-h-100 bg-white text-[#22223b] p-4 sm:p-8 rounded-2xl gap-2 border border-gray-300 shadow-xl"
    >
      <h2 className="text-center font-bold text-[1.375rem]">
        Send us a message
      </h2>

      <label>
        Full Name<span className="text-red-700">*</span>
      </label>
      <input
        type="text"
        name="full_name"
        className="bg-white rounded-md p-2 border border-gray-500"
        title="Full name"
        placeholder="Full name"
        required
      />
      <label>
        Email<span className="text-red-700">*</span>
      </label>
      <input
        type="text"
        name="email"
        className="bg-white rounded-md p-2 border border-gray-500"
        title="email"
        placeholder="Email"
        required
      />
      <label>
        Subject<span className="text-red-700">*</span>
      </label>
      <input
        type="text"
        name="subject"
        className="bg-white rounded-md p-2 border border-gray-500"
        title="subject"
        placeholder="Subject"
        required
      />
      <label>
        Message<span className="text-red-700">*</span>
      </label>
      <textarea
        name="message"
        className="bg-white rounded-md p-2 border border-gray-500"
        title="message"
        rows={4}
        required
      />
      <button
        type="submit"
        className="py-2 px-4 bg-charcoal text-white rounded-full mt-6 hover:bg-white hover:text-charcoal border border-charcoal cursor-pointer"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
