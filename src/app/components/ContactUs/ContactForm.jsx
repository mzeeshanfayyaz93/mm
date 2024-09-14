import Image from 'next/image';
import { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    code: '',
    phone: '',
    country: '',
    query: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <section className="bg-gradient-to-r from-[#080a62] to-[#dc3d52] py-16 px-4 relative">
      <div className="max-w-6xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-8">
          Ready to take your brokerage to the next level? Fill out the form below, and one of our experts will get in touch with you shortly.
        </p>

        <div className="bg-white rounded-lg p-8 shadow-lg max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <div className="flex space-x-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                className="w-1/2 px-4 py-3 border rounded-md focus:outline-none focus:ring focus:ring-primary"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                className="w-1/2 px-4 py-3 border rounded-md focus:outline-none focus:ring focus:ring-primary"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:ring-primary"
            />
            <div className="flex space-x-4">
              <input
                type="text"
                name="code"
                placeholder="Code"
                value={form.code}
                onChange={handleChange}
                className="w-1/3 px-4 py-3 border rounded-md focus:outline-none focus:ring focus:ring-primary"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                className="w-2/3 px-4 py-3 border rounded-md focus:outline-none focus:ring focus:ring-primary"
              />
            </div>
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={form.country}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:ring-primary"
            />
            <input
              type="text"
              name="query"
              placeholder="Query"
              value={form.query}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:ring-primary"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#080a62] to-[#dc3d52] text-white font-semibold py-3 px-8 rounded-full text-lg mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
