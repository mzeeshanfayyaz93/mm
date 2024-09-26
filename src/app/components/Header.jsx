'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Use usePathname to get current path

// Navigation Links
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: 'about-us' },
  { name: 'Marketing Consultancy', href: 'marketing-consultancy' },
  { name: 'Risk Management', href: 'risk-management' },
  { name: 'Technology Consultancy', href: 'technology-consultancy' },
  { name: 'Blogs', href: 'blogs' },
];

const Header = () => {
  const pathname = usePathname(); // Get the current pathname
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll position and change background when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if the current page is the home page or marketing consultancy page
  const isTransparentPage = pathname === '/' || pathname === '/marketing-consultancy' || pathname === '/contact';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 py-2 transition-all duration-300 ${
        isTransparentPage
          ? isScrolled
            ? 'bg-gradient-to-r from-[#0a0747] to-[#aa165e]' // Apply gradient when scrolled
            : 'bg-transparent' // Apply transparent background when not scrolled
          : 'bg-gradient-to-b from-[#0a0747] to-[#aa165e]' // Default gradient background for other pages
      }`}
    >
      <div className="container flex flex-row items-center justify-between">
        {/* Logo */}
        <div className="relative w-48 h-20">
          <Link href="/">
            <Image src="/white-logo.webp" alt="Logo" fill className="object-contain" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8 items-center">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-normal leading-2 text-white">
              {item.name}
            </Link>
          ))}
          {/* Log in Button for Desktop */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="/contact" className="bg-primary rounded-full py-3 px-7 text-white shadow-2xl hover:bg-white hover:text-primary">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile Menu Dialog */}
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 left-0 z-50 w-[90%] overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              {/* Mobile Menu Logo */}
              <Link href="/" className="relative w-24 h-12">
                <Image src="/logo.png" alt="Logo" fill className="object-contain" />
              </Link>
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link href="/contact" className="bg-gradient rounded-full py-3 px-5 text-white w-96">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </div>
    </header>
  );
};

export default Header;
