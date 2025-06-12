import { getCart, updateCartItem } from "../services/cartApi";
import CartItem from "../components/CartItem";
import { useEffect, useState, useMemo } from "react";

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

  console.log("Cart component rendered", cart);

  if (loading) return <p>Loading cart...</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      {cart?.lines?.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.lines.map((item) => (
            <CartItem
              key={item.line_id}
              item={item}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemove}
            />
          ))}
          <div className="text-right mt-4 font-semibold text-xl">
            Total: Rp {cart.total?.toFixed(2)}
          </div>
          <div className="text-right mt-4">
            <button
              onClick={() => window.location.href = `${import.meta.env.VITE_ODOO_URL}/shop/cart`}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Pay Now
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
