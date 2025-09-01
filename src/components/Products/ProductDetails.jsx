import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import ProductGrid from './ProductGrid'; // ✅ fixed typo
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetails, fetchSimilarProducts } from "../../redux/slices/productSlice"; 
import { addToCart } from "../../redux/slices/cartSlice"; // ✅ ensure addToCart is imported

const ProductDetails = ({ productId }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { selectedProduct, loading, error, similarProducts } = useSelector((state) => state.products);
  const { user, guestId } = useSelector((state) => state.auth);

  const [activeImage, setActiveImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const productFetchId = productId || id;

  useEffect(() => {
    if (productFetchId) {
      dispatch(fetchProductDetails(productFetchId));
      dispatch(fetchSimilarProducts({ id: productFetchId }));
    }
  }, [dispatch, productFetchId]);

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setActiveImage(selectedProduct.images[0]);
    }
  }, [selectedProduct]);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select a size and color before adding to cart.", { duration: 1000 });
      return;
    }

    setIsButtonDisabled(true);

    dispatch(
      addToCart({
        productId: productFetchId,
        quantity,
        size: selectedSize,
        color: selectedColor,
        guestId,
        userId: user?._id,
      })
    )
      .then(() => {
        toast.success("Product added to cart!", { duration: 1000 });
      })
      .finally(() => {
        setIsButtonDisabled(false);
      });
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Error: {error}</p>;
  if (!selectedProduct) return <p className="text-center mt-10">Product not found.</p>;

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
                  ${activeImage?.url === img.url ? 'border-black' : 'border-gray-300'}`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="w-full md:w-[50%]">
            <img
              src={activeImage?.url}
              alt={activeImage?.altText}
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
                    ${activeImage?.url === img.url ? 'border-black' : 'border-gray-300'}`}
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

            {/* Size */}
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

      {/* Similar Products */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold text-center mb-12">You May Also Like</h2>
        <ProductGrid product={similarProducts} />
      </div>
    </div>
  );
};

export default ProductDetails;

