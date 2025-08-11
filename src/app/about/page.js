import { Hand, Heart, Star, Wheat } from 'lucide-react'
import React from 'react'

function page() {
    return (
        <>
            { /* Hero Section */}
            <div className='relative'>
                <div className='w-full h-[600px] bg-cover bg-center bg-no-repeat'
                    style={{ backgroundImage: 'url(./images/about-hero.jpg)' }}>
                    <div className='absolute inset-0 bg-gradient-to-r from-[#f5f0e8] to-transparent'>
                        <div className="container mx-auto px-4 h-full flex items-center">
                            <div className="max-w-lg">
                                <h1 className="text-5xl font-bold text-[#333] mb-4">
                                    Our Story
                                </h1>
                                <p className="text-[#614b41] text-lg mb-6">
                                    Since 1995, we've been crafting artisanal breads and pastries
                                    with passion, tradition, and the finest ingredients. Every
                                    creation tells our story of dedication to quality and
                                    authentic baking.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Journey Section */}
            <div className="py-16 bg-[#f5f0e8]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-[#333] mb-6">
                                Our Journey
                            </h2>
                            <p className="text-[#614b41] mb-4">
                                What started as a small family bakery has grown into a beloved
                                destination for bread enthusiasts and pastry lovers. Our
                                commitment to quality and tradition remains unchanged, as we
                                continue to use time-honored recipes and techniques passed down
                                through generations.
                            </p>
                            <p className="text-[#614b41] mb-4">
                                Every morning, our master bakers arrive before dawn to prepare
                                fresh breads and pastries. We believe in the power of
                                handcrafted goods and the joy they bring to our community.
                            </p>
                            <button className="bg-[#8b5d3b] text-white px-6 py-2 rounded-full hover:bg-[#7a4e32] transition duration-300 !rounded-button whitespace-nowrap cursor-pointer mt-4">
                                EXPLORE OUR MENU
                            </button>
                        </div>
                        <div>
                            <img
                                src="./images/backer.jpg"
                                alt="Baker at work"
                                className="rounded-lg shadow-lg w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Values Section */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-[#333] text-center mb-12">
                        Our Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center justify-center text-center p-6">
                            <Wheat className="text-4xl text-[#8b5d3b] mb-4" />
                            <h3 className="text-xl font-bold text-[#333] mb-3">
                                Quality Ingredients
                            </h3>
                            <p className="text-[#614b41]">
                                We source the finest organic ingredients from local farmers and
                                trusted suppliers to ensure exceptional quality in every bite.
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center p-6">
                            <Hand className="text-4xl text-[#8b5d3b] mb-4" />
                            <h3 className="text-xl font-bold text-[#333] mb-3">
                                Artisanal Craft
                            </h3>
                            <p className="text-[#614b41]">
                                Each item is handcrafted with care and attention to detail,
                                following traditional methods that have stood the test of time.
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center p-6">
                            <Heart className="text-4xl text-[#8b5d3b] mb-4" />
                            <h3 className="text-xl font-bold text-[#333] mb-3">
                                Community Focus
                            </h3>
                            <p className="text-[#614b41]">
                                We're proud to be part of our local community, creating
                                gathering spaces and supporting local initiatives.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Meet Our Team Section */}
            <div className="py-16 bg-[#f5f0e8]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-[#333] text-center mb-12">
                        Meet Our Team
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <div className="h-80">
                                <img
                                    src="./images/John-Smith.jpg"
                                    alt="Master Baker"
                                    className="w-full h-full object-center"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-[#333] mb-2">
                                    John Smith
                                </h3>
                                <p className="text-[#8b5d3b] mb-3">Master Baker</p>
                                <p className="text-[#614b41]">
                                    10 years of experience in artisanal baking, specializing in
                                    sourdough breads.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <div className="h-80">
                                <img
                                    src="./images/Emma-Davis.jpg"
                                    alt="Head Pastry Chef"
                                    className="w-full h-full object-center"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-[#333] mb-2">
                                    Emma Davis
                                </h3>
                                <p className="text-[#8b5d3b] mb-3">Head Pastry Chef</p>
                                <p className="text-[#614b41]">
                                    Award-winning pastry chef with a passion for creating
                                    innovative desserts.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <div className="h-80">
                                <img
                                    src="./images/Michael-Chen.jpg"
                                    alt="Cake Specialist"
                                    className="w-full h-full object-center"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-[#333] mb-2">
                                    Michael Chen
                                </h3>
                                <p className="text-[#8b5d3b] mb-3">Cake Specialist</p>
                                <p className="text-[#614b41]">
                                    Expert in creating custom cakes and celebration desserts.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-[#333] text-center mb-12">
                        What Our Customers Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-[#f5f0e8] p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <Star className="text-[#8b5d3b]" />
                                <Star className="text-[#8b5d3b]" />
                                <Star className="text-[#8b5d3b]" />
                                <Star className="text-[#8b5d3b]" />
                                <Star className="text-[#8b5d3b]" />
                            </div>
                            <p className="text-[#614b41] mb-4">
                                "The best sourdough bread I've ever tasted! The crust is perfect
                                and the interior is so flavorful. This is now my go-to bakery."
                            </p>
                            <p className="font-bold text-[#333]">- Sarah M.</p>
                        </div>
                        <div className="bg-[#f5f0e8] p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <Star className="text-[#8b5d3b]" />
                                <Star className="text-[#8b5d3b]" />
                                <Star className="text-[#8b5d3b]" />
                                <Star className="text-[#8b5d3b]" />
                            </div>
                            <p className="text-[#614b41] mb-4">
                                "Their custom birthday cake exceeded our expectations. Not only
                                was it beautiful, but it tasted amazing. Thank you!"
                            </p>
                            <p className="font-bold text-[#333]">- David R.</p>
                        </div>
                        <div className="bg-[#f5f0e8] p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <Star className="text-[#8b5d3b]" />
                                <Star className="text-[#8b5d3b]" />
                                <Star className="text-[#8b5d3b]" />
                                <Star className="text-[#8b5d3b]" />
                                <Star className="text-[#8b5d3b]" />
                            </div>
                            <p className="text-[#614b41] mb-4">
                                "The croissants are absolutely divine! Perfectly flaky and
                                buttery. I'm transported to Paris with every bite."
                            </p>
                            <p className="font-bold text-[#333]">- Emily L.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page