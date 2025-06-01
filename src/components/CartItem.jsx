/* eslint-disable react/prop-types */
const CartItem = ({ item, onQuantityChange, onRemove }) => {
  const handleDecrement = () => {
    if (item.quantity > 1) {
      onQuantityChange(item.product_id, item.line_id, item.quantity - 1);
    }
  };

  const handleIncrement = () => {
    onQuantityChange(item.product_id, item.line_id, item.quantity + 1);
  };

  return (
    <div className="flex items-center justify-between border-b py-3">
      <div className="flex items-center gap-4">
        <img
          src={item.image.image_url}
          alt={item.name}
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <div className="font-semibold">{item.name}</div>
          <div className="text-sm text-gray-500">
            Rp {item.subtotal?.toFixed(2)}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={handleDecrement}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          −
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={handleIncrement}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          +
        </button>
      </div>

      <div className="text-right">
        <button
          onClick={() => onRemove(item.product_id, item.line_id, 0)}
          className="text-red-500 hover:underline text-sm"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
