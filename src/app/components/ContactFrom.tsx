"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

/**
 * ContactForm component
 *
 * A simple contact form that lets users send a message.
 * The form gets the user's name, email, title and message.
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

    const name = (
      form.current?.elements.namedItem("name") as HTMLInputElement
    ).value.trim();
    const email = (
      form.current?.elements.namedItem("email") as HTMLInputElement
    ).value.trim();
    const title = (
      form.current?.elements.namedItem("title") as HTMLInputElement
    ).value.trim();
    const message = (
      form.current?.elements.namedItem("message") as HTMLTextAreaElement
    ).value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !title || !message) {
      toast.error("All fields are required.");
      return;
    } else if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email.");
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
        Name<span className="text-red-700">*</span>
      </label>
      <input
        type="text"
        name="name"
        className="bg-white rounded-md p-2 border border-gray-500"
        title="name"
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
        required
      />
      <label>
        Title<span className="text-red-700">*</span>
      </label>
      <input
        type="text"
        name="title"
        className="bg-white rounded-md p-2 border border-gray-500"
        title="title"
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
