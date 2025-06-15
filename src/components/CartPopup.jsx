import { useEffect, useState, useMemo } from "react";
import { fetchCart, buyAsGuest } from "../services/apiClient";
import { useNavigate } from "react-router-dom"; 

export const CartPopup = ({ onClose }) => {
  const [cart, setCart] = useState({ items: [], subTotal: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadCart = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchCart();
        console.log("fetchcart.", data);
        setCart(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadCart();
  }, []);

  const handleCheckout = () => {
    navigate("/cart")
  }
  const cartItems = useMemo(
    () =>
      cart.items.map((item) => (
        <li key={item.productVariantId || item.productId} className="flex py-6 items-center">
          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <img
              alt={item.productName}
              src={item.imageUrl}
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="ml-4 flex flex-1 flex-col">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>{item.productName}</h3>
              <p className="ml-4">{item.quantity}</p>
              <p className="ml-4">IDR {item.price}</p>
            </div>
            <p className="mt-1 text-sm text-gray-500">{item.variantName}</p>
          </div>
        </li>
      )),
    [cart.items]
  );

  if (loading) return <div>Loading cart...</div>;
  if (error) return <div>{error}</div>;
  if (!cart.items.length) return <div>Your cart is empty.</div>;

  return (
    <div className="absolute inset-0 flex items-center justify-center z-50">
      <div className="max-w-2xl bg-offWhite rounded-3xl shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-center mb-2">
            Item Added to your Cart!
          </div>
          <div>
            <div className="mb-5 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-trippicalBlack scrollbar-track-offWhite">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {cartItems}
              </ul>
            </div>
            <hr className="bg-trippicalBlack" />
            <div className="flex flex-row-reverse gap-5">
              <div className="text-lg text-logoRed">IDR {cart.subTotal}</div>
              <div className="text-lg font-bold text-trippicalBlack">
                Subtotal
              </div>
            </div>
            <div>
              {/* <button
                type="button"
                onClick={handleLoginToBuy}
                disabled={!cart.items.length}
                className={`text-white bg-logoRed font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ${
                  !cart.items.length ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Log in to buy
              </button>
              <button
                type="button"
                onClick={handleBuyAsGuest}
                disabled={!cart.items.length}
                className={`text-white bg-logoRed font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ${
                  !cart.items.length ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Buy as a guest
              </button> */}
              <button
                type="button"
                onClick={handleCheckout}
                className={`text-white bg-logoRed font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ${
                  !cart.items.length ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={onClose}
                className="text-logoRed bg-offWhite border border-logoRed font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


