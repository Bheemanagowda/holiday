"use client";

import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoPersonOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";

function CommonForm({ label_bg = "bg-bg_c", headingHidden = false }) {
  const form = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    travelDate: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useRouter();
  const dateInputRef = useRef(null);
  const today = new Date().toISOString().split("T")[0];
  // Function to validate the form fields
  const validateForm = () => {
    let validationErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    if (!formData.name.trim()) validationErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      validationErrors.email = "Email is invalid";
    }
    if (!phonePattern.test(formData.phone))
      validationErrors.phone = "Please enter a valid 10-digit phone number.";

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    console.log(formData);
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

         console.log(error);
        }
      )
      .catch(() => {
        setLoading(false);
      });
  };
  const showDatePicker = () => {
    dateInputRef?.current?.showPicker();
  };
  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error on input change
  };

  return (
    <div className=" border border-gray-200 bg-white/40 rounded-xl px-4 py-6 mt-8">
      <h4 className="font-semibold text-center text-[20px] lg:text-3xl">Enquire Now</h4>
      <p className="text-center px-5 mt-2 mb-4 font-light text-sm ">
        {" "}
        Reserve your ideal trip early for a hassle-free trip; secure comfort and
        convenience!
      </p>
      <form ref={form}
        className="mt-4  font-light text-base lg:text-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="flex items-center gap-4 font-introFont  font-light text-darkBlack mb-2">
            Name*{" "}
            {errors.name && (
              <h3 className="text-red-500 text-sm font-primaryFont p-1">
                {errors.name}
              </h3>
            )}
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={` bg-white p-[12px] lg:p-[6px] w-full focus:outline-1 outline-gray-300 ${
              errors.name ? "border border-red-300" : ""
            }`}
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center gap-4 font-introFont font-light text-darkBlack mb-2">
            Email*{" "}
            {errors.email && (
              <h3 className="text-red-500 text-sm font-primaryFont p-1">
                {errors.email}
              </h3>
            )}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className=" bg-white p-[12px] lg:p-[6px] w-full focus:outline-1 outline-gray-300"
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center gap-4 font-introFont font-light text-darkBlack mb-2">
            Phone*{" "}
            {errors.phone && (
              <h3 className="text-red-500 text-sm font-primaryFont p-1">
                {errors.phone}
              </h3>
            )}
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className=" bg-white font-primaryFont p-[12px] lg:p-[6px] w-full focus:outline-1 outline-gray-300"
          />
        </div>
        {/* travel data  */}
        <div className="mb-4">
          <label className="block font-introFont font-light text-darkBlack mb-2">
            Travel Date
          </label>
          <input
            type="date"
            name="travelDate"
            min={today}
            ref={dateInputRef}
            onClick={showDatePicker}
            value={formData.travelDate}
            onChange={handleChange}
            className="font-introFont font-light text-darkBlack bg-white  p-[15px] lg:p-[6px] w-full focus:outline-1 outline-gray-300"
          />
        </div>
        <div className="mb-4">
          <label className="block font-introFont font-light text-darkBlack mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className=" bg-white p-[6px] h-[100px] lg:h-[40px] xl:h-[60px] 2xl:h-[120px] w-full focus:outline-1 outline-gray-300"
          ></textarea>
          {errors.message && (
            <h3 className="text-red-500 text-sm font-primaryFont p-1">
              {errors.message}
            </h3>
          )}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-[#FBCA05] cursor-pointer font-medium font-introFont text-darkBlack uppercase px-4 py-3 w-full text-lg text-center"
        >
          {loading ? "Submitting..." : "SUBMIT ENQUIRY"}
        </button>
      </form>
    </div>
  );
}

export default CommonForm;
