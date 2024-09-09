import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const logos = [
    { src: '/logos/CL-02.svg', alt: 'Centroid' },
    { src: '/logos/CL-03.svg', alt: 'Primex' },
    { src: '/logos/CL-04.svg', alt: 'Dealio' },
    { src: '/logos/CL-05.svg', alt: 'OneZero' },
    { src: '/logos/CL-06.svg', alt: 'FXCubic' },
    { src: '/logos/CL-07.svg', alt: 'Tapas' },
    { src: '/logos/CL-08.svg', alt: 'Gold-i' },
    { src: '/logos/CL-09.svg', alt: 'Panda Trading' },
  ];

  const companyLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Blogs', href: '#' },
  ];

  const serviceLinks = [
    { name: 'Marketing Consultancy', href: '#' },
    { name: 'Risk Management', href: '#' },
    { name: 'Technology Consultancy', href: '#' },
  ];

  const socialIcons = [
    { component: FaFacebookF, href: '#' },
    { component: FaTwitter, href: '#' },
    { component: FaLinkedinIn, href: '#' },
    { component: FaYoutube, href: '#' },
    { component: FaInstagram, href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-t from-[#080a62] via-[#2a125f] to-[#dc3d52] text-white py-10 md:py-14 2xl:py-20">
      <div className="container mx-auto px-4">
        {/* Partners Section */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-5xl font-bold">Hands On Experience!</h2>
          <div className="flex justify-center flex-wrap items-center mt-6 gap-12">
            {logos.map((logo, index) => (
              <img key={index} src={logo.src} alt={logo.alt} className="h-28 w-auto" />
            ))}
          </div>
        </div>

        {/* Footer Links and Info */}
        <div className="border-t border-gray-500 pt-8 grid grid-cols-1 md:grid-cols-4 gap-8 py-10">
          {/* Logo and Tagline */}
          <div className="relative w-48 h-20">
            <Link href="/">
              <Image src="/white-logo.webp" alt="Logo" fill className="object-contain" />
            </Link>
          
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-medium mb-2">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-secondary">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-medium mb-2">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-secondary">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-bold mb-2">Location</h3>
            <p>Meydan Grandstand, 6th Floor,<br />Meydan Road, Nad Al Sheba,<br />Dubai, U.A.E</p>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-10">
          <p className="text-sm">© 2024 MARKET MAVENS LTD all rights reserved.</p>
          <div className="flex space-x-2">
            {socialIcons.map((icon, index) => {
              const IconComponent = icon.component;
              return (
                <a key={index} href={icon.href}>
                  <IconComponent size={28} className=" bg-white rounded-full text-primary hover:bg-secondary hover:text-white p-2" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
