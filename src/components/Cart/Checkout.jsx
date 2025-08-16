import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PaypalButton from './PaypalButton';

const cart = {
    products: [
        {
            name: "Stylish Jacket",
            size: "M",
            color: "Black",
            price: 1,
            image: "https://picsum.photos/150?random=1"
        },
        {
            name: "Casual Sneakers",
            size: "42",
            color: "White",
            price: 2,
            image: "https://picsum.photos/150?random=2"
        }
    ],
    totalPrice: 195
};

const Checkout = () => {
    const navigate = useNavigate();
    const [checkoutId, setCheckoutId] = useState(null);

    const [shippingAddress, setShippingAddress] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        phone: ""
    });

    const handlePaymentSuccess = (details) => {
        console.log("Payment Successful", details);
        navigate("/order-confirmation");
    };

    const userEmail = "admin@example.com";

    const handleCreateCheckout = (e) => {
        e.preventDefault();

        const values = Object.values(shippingAddress);
        const allFilled = values.every((val) => val.trim() !== "");
        if (!allFilled) {
            alert("Please fill all required fields.");
            return;
        }

        const generatedId = "checkout_" + Math.random().toString(36).substr(2, 9);
        setCheckoutId(generatedId);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
            {/* Checkout Form */}
            <div>
                <h2 className="text-2xl font-bold mb-6">Checkout</h2>
                <form onSubmit={handleCreateCheckout} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            value={userEmail}
                            disabled
                            className="w-full border px-4 py-2 rounded bg-gray-100 cursor-not-allowed"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            value={shippingAddress.firstName}
                            onChange={(e) => setShippingAddress({ ...shippingAddress, firstName: e.target.value })}
                            className="w-full border px-4 py-2 rounded"
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last name"
                            value={shippingAddress.lastName}
                            onChange={(e) => setShippingAddress({ ...shippingAddress, lastName: e.target.value })}
                            className="w-full border px-4 py-2 rounded"
                            required
                        />
                    </div>

                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={shippingAddress.address}
                        onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
                        className="w-full border px-4 py-2 rounded"
                        required
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={shippingAddress.city}
                            onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                            className="w-full border px-4 py-2 rounded"
                            required
                        />
                        <input
                            type="text"
                            name="postalCode"
                            placeholder="Postal Code"
                            value={shippingAddress.postalCode}
                            onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: e.target.value })}
                            className="w-full border px-4 py-2 rounded"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="country"
                            placeholder="Country"
                            value={shippingAddress.country}
                            onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })}
                            className="w-full border px-4 py-2 rounded"
                            required
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            value={shippingAddress.phone}
                            onChange={(e) => setShippingAddress({ ...shippingAddress, phone: e.target.value })}
                            className="w-full border px-4 py-2 rounded"
                            required
                        />
                    </div>

                    <div className="mt-6">
                        {!checkoutId ? (
                            <button
                                type="submit"
                                className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
                            >
                                Continue to Payment
                            </button>
                        ) : (
                            <div>
                                <h3 className="text-lg mb-4">Pay with PayPal</h3>
                                <PaypalButton
  amount="2.35"
  currency="USD"
  onSuccess={handlePaymentSuccess}
  onError={(err) => {
    console.error("PayPal Error:", err);
    alert("Payment failed. Check console for details.");
  }}
/>



                            </div>
                        )}
                    </div>
                </form>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
                {cart.products.map((product, index) => (
                    <div key={index} className="flex items-center mb-4">
                        <img src={product.image} alt={product.name} className="w-16 h-16 rounded object-cover mr-4" />
                        <div>
                            <p className="font-medium">{product.name}</p>
                            <p className="text-sm text-gray-600">Size: {product.size}</p>
                            <p className="text-sm text-gray-600">Color: {product.color}</p>
                            <p className="text-sm text-gray-800 font-semibold">₹{product.price}</p>
                        </div>
                    </div>
                ))}
                <hr className="my-4" />
                <div className="flex justify-between text-lg font-semibold">
                    <span>Total:</span>
                    <span>₹{cart.totalPrice}</span>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
