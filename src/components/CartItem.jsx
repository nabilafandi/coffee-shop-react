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
        <ProductImage image={item.image} name={item.name} />
        <ProductInfo
          name={item.name}
          attributes={item.attributes}
          onRemove={() => onRemove(item.product_id, item.line_id, 0)}
        />
      </div>
      <div className="flex flex-col gap-3 self-start items-end min-w-[90px]">
        <QuantityControl
          quantity={item.quantity}
          onDecrement={handleDecrement}
          onIncrement={handleIncrement}
        />
        <ProductSubtotal subtotal={item.subtotal} />
      </div>
    </div>
  );
};

function ProductImage({ image, name }) {
  return (
    <img
      src={image.image_url}
      alt={name}
      className="w-16 h-16 object-cover rounded"
    />
  );
}

function ProductInfo({ name, attributes, onRemove }) {
  return (  
    <div>
      <div className="font-semibold">{name}</div>
      {attributes?.map((attr) => (
        <div key={attr.attribute_id} className="text-sm text-gray-600">
          {attr.attribute_name}: {attr.attribute_value_name}
        </div>
      ))}
      <div>
        <button
          onClick={onRemove}
          className="text-red-500 hover:underline text-sm"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

function QuantityControl({ quantity, onDecrement, onIncrement }) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onDecrement}
        className="px-2 py-1 bg-gray-200 rounded"
      >
        −
      </button>
      <span>{quantity}</span>
      <button
        onClick={onIncrement}
        className="px-2 py-1 bg-gray-200 rounded"
      >
        +
      </button>
    </div>
  );
}

function ProductSubtotal({ subtotal }) {
  return (
    <div className="text-sm text-darkRed text-right">
      IDR {subtotal?.toFixed(0)}
    </div>
  );
}

export default CartItem;
