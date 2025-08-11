import Link from 'next/link'
import React from 'react'
import { CircleUserRound, Phone, Facebook, Twitter, Instagram, MapPin, Mail, Clock, Send } from 'lucide-react';
 
function Footer() {
  return (
    <footer className='bg-[#614b41] text-white py-12'>
        <div className='conainer mx-auto px-4'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                <div>
                    <h3 className='text-xl font-bold mb-4'>BAKERY</h3>
                    <p className='MB-4'>
                        Quality and tradition since 1995. We are committed to using the
                f       inest ingredients and traditional baking methods.
                    </p>
                    <div className='flex space-x-4'>
                        <a href='#' className='hover:text-[#f5f0e8] cursor-pointer'>
                            <Facebook />
                            <i className='fab fa-facebook-f'></i>
                        </a>
                        <a href='#' className='hover:text-[#f5f0e8] cursor-pointer'>
                            <Twitter />
                            <i className='fab fa-twitter'></i>
                        </a>
                        <a href='#' className='hover:text-[#f5f0e8] cursor-pointer'>
                            <Instagram />
                            <i className='fab fa-instagram'></i>
                        </a>
                    </div>
                </div>
                <div>
                    <h3 className='text-xl font-bold mb-4'>Quick Links</h3>
                    <ul className='space-y-2'>
                        <li>
                            <Link href='/' className='hover:text-[#f5f0e8] cursor-pointer'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href='/menu' className='hover:text-[#f5f0e8] cursor-pointer'>
                                Menu
                            </Link>
                        </li>
                        <li>
                            <Link href='/about' className='hover:text-[#f5f0e8] cursor-pointer'>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href='/contact-us' className='hover:text-[#f5f0e8] cursor-pointer'>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link href='faq' className='hover:text-[#f5f0e8] cursor-pointer'>
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-bold mb-4'>Contact Us</h3>
                    <ul className='space-y-2'>
                        <li className='flex items-center'>
                            <MapPin />
                            <i className='fas fa-map-marker-alt mr-2'></i>
                            <span>Bakery Street, City, Country</span>
                        </li>
                         <li className='flex items-center'>
                            <Phone />
                            <i className='fas fa-phone-alt mr-2'></i>
                            <span>+98 (41) 12598-4569</span>
                        </li>
                         <li className='flex items-center'>
                            <Mail />
                            <i className='fas fa-envelope mr-2'></i>
                            <span>info@bakery.com</span>
                        </li>
                         <li className='flex items-center'>
                            <Clock />
                            <i className='fas fa-clock mr-2'></i>
                            <span>Sat-Fr: 7AM - 9PM</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-bold mb-4'>NewsLetter</h3>
                    <p className='mb-4'>
                        Subscribe to our newsletter for updates, special offers, and
                        baking tips.
                    </p>
                    <div className='flex'>
                        <input 
                            type='email'
                            placeholder='Your Email'
                            className='px-4 py-2 w-full border-none focus:outline-none text-[#333] rounded-l-full bg-white'
                        />
                        <button className='bg-[#8b5d3b] px-4 py-2 rounded-r-full hover:bg-[#7a4e32] transition duration-300 !rounded-button whitespace-nowrap cursor-pointer'>
                            <Send />
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className='border-t border-[#7a6a61] mt-8 pt-8 text-center'>
                <p>
                    &copy; 2025 BAKERY. All rights reserved. Handcrafted with love.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer