'use client'

import React, { useState, useEffect } from 'react'
import { Minus, Plus, Search } from 'lucide-react';


function FaqContent() {
    const [activeFaqCategory, setActiveFaqCategory] = useState("all");
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [searchFaqQuery, setSearchFaqQuery] = useState("");
    const [filteredFaqs, setFilteredFaqs] = useState([]);

    const faqItems = [
        {
            id: 1,
            question: "What time do you open?",
            answer:
                "Our bakery is open from 7:00 AM to 9:00 PM Monday through Friday, and 8:00 AM to 4:00 PM on weekends. We may have special holiday hours which will be posted on our website and social media channels.",
            category: "hours",
        },
        {
            id: 2,
            question: "Do you offer gluten-free options?",
            answer:
                "Yes, we offer a selection of gluten-free breads, pastries, and cakes. However, please note that they are prepared in a kitchen that also handles wheat flour, so they may not be suitable for those with severe gluten allergies or celiac disease.",
            category: "products",
        },
        {
            id: 3,
            question: "How far in advance should I order a custom cake?",
            answer:
                "We recommend placing custom cake orders at least 72 hours (3 days) in advance. For wedding cakes or large event orders, we suggest ordering 2-4 weeks ahead. Rush orders may be accommodated based on availability with an additional fee.",
            category: "orders",
        },
        {
            id: 4,
            question: "Do you deliver?",
            answer:
                "Yes, we offer delivery services within a 15-mile radius of our bakery. Delivery fees start at $10 and may increase based on distance and order size. For wedding cakes and large catering orders, we provide special delivery and setup services.",
            category: "delivery",
        },
        {
            id: 5,
            question: "Are your products made fresh daily?",
            answer:
                "Absolutely! All our breads, pastries, and desserts are baked fresh daily. Our bakers arrive early in the morning to ensure everything is freshly made for our customers. We never sell day-old products at full price.",
            category: "products",
        },
        {
            id: 6,
            question: "Can I freeze your bread?",
            answer:
                "Yes, our breads freeze well. We recommend slicing the bread before freezing for easier thawing. Wrap it tightly in plastic wrap and then in aluminum foil or place in a freezer bag. Bread can be frozen for up to 3 months. Thaw at room temperature or toast from frozen.",
            category: "products",
        },
        {
            id: 7,
            question: "Do you offer catering services?",
            answer:
                "Yes, we offer catering services for events of all sizes. Our catering menu includes breakfast pastry platters, sandwich platters, dessert trays, and custom cakes. Please contact us at least one week in advance to discuss your catering needs.",
            category: "services",
        },
        {
            id: 8,
            question: "What ingredients do you use?",
            answer:
                "We pride ourselves on using high-quality, natural ingredients. Our flour is organic and locally sourced when possible. We use real butter, fresh eggs, and avoid artificial preservatives and flavors. Detailed ingredient lists are available upon request for allergy concerns.",
            category: "products",
        },
        {
            id: 9,
            question: "Do you offer vegan options?",
            answer:
                "Yes, we have a growing selection of vegan breads, pastries, and cakes. Our vegan items are made without any animal products including eggs, dairy, or honey. Please ask our staff about our current vegan offerings.",
            category: "products",
        },
        {
            id: 10,
            question: "Can I place an order online?",
            answer:
                "Yes, you can place orders through our website or by calling the bakery directly. For custom orders, we may follow up with you to confirm details. Online ordering is available 24/7, but orders must be placed before 3 PM for next-day pickup.",
            category: "orders",
        },
        {
            id: 11,
            question: "Do you offer gift cards?",
            answer:
                "Yes, we offer gift cards in any denomination. They can be purchased in-store or online and make perfect gifts for birthdays, holidays, or any special occasion. Our gift cards never expire and can be used for any products we offer.",
            category: "services",
        },
        {
            id: 12,
            question:
                "What's the difference between your sourdough and regular bread?",
            answer:
                "Our sourdough bread is made using a natural fermentation process with our house sourdough starter that's been maintained for over 10 years. This results in bread with a distinctive tangy flavor, chewy texture, and better digestibility compared to bread made with commercial yeast.",
            category: "products",
        },
    ];

    useEffect(() => {
        const filtered = faqItems.filter((item) => {
            const matchesCategory =
                activeFaqCategory === "all" || item.category === activeFaqCategory;
            const matchesSearch =
                item.question.toLowerCase().includes(searchFaqQuery.toLowerCase()) ||
                item.answer.toLowerCase().includes(searchFaqQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
        setFilteredFaqs(filtered);
    }, [activeFaqCategory, searchFaqQuery]);

    const toggleFaq = (id) => {
        setExpandedFaq(expandedFaq === id ? null : id);
    };


    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">

                {/* Sidebar */}
                <div className="w-full md:w-1/4">
                    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                        <h3 className="text-xl font-bold text-[#333] mb-4">
                            FAQ Categories
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <button
                                    onClick={() => setActiveFaqCategory("all")}
                                    className={`w-full text-left px-4 py-2 rounded-md transition duration-300 cursor-pointer ${activeFaqCategory === "all"
                                        ? "bg-[#8b5d3b] text-white"
                                        : "hover:bg-[#f0e8e0] text-[#614b41]"
                                        }`}
                                >
                                    All Questions
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setActiveFaqCategory("products")}
                                    className={`w-full text-left px-4 py-2 rounded-md transition duration-300 cursor-pointer ${activeFaqCategory === "products"
                                        ? "bg-[#8b5d3b] text-white"
                                        : "hover:bg-[#f0e8e0] text-[#614b41]"
                                        }`}
                                >
                                    Products
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setActiveFaqCategory("orders")}
                                    className={`w-full text-left px-4 py-2 rounded-md transition duration-300 cursor-pointer ${activeFaqCategory === "orders"
                                        ? "bg-[#8b5d3b] text-white"
                                        : "hover:bg-[#f0e8e0] text-[#614b41]"
                                        }`}
                                >
                                    Orders
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setActiveFaqCategory("delivery")}
                                    className={`w-full text-left px-4 py-2 rounded-md transition duration-300 cursor-pointer ${activeFaqCategory === "delivery"
                                        ? "bg-[#8b5d3b] text-white"
                                        : "hover:bg-[#f0e8e0] text-[#614b41]"
                                        }`}
                                >
                                    Delivery
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setActiveFaqCategory("hours")}
                                    className={`w-full text-left px-4 py-2 rounded-md transition duration-300 cursor-pointer ${activeFaqCategory === "hours"
                                        ? "bg-[#8b5d3b] text-white"
                                        : "hover:bg-[#f0e8e0] text-[#614b41]"
                                        }`}
                                >
                                    Hours & Location
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setActiveFaqCategory("services")}
                                    className={`w-full text-left px-4 py-2 rounded-md transition duration-300 cursor-pointer ${activeFaqCategory === "services"
                                        ? "bg-[#8b5d3b] text-white"
                                        : "hover:bg-[#f0e8e0] text-[#614b41]"
                                        }`}
                                >
                                    Services
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold text-[#333] mb-4">
                            Need More Help?
                        </h3>
                        <p className="text-[#614b41] mb-4">
                            Can't find the answer you're looking for? Please contact our
                            customer support team.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <i className="fas fa-phone-alt text-[#8b5d3b] mr-3"></i>
                                <span className="text-[#614b41]">+98 (41) 2359</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-envelope text-[#8b5d3b] mr-3"></i>
                                <span className="text-[#614b41]">info@bakery.com</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-comment-alt text-[#8b5d3b] mr-3"></i>
                                <span className="text-[#614b41]">Live Chat (9AM-9PM)</span>
                            </div>
                        </div>
                        <button className="bg-[#8b5d3b] text-white px-6 py-2 rounded-full hover:bg-[#7a4e32] transition duration-300 mt-6 w-full !rounded-button whitespace-nowrap cursor-pointer">
                            Contact Us
                        </button>
                    </div>
                </div>

                {/* FAQ Content */}
                <div className="w-full md:w-3/4">
                    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                        <div className="relative mb-6">
                            <input
                                type="text"
                                placeholder="Search FAQs..."
                                value={searchFaqQuery}
                                onChange={(e) => setSearchFaqQuery(e.target.value)}
                                className="w-full px-4 py-3 pl-10 rounded-lg border-none focus:outline-none bg-[#f5f0e8] text-[#333]"
                            />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8b5d3b]" />
                        </div>

                        {filteredFaqs.length > 0 ? (
                            <div className="space-y-4">
                                {filteredFaqs.map((faq) => (
                                    <div
                                        key={faq.id}
                                        className="border-b border-[#e0d9cf] last:border-b-0 pb-4 last:pb-0"
                                    >
                                        <button
                                            onClick={() => toggleFaq(faq.id)}
                                            className="w-full flex justify-between items-center text-left py-3 focus:outline-none cursor-pointer"
                                        >
                                            <h3 className="text-lg font-medium text-[#333]">
                                                {faq.question}
                                            </h3>
                                            {expandedFaq === faq.id ? (
                                                <Minus className="text-[#8b5d3b]" />
                                            ) : (
                                                <Plus className="text-[#8b5d3b]" />
                                            )}

                                        </button>
                                        {expandedFaq === faq.id && (
                                            <div className="mt-2 text-[#614b41] pl-0 pr-6 animate-fadeIn">
                                                <p>{faq.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <i className="fas fa-search text-4xl text-[#e0d9cf] mb-4"></i>
                                <h3 className="text-xl font-medium text-[#333] mb-2">
                                    No results found
                                </h3>
                                <p className="text-[#614b41]">
                                    We couldn't find any FAQs matching your search. Please try
                                    different keywords or browse by category.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Popular Questions */}
                    <div className="bg-[#f0e8e0] rounded-lg p-6">
                        <h3 className="text-xl font-bold text-[#333] mb-4">
                            Most Popular Questions
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div
                                className="bg-white rounded-lg p-4 hover:shadow-md transition duration-300 cursor-pointer"
                                onClick={() => toggleFaq(3)}
                            >
                                <h4 className="font-medium text-[#333]">
                                    How far in advance should I order a custom cake?
                                </h4>
                            </div>
                            <div
                                className="bg-white rounded-lg p-4 hover:shadow-md transition duration-300 cursor-pointer"
                                onClick={() => toggleFaq(2)}
                            >
                                <h4 className="font-medium text-[#333]">
                                    Do you offer gluten-free options?
                                </h4>
                            </div>
                            <div
                                className="bg-white rounded-lg p-4 hover:shadow-md transition duration-300 cursor-pointer"
                                onClick={() => toggleFaq(4)}
                            >
                                <h4 className="font-medium text-[#333]">Do you deliver?</h4>
                            </div>
                            <div
                                className="bg-white rounded-lg p-4 hover:shadow-md transition duration-300 cursor-pointer"
                                onClick={() => toggleFaq(9)}
                            >
                                <h4 className="font-medium text-[#333]">
                                    Do you offer vegan options?
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqContent