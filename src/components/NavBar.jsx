'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { Menu } from 'lucide-react';

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className='container mx-auto px-4 py-4'>
        <div className='flex justify-between items-center'>
            <div className="w-1/3 lg:flex hidden">
                {/* Empty div for layout balance */}
            </div>
            <div className="w-1/3 flex justify-center">
                <div className="text-center">
                    <div className="text-xs text-[#8b5d3b] uppercase tracking-widest">
                        QUALITY AND TRADITION
                    </div>
                    <h1 className="text-3xl font-bold text-[#333] tracking-wide">
                        BAKERY
                    </h1>
                    <div className="text-xs text-[#8b5d3b] uppercase tracking-widest">
                        HANDMADE DELIGHT
                    </div>
                </div>
            </div>
            <div className="w-1/3 flex justify-end">
                <button
                    className="lg:hidden text-[#614b41]"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                    <Menu />
                </button>
            </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-center mt-6">
          <nav className="flex space-x-10">
            <Link
              href="/"
              className="text-[#614b41] hover:text-[#8b5d3b] font-medium cursor-pointer"
            >
              HOME
            </Link>
            <Link
              href="/menu"
              className="text-[#614b41] hover:text-[#8b5d3b] font-medium cursor-pointer"
            >
              MENU
            </Link>
            <Link
              href="/about"
              className="text-[#614b41] hover:text-[#8b5d3b] font-medium cursor-pointer"
            >
              ABOUT
            </Link>
            <Link
              href="/faq"
              className="text-[#614b41] hover:text-[#8b5d3b] font-medium cursor-pointer"
            >
              FAQ
            </Link>
            <Link
              href="/contact-us"
              className="text-[#614b41] hover:text-[#8b5d3b] font-medium cursor-pointer"
            >
              CONTACT US
            </Link>
            <button className="bg-[#8b5d3b] text-white px-6 py-2 rounded-full hover:bg-[#7a4e32] transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
              ORDER NOW
            </button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white shadow-lg rounded-lg p-4">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-[#614b41] hover:text-[#8b5d3b] font-medium cursor-pointer"
              >
                HOME
              </Link>
              <Link
                href="/menu"
                className="text-[#614b41] hover:text-[#8b5d3b] font-medium cursor-pointer"
              >
                MENU
              </Link>
              <Link
                href="/about"
                className="text-[#614b41] hover:text-[#8b5d3b] font-medium cursor-pointer"
              >
                ABOUT
              </Link>
              <Link
                href="/faq"
                className="text-[#614b41] hover:text-[#8b5d3b] font-medium cursor-pointer"
              >
                FAQ
              </Link>
              <Link
                href="/contact-us"
                className="text-[#614b41] hover:text-[#8b5d3b] font-medium cursor-pointer"
              >
                CONTACT US
              </Link>
              <button className="bg-[#8b5d3b] text-white px-6 py-2 rounded-full hover:bg-[#7a4e32] transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                ORDER NOW
              </button>
            </nav>
          </div>
        )}
    </div>
  )
}

export default NavBar