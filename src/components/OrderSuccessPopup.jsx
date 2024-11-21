const OrderSuccessPopup = ({ onClose, order }) => {
  console.log('ordersuccess', order)
  return (
    <div className="absolute inset-0 flex items-center justify-center z-50">
      <div className="max-w-2xl bg-offWhite rounded-3xl shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-center mb-2">
            Order Success!
          </div>
          <div className="text-center">
            <p>Your order has been placed successfully.</p>
            <p>Order ID: {order.order_no}</p>
            <button
              type="button"
              onClick={onClose}
              className="text-white bg-logoRed font-medium rounded-full text-sm px-5 py-2.5 mt-4"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPopup;
