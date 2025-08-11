import Menu from '@/components/Menu'
import React from 'react'

function page() {
  return (
    <>
        {/* Hero Section */}
        <div className='relative h-[300px]'>
            <div 
                className='w-full h-full bg-cover bg-center'
                style={{
                    backgroundImage: `url('./images/menu-hero.jpg')`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#535250] to-transparent">
                    <div className="container mx-auto px-4 h-full flex items-center justify-center">
                        <div className="text-center text-white">
                            <h1 className="text-5xl font-bold mb-4">Our Menu</h1>
                            <p className="text-xl">
                                Discover our handcrafted selection of breads, pastries, and
                                cakes
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Menu />
    </>
  )
}

export default page