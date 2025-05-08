'use client'
import React from 'react'
import Link from 'next/link'
import { navLinks } from '@/constant/constant'
import { MdClose } from 'react-icons/md'

const MobileNav = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed top-0 right-0 z-[9999] h-full w-3/4 sm:w-1/2 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex justify-end p-4">
        <button onClick={onClose}>
          <MdClose className="w-6 h-6 text-black hover:text-red-400" />
        </button>
      </div>
      <nav className="flex flex-col items-start space-y-6 p-6">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.id}
            onClick={onClose}
            className="text-lg text-gray-800 hover:text-red-500 transition-all"
          >
            {link.label}
          </Link>
        ))}
        <button className="mt-6 w-full py-2 bg-red-400 hover:bg-red-500 text-white rounded-sm transition-all">
          Subscribe
        </button>
      </nav>
    </div>
  )
}

export default MobileNav
