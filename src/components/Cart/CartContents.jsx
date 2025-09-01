import React from 'react';
import { RiDeleteBin3Line } from 'react-icons/ri';

const CartContents = () => {
    const cartProducts = [
        {
            productId: 1,
            productName: 'Tshirt',
            price: 100,
            quantity: 1,
            image: 'https://picsum.photos/200?random=1',
        },
        {
            productId: 2,
            productName: 'Jeans',
            price: 200,
            quantity: 1,
            image: 'https://picsum.photos/200?random=2',
        },
    ];

    return (
        <div className="p-4">
            {cartProducts.map((product, index) => (
                <div key={index} className="flex items-start justify-between py-4 border-b">
                    <div className="flex items-start">
                        <img
                            src={product.image}
                            alt={product.productName}
                            className="w-20 h-24 object-cover mr-4 rounded"
                        />
                        <div>
                            <h3 className="font-semibold text-lg">{product.productName}</h3>
                            <p className="text-gray-600 text-sm">Price: ₹{product.price}</p>
                            <p className="text-gray-600 text-sm">Qty: {product.quantity}</p>
                            <div className="flex items-center mt-2">
                                <button className="border rounded px-2 py-1 text-xl font-medium cursor-pointer">
                                    -
                                </button>
                                <span className="mx-4">{product.quantity}</span>
                                <button className="border rounded px-2 py-1 text-xl ml-2 font-medium cursor-pointer">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <button className="mt-2 hover:text-red-700 transition cursor-pointer">
                            <RiDeleteBin3Line className="h-6 w-6 text-red-600" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartContents;
