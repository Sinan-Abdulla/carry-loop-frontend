import React from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';

const orderConfirmation = () => {
    const orderData = {
        orderNumber: "ORD-12345",
        orderDate: "January 15, 2025",
        customer: {
          name: "Sarah Johnson",
          email: "sarah.johnson@email.com"
        },
        shippingAddress: {
          name: "Sarah Johnson",
          street: "123 Main Street, Apt 4B",
          city: "New York, NY 10001",
          country: "United States"
        },
        billingAddress: {
          name: "Sarah Johnson",
          street: "123 Main Street, Apt 4B",
          city: "New York, NY 10001",
          country: "United States"
        },
        items: [
          {
            id: 1,
            image: "https://images.unsplash.com/photo-1648483098902-7af8f711498f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHQtc2hpcnQlMjBwcm9kdWN0fGVufDF8fHx8MTc1Njk0NTMxNXww&ixlib=rb-4.1.0&q=80&w=1080",
            name: "Classic White T-Shirt",
            size: "M",
            quantity: 2,
            unitPrice: 24.99,
            total: 49.98
          },
          {
            id: 2,
            image: "https://images.unsplash.com/photo-1564400143653-f881883b52df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW5pbSUyMGplYW5zJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzU3MDIyODE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
            name: "Premium Denim Jeans",
            size: "32/32",
            quantity: 1,
            unitPrice: 89.99,
            total: 89.99
          },
          {
            id: 3,
            image: "https://images.unsplash.com/photo-1622760807301-4d2351a5a942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHNob2VzJTIwcHJvZHVjdHxlbnwxfHx8fDE3NTcwMDIxMDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
            name: "Urban Runner Sneakers",
            size: "9",
            quantity: 1,
            unitPrice: 129.99,
            total: 129.99
          }
        ],
        subtotal: 269.96,
        shipping: 9.99,
        tax: 22.40,
        discount: -15.00,
        grandTotal: 287.35,
        shippingMethod: "Standard Shipping",
        estimatedDelivery: "January 22-24, 2025"
      };
    
    return (
        <div className="min-h-screen bg-background p-8">
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-lg shadow-sm">
            {/* Header */}
            <div className="px-8 py-6 border-b border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <span className="text-white font-medium ">S</span>
                  </div>
                  <div>
                    <h1 className="text-primary">StyleShop</h1>
                    <p className="text-muted-foreground text-sm">Premium Fashion Store</p>
                  </div>
                </div>
                <Badge variant="secondary" className="px-4 py-2">
                  Order Confirmed
                </Badge>
              </div>
              <div className="mt-6">
                <h2 className="text-primary mb-2">Order Confirmation</h2>
                <p className="text-muted-foreground">Thank you for your purchase! Your order has been confirmed and will be shipped soon.</p>
              </div>
            </div>
    
            {/* Order & Customer Info */}
            <div className="px-8 py-6 border-b border-border">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-primary mb-4">Order Details</h3>
                  <div className="space-y-2">
                    <div>
                      <span className="text-muted-foreground">Order Number:</span>
                      <p className="font-medium">{orderData.orderNumber}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Order Date:</span>
                      <p className="font-medium">{orderData.orderDate}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Customer:</span>
                      <p className="font-medium">{orderData.customer.name}</p>
                      <p className="text-sm text-muted-foreground">{orderData.customer.email}</p>
                    </div>
                  </div>
                </div>
    
                <div>
                  <h3 className="text-primary mb-4">Shipping Address</h3>
                  <div className="space-y-1">
                    <p className="font-medium">{orderData.shippingAddress.name}</p>
                    <p className="text-muted-foreground">{orderData.shippingAddress.street}</p>
                    <p className="text-muted-foreground">{orderData.shippingAddress.city}</p>
                    <p className="text-muted-foreground">{orderData.shippingAddress.country}</p>
                  </div>
                </div>
    
                <div>
                  <h3 className="text-primary mb-4">Billing Address</h3>
                  <div className="space-y-1">
                    <p className="font-medium">{orderData.billingAddress.name}</p>
                    <p className="text-muted-foreground">{orderData.billingAddress.street}</p>
                    <p className="text-muted-foreground">{orderData.billingAddress.city}</p>
                    <p className="text-muted-foreground">{orderData.billingAddress.country}</p>
                  </div>
                </div>
              </div>
            </div>
    
            {/* Order Summary Table */}
            <div className="px-8 py-6 border-b border-border">
              <h3 className="text-primary mb-6">Order Summary</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 text-muted-foreground font-medium">Product</th>
                      <th className="text-left py-3 text-muted-foreground font-medium">Quantity</th>
                      <th className="text-right py-3 text-muted-foreground font-medium">Unit Price</th>
                      <th className="text-right py-3 text-muted-foreground font-medium">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderData.items.map((item) => (
                      <tr key={item.id} className="border-b border-border">
                        <td className="py-4">
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                              <ImageWithFallback 
                                src={item.image} 
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4">
                          <span className="px-3 py-1 bg-muted rounded-md">{item.quantity}</span>
                        </td>
                        <td className="py-4 text-right">${item.unitPrice.toFixed(2)}</td>
                        <td className="py-4 text-right font-medium">${item.total.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
    
            {/* Payment Summary & Shipping */}
            <div className="px-8 py-6 border-b border-border">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-primary mb-4">Shipping Method</h3>
                  <div className="bg-muted rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{orderData.shippingMethod}</span>
                      <span className="text-muted-foreground">${orderData.shipping.toFixed(2)}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Estimated Delivery: {orderData.estimatedDelivery}
                    </p>
                  </div>
                </div>
    
                <div>
                  <h3 className="text-primary mb-4">Payment Summary</h3>
                  <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>${orderData.subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping:</span>
                        <span>${orderData.shipping.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-green-600">
                        <span>Discount:</span>
                        <span>${orderData.discount.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax:</span>
                        <span>${orderData.tax.toFixed(2)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-medium text-lg">
                        <span>Grand Total:</span>
                        <span className="text-primary">${orderData.grandTotal.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            {/* Footer */}
            <div className="px-8 py-6 bg-muted/30 rounded-b-lg">
              <div className="text-center mb-6">
                <h3 className="text-primary mb-2">Thank You for Your Order!</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We appreciate your business. You'll receive a shipping confirmation email with tracking 
                  information once your order has been dispatched.
                </p>
              </div>
    
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-medium mb-2">Track Your Order</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Use your order number to track your package
                  </p>
                  <a href="#" className="text-primary hover:underline text-sm font-medium">
                    Track Order →
                  </a>
                </div>
    
                <div>
                  <h4 className="font-medium mb-2">Customer Support</h4>
                  <p className="text-sm text-muted-foreground mb-1">
                    Email: support@styleshop.com
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Phone: 1-800-STYLE-01
                  </p>
                </div>
    
                <div>
                  <h4 className="font-medium mb-2">Return Policy</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    30-day hassle-free returns
                  </p>
                  <a href="#" className="text-primary hover:underline text-sm font-medium">
                    Learn More →
                  </a>
                </div>
              </div>
    
              <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
                <p>StyleShop • Premium Fashion Store • Est. 2020</p>
                <p className="mt-1">Questions? Contact us at support@styleshop.com or 1-800-STYLE-01</p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default orderConfirmation
