"use client"

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoPersonOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useRouter } from "next/navigation";

function Form({ label_bg = "bg-bg_c", headingHidden = false }) {
  const form = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useRouter();

  // Function to validate the form fields
  const validateForm = () => {
    let validationErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    if (!formData.name.trim()) validationErrors.name = "Name is required.";
    if (formData.email.trim()) {
      if (!emailPattern.test(formData.email))
        validationErrors.email = "Please enter a valid email address.";
    }
    if (!phonePattern.test(formData.phone))
      validationErrors.phone = "Please enter a valid 10-digit phone number.";

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Stop if the form is invalid
    setLoading(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_ACCOUNT_ID
      )
      .then(
        (result) => {

          setLoading(false);
          form.current.reset();
          navigate.push("/thank-you");
        },
        (error) => {
          setLoading(false);

          alert("Please try again");
        }
      )
      .catch(() => {
        setLoading(false);
      });
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error on input change
  };

  return (
    <div>
      {!headingHidden && (
        <>
          <div className="text-2xl pt-4 lg:pt-0 lg:text-4xl font-secondary_font font-bold ">
            <span className="text-blue_c"> Reach & </span>Get In Touch With Us !
          </div>
          <p className="pt-1 text-sm  text-light_black_c pb-5">
            Your data will not be published. Required fields are marked*
          </p>
        </>
      )}
      <form ref={form} onSubmit={handleSubmit}>
        <div className="relative mb-4">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <IoPersonOutline className="text-2xl text-gray-500" />
          </span>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="block px-2.5 pb-2.5 pt-4 pl-10 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange_c focus:border peer"
            placeholder=" "
          />

          <label
            htmlFor="name"
            className={`absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 left-11 z-10 origin-[0] ${label_bg} px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-orange_c rtl:peer-focus:translate-x-1/4`}
          >
            {errors.name ? (
              <span className="text-red-500 text-sm">{errors.name}</span>
            ) : (
              " Your Name*"
            )}
          </label>
        </div>

        <div className="relative mb-4">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MdOutlineEmail className="text-2xl text-gray-500" />
          </span>
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="block px-2.5 pb-2.5 pt-4 pl-10 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange_c focus:border peer"
            placeholder=" "
          />

          <label
            htmlFor="email"
            className={`absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 left-11 z-10 origin-[0] ${label_bg} px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-orange_c rtl:peer-focus:translate-x-1/4`}
          >
            {" "}
            {errors.email ? (
              <span className="text-red-500 text-sm">{errors.email}</span>
            ) : (
              "Email"
            )}
          </label>
        </div>

        <div className="relative mb-4">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <IoPhonePortraitOutline className="text-2xl text-gray-500" />
          </span>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="block px-2.5 pb-2.5 pt-4 pl-10 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange_c focus:border peer"
            placeholder=" "
          />

          <label
            htmlFor="phone"
            className={`absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 left-11 z-10 origin-[0] ${label_bg} px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-orange_c rtl:peer-focus:translate-x-1/4`}
          >
            {" "}
            {errors.phone ? (
              <span className="text-red-500 text-sm">{errors.phone}</span>
            ) : (
              "Phone Number*"
            )}
          </label>
        </div>

        <div className="flex items-center">
          <FaRegEdit className="text-2xl text-gray-500 mr-2" />
          <p className="text-md text-gray-500">Enter Your Message here</p>
        </div>
        {errors.message && (
          <span className="text-red-500 text-sm">{errors.message}</span>
        )}
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message here"
          className="min-h-28 rounded-lg bg-white w-full p-2 my-2 focus:outline-none focus:border focus:border-orange_c"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="bg-orange_c hover:bg-orange-800 text-white font-medium py-2 px-4"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default Form;
