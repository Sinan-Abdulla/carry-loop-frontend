import React from "react";
import whiteSweater from "../assets/assets/login.webp"; // ✅ Use actual image paths
import blackShirt from "../assets/assets/womens-collection.webp";    // or use placeholders if needed

const orders = [
    {
        id: "67540d3ca67b4a70e434e092",
        createdAt: "07/12/2024 14:24:20",
        shipping: "New York, USA",
        items: 1,
        price: 40,
        status: "Paid",
        image: whiteSweater,
    },
    {
        id: "67540ced3376121b361a0ed0",
        createdAt: "07/12/2024 14:23:01",
        shipping: "New York, USA",
        items: 5,
        price: 199.96,
        status: "Paid",
        image: blackShirt,
    },
];

const OrdersList = () => {
    return (
        <div className="w-full px-3">
            <h2 className="text-xl font-bold mb-6 text-gray-800 text-center">My Orders</h2>

            <div className="space-y-6">
                {orders.map((order) => (
                    <div
                        key={order.id}
                        className="flex items-center gap-6 p-4 border rounded-lg bg-white shadow-sm"
                    >
                        <img
                            src={order.image}
                            alt="Order product"
                            className="w-24 h-24 object-cover rounded-md"
                        />

                        <div className="flex-grow">
                            <p className="text-sm text-gray-700">
                                <span className="font-semibold">Order ID:</span> #{order.id}
                            </p>
                            <p className="text-sm text-gray-700 mt-1">
                                <span className="font-semibold">Created:</span> {order.createdAt}
                            </p>
                            <p className="text-sm text-gray-700 mt-1">
                                <span className="font-semibold">Shipping:</span> {order.shipping}
                            </p>
                            <p className="text-sm text-gray-700 mt-1">
                                <span className="font-semibold">Items:</span> {order.items}
                            </p>
                            <p className="text-sm text-gray-700 mt-1">
                                <span className="font-semibold">Price:</span> ${order.price.toFixed(2)}
                            </p>
                        </div>

                        <span className="px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
                            {order.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrdersList;
