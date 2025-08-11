import React from 'react'
import { Mail, MapPin, Minus, Phone, Plus, Search } from 'lucide-react';
import FaqContent from '@/components/FaqContent';

function page() {
    return (
        <>
            {/* FAQ Hero Section */}
            <div className="relative h-[300px]">
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url('./images/faq-hero.jpg')`,
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#535250] to-transparent">
                        <div className="container mx-auto px-4 h-full flex items-center justify-center">
                            <div className="text-center text-white">
                                <h1 className="text-5xl font-bold mb-4">
                                    Frequently Asked Questions
                                </h1>
                                <p className="text-xl">
                                    Find answers to common questions about our products and
                                    services
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Content */}
            <FaqContent />

            {/* Still Have Questions Section */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#333] mb-3">
                            Still Have Questions?
                        </h2>
                        <p className="text-[#614b41] max-w-2xl mx-auto">
                            If you couldn't find the answer you were looking for, please don't
                            hesitate to reach out to us directly. Our team is always happy to
                            help!
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-[#f5f0e8] rounded-lg p-8 text-center">
                            <div className="w-16 h-16 bg-[#8b5d3b] rounded-full flex items-center justify-center mx-auto mb-4">
                                <Phone className="text-white text-xl" />
                            </div>
                            <h3 className="text-xl font-bold text-[#333] mb-3">Call Us</h3>
                            <p className="text-[#614b41] mb-4">
                                Speak directly with our customer service team during business
                                hours.
                            </p>
                            <p className="font-medium text-[#333]">+98 (41) 123-4567</p>
                            <p className="text-sm text-[#614b41]">Mon-Fri: 8AM - 9PM</p>
                        </div>
                        <div className="bg-[#f5f0e8] rounded-lg p-8 text-center">
                            <div className="w-16 h-16 bg-[#8b5d3b] rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail className=" text-white text-xl" />
                            </div>
                            <h3 className="text-xl font-bold text-[#333] mb-3">Email Us</h3>
                            <p className="text-[#614b41] mb-4">
                                Send us an email and we'll get back to you within 24 hours.
                            </p>
                            <p className="font-medium text-[#333]">info@bakery.com</p>
                            <p className="text-sm text-[#614b41]">24/7 Email Support</p>
                        </div>
                        <div className="bg-[#f5f0e8] rounded-lg p-8 text-center">
                            <div className="w-16 h-16 bg-[#8b5d3b] rounded-full flex items-center justify-center mx-auto mb-4">
                                <MapPin className="text-white text-xl" />
                            </div>
                            <h3 className="text-xl font-bold text-[#333] mb-3">Visit Us</h3>
                            <p className="text-[#614b41] mb-4">
                                Come to our bakery and speak with our team in person.
                            </p>
                            <p className="font-medium text-[#333]">123 Bakery Street, City</p>
                            <p className="text-sm text-[#614b41]">Open Daily: 7AM - 9PM</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="py-16 bg-[#f5f0e8]">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-3xl font-bold text-[#333] text-center mb-6">
                            Send Us a Message
                        </h2>
                        <p className="text-[#614b41] text-center mb-8">
                            Fill out the form below and we'll get back to you as soon as
                            possible.
                        </p>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-[#333] font-medium mb-2"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-lg border-none bg-[#f5f0e8] focus:outline-none text-[#333]"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-[#333] font-medium mb-2"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-lg border-none bg-[#f5f0e8] focus:outline-none text-[#333]"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-[#333] font-medium mb-2"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-lg border-none bg-[#f5f0e8] focus:outline-none text-[#333]"
                                    placeholder="How can we help you?"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-[#333] font-medium mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg border-none bg-[#f5f0e8] focus:outline-none text-[#333] resize-none"
                                    placeholder="Please provide details about your inquiry..."
                                ></textarea>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="privacy"
                                    className="mr-2 h-4 w-4 text-[#8b5d3b] focus:ring-[#8b5d3b] border-gray-300 rounded"
                                />
                                <label htmlFor="privacy" className="text-[#614b41] text-sm">
                                    I agree to the{" "}
                                    <a href="#" className="text-[#8b5d3b] hover:underline">
                                        Privacy Policy
                                    </a>{" "}
                                    and consent to being contacted.
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="bg-[#8b5d3b] text-white px-8 py-3 rounded-full hover:bg-[#7a4e32] transition duration-300 w-full !rounded-button whitespace-nowrap cursor-pointer"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page