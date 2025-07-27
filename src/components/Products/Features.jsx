import React from 'react'

const Features = () => {
    return (
        <div className="w-full py-30 bg-white border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

                {/* Item 1 */}
                <div>
                    <div className="text-3xl mb-3">
                        🛍️ {/* or use a HeroIcon */}
                    </div>
                    <h4 className="font-semibold text-sm md:text-base uppercase">Free International Shipping</h4>
                    <p className="text-gray-600 text-sm">On all orders over $100.00</p>
                </div>

                {/* Item 2 */}
                <div>
                    <div className="text-3xl mb-3">
                        🔄
                    </div>
                    <h4 className="font-semibold text-sm md:text-base uppercase">45 Days Return</h4>
                    <p className="text-gray-600 text-sm">Money back guarantee</p>
                </div>

                {/* Item 3 */}
                <div>
                    <div className="text-3xl mb-3">
                        💳
                    </div>
                    <h4 className="font-semibold text-sm md:text-base uppercase">Secure Checkout</h4>
                    <p className="text-gray-600 text-sm">100% secured checkout process</p>
                </div>
            </div>
        </div>

    )
}

export default Features
