'use client'

import React, { useState, useEffect } from 'react'
import { Search } from 'lucide-react';

function Menu() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredItems, setFilteredItems] = useState();

    const menuItems = [
    {
      id: 1,
      name: "Artisan Sourdough Bread",
      description:
        "Traditional sourdough bread with perfect crust and soft interior",
      price: "$6.99",
      image:
        "./images/bread.jpg",
      category: "breads",
    },
    {
      id: 2,
      name: "Butter Croissant",
      description: "Flaky layers of buttery pastry, traditionally made",
      price: "$3.99",
      image:
        "./images/korosan1.jpg",
      category: "pastries",
    },
    {
      id: 3,
      name: "Chocolate Cake",
      description: "Rich chocolate layers with ganache filling",
      price: "$28.99",
      image:
        "./images/cacke1.jpg",
      category: "cakes",
    },
    {
      id: 4,
      name: "Baguette",
      description: "Traditional French bread with crispy crust",
      price: "$4.99",
      image:
        "./images/bread2.jpg",
      category: "breads",
    },
    {
      id: 5,
      name: "Pain au Chocolat",
      description: "Chocolate-filled croissant pastry",
      price: "$4.50",
      image:
        "./images/pirash1.jpg",
      category: "pastries",
    },
    {
      id: 6,
      name: "Red Velvet Cake",
      description: "Classic red velvet with cream cheese frosting",
      price: "$32.99",
      image:
        "./images/cacke2.jpg",
      category: "cakes",
    },
    {
      id: 7,
      name: "Olive Focaccia",
      description: "Italian bread with olives and herbs",
      price: "$7.99",
      image:
        "./images/pay1.jpg",
      category: "breads",
    },
    {
      id: 8,
      name: "Fruit Danish",
      description: "Flaky pastry with seasonal fruits",
      price: "$4.99",
      image:
        "./images/pay2.jpg",
      category: "pastries",
    },
    {
      id: 9,
      name: "Carrot Cake",
      description: "Spiced carrot cake with cream cheese frosting",
      price: "$30.99",
      image:
        "./images/cacke3.jpg",
      category: "cakes",
    },
  ];

  useEffect(() => {
    const filtered = menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    setFilteredItems(filtered);
  }, [activeCategory, searchQuery]);


  return (
    <div className="container mx-auto px-4 py-8">
        {/* Menu Navigation and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-2 rounded-full transition duration-300 !rounded-button whitespace-nowrap cursor-pointer ${
                activeCategory === "all"
                  ? "bg-[#8b5d3b] text-white"
                  : "bg-white text-[#8b5d3b]"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveCategory("breads")}
              className={`px-6 py-2 rounded-full transition duration-300 !rounded-button whitespace-nowrap cursor-pointer ${
                activeCategory === "breads"
                  ? "bg-[#8b5d3b] text-white"
                  : "bg-white text-[#8b5d3b]"
              }`}
            >
              Breads
            </button>
            <button
              onClick={() => setActiveCategory("pastries")}
              className={`px-6 py-2 rounded-full transition duration-300 !rounded-button whitespace-nowrap cursor-pointer ${
                activeCategory === "pastries"
                  ? "bg-[#8b5d3b] text-white"
                  : "bg-white text-[#8b5d3b]"
              }`}
            >
              Pastries
            </button>
            <button
              onClick={() => setActiveCategory("cakes")}
              className={`px-6 py-2 rounded-full transition duration-300 !rounded-button whitespace-nowrap cursor-pointer ${
                activeCategory === "cakes"
                  ? "bg-[#8b5d3b] text-white"
                  : "bg-white text-[#8b5d3b]"
              }`}
            >
              Cakes
            </button>
          </div>
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-full border-none focus:outline-none text-[#333] bg-white"
            />
            <Search className='absolute right-4 top-1/2 transform -translate-y-1/2 text-[#8b5d3b]'/>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems?.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-[#333]">{item.name}</h3>
                  <span className="text-[#8b5d3b] font-bold">{item.price}</span>
                </div>
                <p className="text-[#614b41] mb-4">{item.description}</p>
                <button className="bg-[#8b5d3b] text-white px-6 py-2 rounded-full hover:bg-[#7a4e32] transition duration-300 !rounded-button whitespace-nowrap cursor-pointer w-full">
                  Add to Cart
                </button>
              </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Menu