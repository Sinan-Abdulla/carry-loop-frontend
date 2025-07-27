import React from "react";
import featured from "../../assets/assets/featured.webp"; // update the path to your image

const FeaturedCollection = () => {
    return (
        <section className="w-full my-10 px-4">
            <div className="flex flex-col-reverse lg:flex-row items-center bg-[#f1f5f9] rounded-3xl overflow-hidden">

                {/* ✅ Text Content — goes below image on small screens */}
                <div className="w-full lg:w-1/2 p-6 lg:p-10 text-center lg:text-left">
                    <p className="text-sm text-gray-600 mb-2">Comfort and Style</p>
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                        Apparel made for your everyday life
                    </h2>
                    <p className="text-gray-700 mb-6">
                        Discover high-quality, comfortable clothing that effortlessly blends fashion and function.
                        Designed to make you look and feel great every day.
                    </p>
                    <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
                        Shop Now
                    </button>
                </div>

                {/* ✅ Image — appears above on mobile, left on desktop */}
                <div className="w-full lg:w-1/2">
                    <img
                        src={featured}
                        alt="Featured"
                        className="w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default FeaturedCollection;
