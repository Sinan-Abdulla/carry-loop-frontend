import React from "react";
import { Link } from "react-router-dom"; // make sure this is imported
import heroImg from "../../assets/assets/rabbit-hero.webp";

const Hero = () => {
    return (
        <section className="relative">
            <img
                src={heroImg}
                alt="Rabbit"
                className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
                loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-center justify-center">
                <div className="text-center text-white p-6">
                    <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">
                        Vacation <br /> Ready
                    </h1>
                    <p className="text-sm md:text-lg tracking-tighter mb-6">
                        Explore our vacation-ready outfits with fast worldwide shipping.
                    </p>
                    <Link
                        to="#"
                        className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg"
                    >
                        Shop Now
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
