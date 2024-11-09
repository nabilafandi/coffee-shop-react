import { useState } from "react";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";

const QuantitySelector = ({
  initialQuantity = 1,
  min = 0,
  max = 1000,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrement = () => {
    if (quantity < max) {
      setQuantity(quantity + 1);
      onQuantityChange(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > min) {
      setQuantity(quantity - 1);
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <>
      <label className="text-sm font-bold">Quantity</label>
      <div className="flex items-center space-x-2 text-trippicalBlack">
        <button
          onClick={handleDecrement}
          className=""
          disabled={quantity <= min}
        >
          <CiSquareMinus size={26} className="text-trippicalBlack" />
        </button>
        <span className="">{quantity}</span>
        <button
          onClick={handleIncrement}
          className=""
          disabled={quantity >= max}
        >
          <CiSquarePlus size={26} className="text-trippicalBlack" />
        </button>
      </div>
    </>
  );
};

export default QuantitySelector