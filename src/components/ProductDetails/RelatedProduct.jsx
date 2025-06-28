/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
const formatPrice = (price) => Math.round(price / 1000);

export const RelatedProduct = ({ product }) => (
  <div>
    <Link
      key={product.id}
      to={`/shop/relatedproduct/${product.id}`}
      className="block"
    >
      <div className="w-full aspect-square overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
        <img
          alt={product.name}
          src={product.images[0]?.image_url}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div>
        <p className="text-lg font-semibold text-trippicalBlack">
          {product.name}
        </p>
        <p className="text-lg font-semibold text-darkRed">
          IDR {formatPrice(product.price)} / {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  </div>
);
