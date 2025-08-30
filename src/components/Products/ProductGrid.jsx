import React from "react";
import { Link } from "react-router-dom";

const ProductGrid = ({ product }) => {
  return (
    <div className="my-20 px-4">
      {/* Section Heading */}
     

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {product.map((product) => (
          <Link key={product._id} to={`/product/${product._id}`} className="block group">
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200">
              <div className="w-full h-72 mb-4 overflow-hidden rounded">
                <img
                  src={product.images[0].url}
                  alt={product.images[0].altText || product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold mb-1 text-center">{product.name}</h3>
              <p className="text-gray-700 font-medium text-center">₹{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
