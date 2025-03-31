"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Your message has been sent!");
  };

  return (
    <section
      id="contact"
      className="w-full h-screen bg-transparent flex flex-col items-center justify-center p-8"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full md:w-1/2 p-6"
        >
          <h2 className="text-[#ffffff] text-3xl font-bold mb-4">Get in Touch</h2>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="p-2 mb-4 bg-transparent text-[#ffffff] focus:outline-none focus:border-[#0b3c0a] transition-all border-b-[1px] border-[#072707]"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="p-2 mb-4 bg-transparent text-[#ffffff] focus:outline-none focus:border-[#0b3c0a] transition-all border-b-[1px] border-[#072707]"
            placeholder="Last Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 mb-4 bg-transparent text-[#ffffff] focus:outline-none focus:border-[#0b3c0a] transition-all border-b-[1px] border-[#072707]"
            placeholder="Email"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="p-2 mb-4 bg-transparent text-[#ffffff] focus:outline-none focus:border-[#0b3c0a] transition-all border-b-[1px] border-[#072707]"
            placeholder="Phone Number"
            required
          />
          <button
            type="submit"
            className="bg-[#072707] text-white py-2 px-4 hover:bg-[#0b3c0a] transition-all"
          >
            Send
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col w-full md:w-1/2 p-6">
          <h2 className="text-[#ffffff] text-3xl font-bold mb-2">Contact Us</h2>
          <p className="text-[#ffffff] text-sm mb-4">
            We are here to assist you with any inquiries. Reach out to us, and we’ll get back to you promptly.
          </p>
          <p className="text-[#ffffff] text-sm font-bold mb-4">Phone: +46 123 456 789</p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent"
            >
              <img
                src="./facebook-icon.png"
                alt="Facebook"
                className="w-10 h-10"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent"
            >
              <img
                src="../twitter-icon.png"
                alt="Twitter"
                className="w-10 h-10"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent"
            >
              <img
                src="/instagram-icon.png"
                alt="Instagram"
                className="w-10 h-10"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}