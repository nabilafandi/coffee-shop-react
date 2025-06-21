/* eslint-disable react/prop-types */
const formatPrice = (price) => Math.round(price / 1000);

export const ProductInfo = ({ product }) => (
  <div>
    <h1 className="text-3xl font-mogena text-trippicalBlack">{product.name}</h1>
    <p className="text-lg text-logoRed">
      IDR {formatPrice(product.price)} / {formatPrice(product.price)}
    </p>
    <div
      className="text-md text-trippicalBlack mt-5"
      dangerouslySetInnerHTML={{
        __html: product.description || "",
      }}
    />
  </div>
);
