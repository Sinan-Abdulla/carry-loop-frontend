import React from 'react'

const CartContenets = () => {
    const cartProducts = [
        {
            productId: 1,
            productName: 'Tshirt',
            price: 100,
            quantity: 1,
            image: "https://picsum.photos/200?random=1",
        },
        {
            productId: 2,
            productName: 'jeans',
            price: 200,
            quantity: 1,
            image: "https://picsum.photos/200?random=2",
        },
    ];
    return (
        <div className="p-4">
            {cartProducts.map((product, index) => (
                <div key={index} className="flex items-start justify-between py-4 border-b">
                    {/* Left section: Image + product info */}
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
                        </div>
                    </div>

                    {/* Optional Right section: Remove or update buttons */}
                    {/* <button className="text-red-500 hover:underline">Remove</button> */}
                </div>
            ))}
        </div>
    )
}

export default CartContenets
