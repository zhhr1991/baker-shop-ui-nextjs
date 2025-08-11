import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import React from 'react'

function page() {
    return (
        <>
            {/* Contact Hero Section */}
            <div className="relative h-[400px]">
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url('./images/contact-us-hero.jpg')`,
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#535250] to-transparent">
                        <div className="container mx-auto px-4 h-full flex items-center justify-center">
                            <div className="text-center text-white">
                                <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
                                <p className="text-xl max-w-2xl mx-auto">
                                    We'd love to hear from you. Whether you have a question about
                                    our products, services, or just want to say hello, we're here
                                    to help.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Information Cards */}
            <div className="container mx-auto px-4 -mt-20 mb-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                        <div className="w-16 h-16 bg-[#8b5d3b] rounded-full flex items-center justify-center mx-auto mb-4">
                            <MapPin className=" text-white text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-[#333] mb-3">
                            Visit Our Bakery
                        </h3>
                        <p className="text-[#614b41]">
                            123 Bakery Street
                            <br />
                            New York, NY 10001
                            <br />
                            United States
                        </p>
                    </div>
                    <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                        <div className="w-16 h-16 bg-[#8b5d3b] rounded-full flex items-center justify-center mx-auto mb-4">
                            <Clock className="text-white text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-[#333] mb-3">
                            Opening Hours
                        </h3>
                        <p className="text-[#614b41]">
                            Monday - Friday: 7AM - 9PM
                            <br />
                            Saturday: 8AM - 7PM
                            <br />
                            Sunday: 8AM - 4PM
                        </p>
                    </div>
                    <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                        <div className="w-16 h-16 bg-[#8b5d3b] rounded-full flex items-center justify-center mx-auto mb-4">
                            <Phone className="text-white text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-[#333] mb-3">Get in Touch</h3>
                        <p className="text-[#614b41]">
                            Phone: +98 (41) 123-4567
                            <br />
                            Email: info@bakery.com
                            <br />
                            <span className="text-sm">Response within 24 hours</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Contact Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Form */}
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-[#333] mb-6">
                            Send Us a Message
                        </h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="firstName"
                                        className="block text-[#333] font-medium mb-2"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="w-full px-4 py-3 rounded-lg border-none bg-[#f5f0e8] focus:outline-none text-[#333]"
                                        placeholder="John"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="lastName"
                                        className="block text-[#333] font-medium mb-2"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className="w-full px-4 py-3 rounded-lg border-none bg-[#f5f0e8] focus:outline-none text-[#333]"
                                        placeholder="Doe"
                                        required
                                    />
                                </div>
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
                                    name="email"
                                    className="w-full px-4 py-3 rounded-lg border-none bg-[#f5f0e8] focus:outline-none text-[#333]"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-[#333] font-medium mb-2"
                                >
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="w-full px-4 py-3 rounded-lg border-none bg-[#f5f0e8] focus:outline-none text-[#333]"
                                    placeholder="+1 (555) 123-4567"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-[#333] font-medium mb-2"
                                >
                                    Subject
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-3 rounded-lg border-none bg-[#f5f0e8] focus:outline-none text-[#333] appearance-none cursor-pointer"
                                    required
                                >
                                    <option value="">Select a subject</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="order">Order Related</option>
                                    <option value="catering">Catering Services</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="other">Other</option>
                                </select>
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
                                    name="message"
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg border-none bg-[#f5f0e8] focus:outline-none text-[#333] resize-none"
                                    placeholder="How can we help you?"
                                    required
                                    maxLength={500}
                                ></textarea>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="privacy"
                                    name="privacy"
                                    className="mr-2 h-4 w-4 text-[#8b5d3b] focus:ring-[#8b5d3b] border-gray-300 rounded"
                                    required
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
                    {/* Additional Information */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h3 className="text-2xl font-bold text-[#333] mb-4">
                                Connect With Us
                            </h3>
                            <p className="text-[#614b41] mb-6">
                                Follow us on social media for daily updates, behind-the-scenes
                                content, and special offers.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="w-12 h-12 bg-[#8b5d3b] rounded-full flex items-center justify-center text-white hover:bg-[#7a4e32] transition duration-300"
                                >
                                    <Facebook className="text-xl" />
                                </a>
                                <a
                                    href="#"
                                    className="w-12 h-12 bg-[#8b5d3b] rounded-full flex items-center justify-center text-white hover:bg-[#7a4e32] transition duration-300"
                                >
                                    <Instagram className="text-xl" />
                                </a>
                                <a
                                    href="#"
                                    className="w-12 h-12 bg-[#8b5d3b] rounded-full flex items-center justify-center text-white hover:bg-[#7a4e32] transition duration-300"
                                >
                                    <Twitter className="text-xl" />
                                </a>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h3 className="text-2xl font-bold text-[#333] mb-4">
                                Frequently Asked Questions
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-[#333] mb-2">
                                        Do you offer catering services?
                                    </h4>
                                    <p className="text-[#614b41]">
                                        Yes, we provide catering services for events of all sizes.
                                        Contact us for details.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-[#333] mb-2">
                                        Can I place a custom order?
                                    </h4>
                                    <p className="text-[#614b41]">
                                        Absolutely! We love creating custom orders. Please contact
                                        us at least 48 hours in advance.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-[#333] mb-2">
                                        Do you deliver?
                                    </h4>
                                    <p className="text-[#614b41]">
                                        Yes, we offer delivery within a 15-mile radius of our
                                        bakery.
                                    </p>
                                </div>
                            </div>
                            <a
                                href="#"
                                className="inline-block mt-4 text-[#8b5d3b] hover:text-[#7a4e32]"
                            >
                                View all FAQs <i className="fas fa-arrow-right ml-1"></i>
                            </a>
                        </div>
                        <div className="bg-[#f5f0e8] rounded-lg p-8 text-center">
                            <div className="w-16 h-16 bg-[#8b5d3b] rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail className="text-white text-2xl" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#333] mb-4">
                                Newsletter
                            </h3>
                            <p className="text-[#614b41] mb-4">
                                Subscribe to our newsletter for updates, special offers, and
                                baking tips.
                            </p>
                            <form className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="flex-1 px-4 py-4 rounded-l-full bg-white border-none focus:outline-none"
                                />
                                <button className="bg-[#8b5d3b] text-white px-6 py-2 rounded-r-full hover:bg-[#7a4e32] transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page