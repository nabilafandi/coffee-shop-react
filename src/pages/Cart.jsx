import { getCart, updateCartItem } from "../services/cartApi";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const paymentLink = {
  dev: import.meta.env.VITE_ODOO_URL,
  prod: "http://145.79.13.25:8069",
};

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleQuantityChange = async (productId, lineId, newQty) => {
    await updateCartItem(productId, lineId, newQty);
    fetchCart();
  };
  const handleRemove = async (productId, lineId, newQty) => {
    await updateCartItem(productId, lineId, newQty);
    fetchCart();
  };
  const fetchCart = async () => {
    setLoading(true);
    const data = await getCart();
    setCart(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  if (loading) return <p>Loading cart...</p>;

  return (
    <div className="max-w-8xl mx-auto p-2 md:p-8 overflow-x-hidden w-full">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      {cart?.lines?.length === 0 ? (
        <div className="rounded-lg shadow p-8 text-center text-gray-500">
          Your cart is empty.
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1 w-full">
            <div className="rounded-lg  p-2 md:p-4">
              {cart.lines.map((item) => (
                <CartItem
                  key={item.line_id}
                  item={item}
                  onQuantityChange={handleQuantityChange}
                  onRemove={handleRemove}
                />
              ))}
            </div>
          </div>
          {/* Cart Summary */}
          <div className="w-full md:w-80">
            <div className="rounded-lg shadow p-4 md:p-6 sticky top-8 border border-gray-200 bg-opacity-80 backdrop-blur">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span>IDR {cart.total?.toLocaleString("id-ID")}</span>
              </div>
              {/* Add more summary rows here if needed */}
              <div className="border-t my-4"></div>
              <div className="flex justify-between font-bold text-lg mb-6">
                <span>Total</span>
                <span>IDR {cart.total?.toLocaleString("id-ID")}</span>
              </div>
              <button
                onClick={() =>
                  (window.location.href = `${paymentLink.dev}/shop/cart`)
                }
                className="w-full py-3 rounded-full bg-logoRed text-white font-semibold hover:bg-red-600 transition"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
