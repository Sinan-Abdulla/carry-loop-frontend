import React, { useState } from 'react';
import { toast } from 'sonner';
import ProductDrid from './ProductGrid';




const ProductDetails = () => {
    const selectedProduct = {
        name: "Stylish Jacket",
        description: "This is a stylish Jacket perfect for any occasion",
        price: 120,
        originalPrice: 150,
        brand: "FashionBrand",
        material: "Leather",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#7b1818", "#000000"],
        images: [
            {
                url: "https://picsum.photos/id/1015/600/600",
                altText: "Stylish Jacket 1"
            },
            {
                url: "https://picsum.photos/id/1016/600/600",
                altText: "Stylish Jacket 2"
            }
        ]
    };

    const similarProducts = [
        {
            _id: 1,
            name: "Product 1",
            price: 100,
            images: [{ url: "https://picsum.photos/500/500?random=2" }]
        },
        {
            _id: 2,
            name: "Product 2",
            price: 150,
            images: [{ url: "https://picsum.photos/500/500?random=3" }]
        },
        {
            _id: 3,
            name: "Product 3",
            price: 120,
            images: [{ url: "https://picsum.photos/500/500?random=4" }]
        },
        {
            _id: 4,
            name: "Product 4",
            price: 90,
            images: [{ url: "https://picsum.photos/500/500?random=5" }]
        }
    ];


    const [activeImage, setActiveImage] = useState(selectedProduct.images[0]);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            toast.error("Please select a size and color before adding to cart.", {
                duration: 1000,
            });
            return;
        }

        setIsButtonDisabled(true);

        setTimeout(() => {
            toast.success("Product added to cart!", {
                duration: 1000,
            });
            setIsButtonDisabled(false);
        }, 500);
    };

    return (


        <div className="p-6">

            <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-6">

                    {/* Thumbnails - Left for desktop */}
                    <div className="hidden md:flex flex-col space-y-4">
                        {selectedProduct.images.map((img, index) => (
                            <img
                                key={index}
                                src={img.url}
                                alt={img.altText}
                                onClick={() => setActiveImage(img)}
                                className={`w-20 h-20 object-cover cursor-pointer rounded border 
                  ${activeImage.url === img.url ? 'border-black' : 'border-gray-300'}`}
                            />
                        ))}
                    </div>

                    {/* Main Image */}
                    <div className="w-full md:w-[50%]">
                        <img
                            src={activeImage.url}
                            alt={activeImage.altText}
                            className="w-full h-[400px] object-cover rounded-lg"
                        />
                        {/* Thumbnails - Bottom for mobile */}
                        <div className="flex md:hidden space-x-4 mt-4 overflow-x-auto">
                            {selectedProduct.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img.url}
                                    alt={img.altText}
                                    onClick={() => setActiveImage(img)}
                                    className={`w-20 h-20 object-cover cursor-pointer rounded border 
                    ${activeImage.url === img.url ? 'border-black' : 'border-gray-300'}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>
                        <p className="text-gray-500 line-through text-sm">${selectedProduct.originalPrice}</p>
                        <p className="text-lg font-semibold text-black mb-2">${selectedProduct.price}</p>
                        <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

                        {/* Color */}
                        <div className="mb-4">
                            <p className="font-semibold mb-1">Color:</p>
                            <div className="flex space-x-2">
                                {selectedProduct.colors.map((color, idx) => (
                                    <span
                                        key={idx}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-6 h-6 rounded-full border-2 cursor-pointer transition duration-200 
                                        ${selectedColor === color ? 'ring-2 ring-black border-black' : 'border-gray-400'}`}
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>
                        </div>


                        <div className="mb-4">
                            <p className="text-gray-700 font-semibold">Size:</p>
                            <div className="flex gap-2 mt-2">
                                {selectedProduct.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-2 rounded border transition 
                                        ${selectedSize === size ? "bg-black text-white border-black" : "bg-white text-black border-gray-300"}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>


                        {/* Quantity */}
                        <div className="mb-4">
                            <p className="font-semibold mb-1">Quantity:</p>
                            <div className="flex items-center space-x-2">
                                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="border px-2">-</button>
                                <span>{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)} className="border px-2">+</button>
                            </div>
                        </div>

                        {/* Add to Cart */}
                        <button
                            onClick={handleAddToCart}
                            disabled={isButtonDisabled}
                            className={`w-full py-4 text-lg font-semibold mt-4 rounded-lg transition-all duration-200 ease-in-out
                            ${isButtonDisabled ? "bg-gray-500 cursor-not-allowed" : "bg-black text-white hover:bg-gray-800 hover:scale-[1.02] hover:shadow-lg"}`}
                        >
                            {isButtonDisabled ? "Adding..." : "ADD TO CART"}
                        </button>



                        {/* Characteristics */}
                        <div className="mt-6">
                            <h4 className="font-semibold mb-2">Characteristics:</h4>
                            <div className="grid grid-cols-2 text-sm text-gray-700 gap-y-1">
                                <p>Brand</p>
                                <p className="text-right">{selectedProduct.brand}</p>
                                <p>Material</p>
                                <p className="text-right">{selectedProduct.material}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20">

                <h2 className="text-2xl font-semibold text-center mb-12">
                    You May Also Like
                </h2>

                {/* Assuming ProductGrid is a custom component */}
                <ProductDrid product={similarProducts} />
            </div>

        </div>
    );
};

export default ProductDetails;

