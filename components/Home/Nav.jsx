'use client';
import Link from 'next/link';
import { navLinks } from '@/constant/constant';
import { usePathname } from 'next/navigation';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { useState } from 'react';
import MobileNav from './MobileNav';
const nav = () => {
  const pathname = usePathname();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="relative transition-all duration-200 h-[10vh] z-[1000] mt-10 px-4 sm:px-10 lg:px-20">
      <div className="flex items-center h-full justify-between w-full">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img src="./images/Logo.svg" alt="Logoipsum" className="w-40 h-auto lg:w-60" />
          </a>
        </div>

        {/* Nav links (hidden on mobile) */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.url;
            return (
              <Link
                href={link.url}
                key={link.id}
                className={`relative px-3 py-1 rounded text-base font-light transition-all duration-300 ease-in
                  ${isActive ? 'text-red-500' : 'text-black hover:text-red-300'}`}
              >
                {link.label}
              </Link>
            );
          })}

          <button className="md:px-6 md:py-2.5 px-4 py-2 text-white text-base font-light bg-red-400 hover:bg-red-500 transition-all duration-200 rounded-sm">
            Subscribe
          </button>
        </div>

        {/* Mobile menu icon (only visible on small screens) */}
        <div className="flex lg:hidden items-center">
        <HiBars3BottomRight onClick={() => setIsMobileNavOpen(true)} className="w-8 h-8 text-black cursor-pointer" />
        <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />
        </div>
      </div>
    </div>
  );
};

export default nav;
