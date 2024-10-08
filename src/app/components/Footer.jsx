'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname(); // Get current path

  // Logos shown on all pages
  const commonLogos = [
    { src: '/logos/CL-02.svg', alt: 'Centroid' },
    { src: '/logos/CL-03.svg', alt: 'Primex' },
    { src: '/logos/CL-04.svg', alt: 'Dealio' },
    { src: '/logos/CL-05.svg', alt: 'OneZero' },
    { src: '/logos/CL-06.svg', alt: 'FXCubic' },
    { src: '/logos/CL-07.svg', alt: 'Tapas' },
    { src: '/logos/CL-08.svg', alt: 'Gold-i' },
    { src: '/logos/CL-09.svg', alt: 'Panda Trading' },
  ];

  // Extra logos shown only on the specific page (e.g., marketing consultancy)
  const extraLogos = [
    { src: '/logos/logos-25.svg', alt: 'Panda Trading' },
    { src: '/logos/logos-26.svg', alt: 'Panda Trading' },
    { src: '/logos/logos-27.svg', alt: 'Panda Trading' },
    { src: '/logos/logos-28.svg', alt: 'Panda Trading' },
    { src: '/logos/logos-29.svg', alt: 'Panda Trading' },
    { src: '/logos/logos-30.svg', alt: 'Panda Trading' },
    { src: '/logos/logos-31.svg', alt: 'Panda Trading' },
    { src: '/logos/logos-32.svg', alt: 'Panda Trading' },
    { src: '/logos/logos-33.svg', alt: 'Panda Trading' },
    { src: '/logos/logos-34.svg', alt: 'Panda Trading' },
    { src: '/logos/logos-35.svg', alt: 'Panda Trading' }, 
    { src: '/logos/logos-36.svg', alt: 'Panda Trading' },
  ];

  // Combine logos based on the page
  const isMarketingPage = pathname === '/marketing-consultancy';
  const logosToShow = isMarketingPage ? [...extraLogos] : commonLogos;

  const companyLinks = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy-cookie-policy' },
    { name: 'Company Policy', href: '/company-policy' },
    { name: 'Careers', href: '/career' },
  ];

  const serviceLinks = [
    { name: 'Marketing', href: '/marketing-consultancy' },
    { name: 'Risk', href: '/risk-management' },
    { name: 'Technology', href: '/technology-consultancy' },
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
          <h2 className="text-2xl md:text-3xl 3xl:text-4xl font-bold capitalize pb-8">Tried, tested, trusted expertise!</h2>
          <div
            className={`flex flex-row flex-wrap justify-center gap-6`}
          >
            {logosToShow.map((logo, index) => (
              <div className='relative w-32 h-14'>
                <Image key={index} src={logo.src} alt={logo.alt} fill className='object-contain' />
              </div>

            ))}
          </div>
        </div>

        {/* Footer Links and Info */}
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
            <h3 className="font-medium mb-2 text-secondary">Company</h3>
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
            <h3 className="font-medium mb-2 text-secondary">Services</h3>
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
            <h3 className="font-bold mb-2 text-secondary">Location</h3>
            <p>Meydan Grandstand, 6th Floor,<br />Meydan Road, Nad Al Sheba,<br />Dubai, U.A.E</p>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="flex flex-col md:flex-row gap-x-2 items-center justify-between pt-10">
          <p className="text-xs text-center md:text-left md:text-sm pb-3 md:pb-0">
          Market Mavens is a brand owned and operated by The Isic Group LLC FZ. 
          Copyright @ 2024 The Isic Group LLC FZ
          </p>
          <div className="flex space-x-2">
            {socialIcons.map((icon, index) => {
              const IconComponent = icon.component;
              return (
                <a key={index} href={icon.href}>
                  <IconComponent
                    size={28}
                    className=" bg-white rounded-full text-primary hover:bg-secondary hover:text-white p-2"
                  />
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
