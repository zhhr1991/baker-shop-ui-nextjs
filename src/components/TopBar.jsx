import React from 'react'
import { CircleUserRound, Phone, Facebook, Twitter, Instagram } from 'lucide-react';

function TopBar() {
  return (
    <div className='bg-[#f5f0e8] text-[#614b41] py-2 px-4 flex justify-between items-center text-xs border-b border-[#e0d9cf]' >
        <div>
            <p>PFRESHLY MADE WITH LOVE EVERYDAY</p>
        </div>
        <div className='flex items-center space-x-4'>
            <div className='flex items-center'>
                <CircleUserRound />
                <i className="fas fa-user-circle mr-1"></i>
                <span>ORDER TRACKING</span> 
            </div>
            <div className='flex items-center'>
                <Phone />
                <i className="fas fa-user-circle mr-1"></i>
                <span>CUSTOMER CARE</span> 
            </div>
            <div className="flex items-center space-x-2">
                <a href="#" className="hover:text-[#8b5d3b] cursor-pointer">
                    <Facebook />
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="hover:text-[#8b5d3b] cursor-pointer">
                    <Twitter />
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="hover:text-[#8b5d3b] cursor-pointer">
                    <Instagram />
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </div>
    </div>
  )
}

export default TopBar