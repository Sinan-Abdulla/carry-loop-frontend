import React from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const NewArrivaals = () => {
    const newArrivals = [
        {
            id: 1,
            name: 'Product 1',
            price: 100,
            image: [
                {
                    url: 'https://picsum.photos/500/500/random=1',
                    altText: 'stylish jacket',
                },
            ]
        },
        {
            id: 2,
            name: 'Product 1',
            price: 100,
            image: [
                {
                    url: 'https://picsum.photos/500/500/random=2',
                    altText: 'stylish jacket',
                },
            ]
        },
        {
            id: 3,
            name: 'Product 1',
            price: 100,
            image: [
                {
                    url: 'https://picsum.photos/500/500/random=3',
                    altText: 'stylish jacket',
                },
            ]
        },
        {
            id: 4,
            name: 'Product 1',
            price: 100,
            image: [
                {
                    url: 'https://picsum.photos/500/500/random=4',
                    altText: 'stylish jacket',
                },
            ]
        },
        {
            id: 5,
            name: 'Product 1',
            price: 100,
            image: [
                {
                    url: 'https://picsum.photos/500/500/random=5',
                    altText: 'stylish jacket',
                },
            ]
        },
        {
            id: 6,
            name: 'Product 1',
            price: 100,
            image: [
                {
                    url: 'https://picsum.photos/500/500/random=6',
                    altText: 'stylish jacket',
                },
            ]
        },
        {
            id: 7,
            name: 'Product 1',
            price: 100,
            image: [
                {
                    url: 'https://picsum.photos/500/500/random=7',
                    altText: 'stylish jacket',
                },
            ]
        },
        {
            id: 8,
            name: 'Product 1',
            price: 100,
            image: [
                {
                    url: 'https://picsum.photos/500/500/random=8',
                    altText: 'stylish jacket',
                },
            ]
        },

    ]
    return (
        <section>
            <div className="container mx-auto text-center mb-10 relative">
                <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Discover the latest styles straight off the runway, freshly added to
                    keep your wardrobe on the cutting edge of fashion.
                </p>
                {/* Scroll Buttons */}
                <div className="absolute right-0 bottom-[30px] flex space-x-2">
                    <button className="p-2 rounded border bg-white text-black">
                        <FiChevronLeft className="text-2xl" />
                    </button>
                    <button className="p-2 rounded border bg-white text-black">
                        <FiChevronRight className="text-2xl" />
                    </button>
                </div>

            </div>
        </section>

    )
}

export default NewArrivaals
