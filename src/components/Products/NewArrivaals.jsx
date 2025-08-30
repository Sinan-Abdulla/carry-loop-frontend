import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [newArrivals, setNewArrivals] = useState([]);

  // 🔹 Fetch New Arrivals
  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/new-arrivals`
        );
        setNewArrivals(response.data);
      } catch (error) {
        console.error("Failed to fetch new arrivals:", error);
      }
    };

    fetchNewArrivals(); // ✅ Call the function
  }, []);

  // 🔹 Scroll Handlers
  const handleScrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const handleScrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const updateScrollButton = () => {
    const container = scrollRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft + container.clientWidth < container.scrollWidth
    );
  };

  // 🔹 Scroll Button Updates
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButton);
      updateScrollButton();
    }
    return () => {
      container?.removeEventListener("scroll", updateScrollButton);
    };
  }, [newArrivals]);

  return (
    <section className="py-10">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway, freshly added to
          keep your wardrobe on the cutting edge of fashion.
        </p>

        {/* Scroll Buttons */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex space-x-2 z-10">
          {canScrollLeft && (
            <button
              onClick={handleScrollLeft}
              className="p-2 rounded border bg-white shadow text-black"
            >
              <FiChevronLeft className="text-2xl" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={handleScrollRight}
              className="p-2 rounded border bg-white shadow text-black"
            >
              <FiChevronRight className="text-2xl" />
            </button>
          )}
        </div>
      </div>

      {/* Scrollable Product Cards */}
      <div
        ref={scrollRef}
        className="container mx-auto overflow-x-auto scrollbar-hide flex space-x-6 px-4"
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-[70%] sm:min-w-[50%] md:min-w-[40%] lg:min-w-[25%] xl:min-w-[30%] relative rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-[400px] object-cover rounded-t-lg"
            />
            <div className="bg-black/60 backdrop-blur-md p-4 text-white rounded-b-lg">
              <Link to={`/product/${product.id}`} className="block">
                <h4 className="font-semibold text-lg">{product.name}</h4>
                <p className="mt-1 text-sm">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
