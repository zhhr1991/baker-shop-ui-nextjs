
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <div
          className="w-full h-[600px] bg-cover bg-center"
          style={{
            backgroundImage: `url('./images/hero-image.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#f5f0e8] to-transparent">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-lg">
                <p className="text-[#8b5d3b] mb-2">
                  HANDCRAFTED WITH LOVE IN OUR ARTISAN KITCHEN
                </p>
                <h2 className="text-5xl font-bold text-[#333] mb-4">
                  Freshly Baked, <br />
                  Just for You!
                </h2>
                <p className="text-[#614b41] mb-6">
                  Discover freshly baked pastries made with premium ingredients
                  and traditional recipes. Our master bakers create each item
                  with passion, ensuring an unforgettable taste.
                </p>
                <button className="bg-[#8b5d3b] text-white px-8 py-3 rounded-full hover:bg-[#7a4e32] transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                  ORDER NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Why Choose Us Section */}
      <div className="py-16 bg-[#f5f0e8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#333] mb-3">
              Why Choose Us?
            </h2>
            <p className="text-[#614b41] max-w-2xl mx-auto">We use
              only the finest ingredients for our breads, pastries, and cakes.
              Every item is crafted by skilled artisans who are passionate about
              their craft. We believe in quality over quantity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img
                  src="./images/breads.jpg"
                  alt="Artisan Breads"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#333] mb-3">
                  Artisan Breads
                </h3>
                <p className="text-[#614b41] mb-4">
                  Handcrafted sourdough and specialty breads made with organic
                  flour and traditional fermentation methods. Our breads have
                  the perfect crust and soft, flavorful interior.
                </p>
                <button className="bg-[#8b5d3b] text-white px-6 py-2 rounded-full hover:bg-[#7a4e32] transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                  VIEW MENU
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img
                  src="./images/Pastries.jpg"
                  alt="Sweet Pastries"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#333] mb-3">
                  Sweet Pastries
                </h3>
                <p className="text-[#614b41] mb-4">
                  Delicate and buttery pastries that melt in your mouth. From
                  classic croissants to innovative seasonal creations, our
                  pastries are made fresh daily with premium ingredients.
                </p>
                <button className="bg-[#8b5d3b] text-white px-6 py-2 rounded-full hover:bg-[#7a4e32] transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                  VIEW MENU
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img
                  src="./images/Cacks.jpg"
                  alt="Custom Cakes"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#333] mb-3">
                  Custom Cakes
                </h3>
                <p className="text-[#614b41] mb-4">
                  Celebrate special moments with our custom-designed cakes. From
                  elegant wedding cakes to fun birthday creations, our pastry
                  chefs will bring your vision to life with exquisite taste.
                </p>
                <button className="bg-[#8b5d3b] text-white px-6 py-2 rounded-full hover:bg-[#7a4e32] transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                  VIEW MENU
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Visit Us Today Section */}
      <div className="py-16 bg-[#f5f0e8]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold text-[#333] mb-6">
                Visit Us Today
              </h2>
              <p className="text-[#614b41] mb-6">
                Located in the heart of downtown, our bakery offers a cozy and
                welcoming atmosphere. Enjoy our freshly baked treats with a cup
                of our specialty coffee.
              </p>
              <p className="text-[#614b41] mb-6">
                Open daily from 7am to 9pm. Special holiday hours may apply.
                Join us for breakfast, lunch, or an afternoon treat. We also
                offer catering services for special events.
              </p>
              <button className="bg-[#8b5d3b] text-white px-6 py-3 rounded-full hover:bg-[#7a4e32] transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                VISIT US TODAY
              </button>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <img
                src="./images/vafels.jpg"
                alt="Bakery Interior"
                className="rounded-lg w-full h-full object-cover object-top"
              />
              <img
                src="./images/cacke.jpg"
                alt="Bakery Products"
                className="rounded-lg w-full h-full object-cover object-top"
              />
              <img
                src="./images/dnots.jpg"
                alt="Artisan Bread"
                className="rounded-lg w-full h-full object-cover object-top"
              />
              <img
                src="./images/bread.jpg"
                alt="Custom Cake"
                className="rounded-lg w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>



      {/* Gallery Section */}
      <div className="py-16 bg-[#f5f0e8]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg">
              <img
                src="./images/makaron.jpg"
                alt="Macarons"
                className="w-full h-full object-cover object-top hover:scale-105 transition duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="./images/cackee.jpg"
                alt="Twisted Pastry"
                className="w-full h-full object-cover object-top hover:scale-105 transition duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="./images/korosan.jpg"
                alt="Berry Cake"
                className="w-full h-full object-cover object-top hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-6">
              <h3 className="text-2xl font-bold text-[#333] mb-4">
                Explore Baking
              </h3>
              <p className="text-[#614b41] mb-6">
                Join our baking classes and learn the secrets behind our
                delicious creations. From bread making to cake decorating, our
                expert bakers will guide you through every step.
              </p>
              <button className="bg-[#8b5d3b] text-white px-6 py-2 rounded-full hover:bg-[#7a4e32] transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                LEARN MORE
              </button>
            </div>
            <div className="text-center p-6">
              <h3 className="text-2xl font-bold text-[#333] mb-4">
                Instagram Baking
              </h3>
              <p className="text-[#614b41] mb-6">
                Follow us on Instagram for daily inspiration, behind-the-scenes
                content, and exclusive offers. Tag us in your photos to be
                featured on our page!
              </p>
              <button className="bg-[#8b5d3b] text-white px-6 py-2 rounded-full hover:bg-[#7a4e32] transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                FOLLOW US
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
