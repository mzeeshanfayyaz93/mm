'use client'
import { UserIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { CiMail } from 'react-icons/ci';
import { FiPhoneCall } from "react-icons/fi";
import { GiWorld } from "react-icons/gi";
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react';


const ContactUsHeroSection = () => {
    const [value, setValue] = useState("+971")
    const [formData, setFormData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [responseMessage, setResponseMessage] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const payload = {
            Name: `${formData?.firstName} ${formData?.lastName}`,
            Email: formData?.email,
            Phone: value + "" + formData?.phone,
            Query: formData?.query,
            Date: new Date(),
            sheetName: "contact form"
        }

        try {
            const response = await fetch("/api/contactForm", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            if (response.ok) {
                setFormData(null);
                setResponseMessage("Form submitted successfully!");
            } else {
                const error = await response.json();
                setResponseMessage("Failed to submit the form. Please try again.");
            }
        } catch (error) {
            setResponseMessage("An error occurred. Please try again.");
        } finally {
            setFormData({})
            setLoading(false)
        }
    };
    return (
        <div>
            <section className="bg-gradient-to-r from-[#080a62] from-30%  to-secondary to-90% pt-28 3xl:pt-36 xl:pt-32 md:px-4 text-white relative">
                <div className="max-w-6xl mx-auto text-center lg:text-left">
                    <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold mb-4 text-center md:leading-normal">
                        Contact Us
                    </h1>
                    <p className="text-sm md:ext-lg xl:text-xl text-gray-300 mb-8 text-center p-5">
                        Ready to take your brokerage to the next level?<br />
                        Fill out the form below, and one of our experts will get in touch with you shortly.
                    </p>
                </div>
                <div className="relative mt-10 lg:mt-0 flex justify-center">
                    <div className="relative w-full md:h-[300px]">
                        <img
                            src="/images/contact-us/banner.webp"
                            alt="Trading Summary"
                            fill
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </section>
            {/* Form Section */}
            <div className=' relative -top-48'>
                <form className="bg-white relative text-gray-700 rounded-3xl shadow-lg p-8 max-w-3xl mx-auto"
                    onSubmit={handleSubmit}
                >
                    {/* <form> */}
                    {/* First Name & Last Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className='relative'>
                            <UserIcon className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
                            <input
                                type="text"
                                className="w-full px-4 py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="First Name"
                                name='firstName'
                                value={formData?.firstName || ""}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className=' relative'>
                            <UserIcon className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
                            <input
                                type="text"
                                className="w-full px-4 py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Last Name"
                                name='lastName'
                                value={formData?.lastName || ""}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid relative grid-cols-1 gap-6 mb-6">
                        <CiMail className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
                        <input
                            type="email"
                            className="w-full px-4 py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Email"
                            name='email'
                            value={formData?.email || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="grid grid-cols-3 gap-6 mb-6">
                        <div
                            className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            <PhoneInput
                                international
                                countryCallingCodeEditable={false}
                                defaultCountry="AE"
                                value={value}
                                onChange={(phone) => {
                                    setValue(phone)
                                }}
                            />
                        </div>
                        <div className='col-span-2 relative'>
                            <FiPhoneCall className='absolute top-4 left-3 text-gray-400 h-5 w-5' />
                            <input
                                type="number"
                                className="w-full px-4 py-3 pl-9 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Phone"
                                name='phone'
                                value={formData?.phone || ""}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Country & Query */}
                    <div className="grid grid-cols-1 gap-6 mb-6">
                        {/* Country Dropdown */}
                        <div className="relative ">
                            <GiWorld className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
                            <select
                                name="query"
                                className="w-full px-4 py-3 pl-9 border rounded-lg text-gray-700"
                                required
                                value={formData?.query || ""}
                                onChange={handleChange}
                            >
                                <option value="">Query</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Risk Management">Risk Management</option>
                                <option value="Technology">Technology </option>
                            </select>
                        </div>
                    </div>
                    {responseMessage && (
                        <div className="my-4">
                            <p className="text-primary">{responseMessage}</p>
                        </div>
                    )}

                    {/* Submit Button */}
                    <div className="text-center -mb-12">
                        <button
                            // onClick={() => { sendEmail() }}
                            type="submit"
                            className="bg-gradient-to-r from-[#080a62] to-[#dc3d52] text-white font-semibold py-3 px-8 rounded-full text-lg"
                        >
                            {loading ? "Submitting.." : "Submit"}
                        </button>
                    </div>
                    {/* </form> */}
                </form>
                <div className='my-10'>
                    <img className='w-[400px] mx-auto ' src="/social.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ContactUsHeroSection