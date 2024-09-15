/* eslint-disable react/prop-types */

const Product = ({ product }) => {
  return (
      <div key={product.id} className="group relative">
        <div className="w-full aspect-square overflow-hidden rounded-md bg-gray-200  group-hover:opacity-75 ">
          <img
            alt={product.imageAlt}
            src={product.photo_md}
            className="h-full w-full object-cover object-center "
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm font-semibold text-trippicalBlack">
              <a href={product.href}>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.name}
              </a>
            </h3>
            <p className="mt-1 text-sm text-trippicalBlack">{product.color}</p>
          <p className="text-sm font-semibold text-logoRed ">IDR {Math.round(product.min_sell_price / 1000) } / {Math.round(product.max_sell_price / 1000)} </p>
          </div>
        </div>
      </div>
  );
};
const ProductList = ({ items }) => {
  return (
    <div className="bg-offWhite">
      <div className="mx-auto max-w-2xl lg:max-w-full px-4 py-16 sm:px-6 sm:py-24 lg:pt-2">
        <h2 className="text-2xl font-mogena font-bold tracking-tight text-trippicalBlack">
        Coffee
        </h2>

        <div className="mt-6 grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-2 ">
          {items.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <Product product={item}/>

          ))}
        </div>
      </div>
    </div>
  );
};

export {ProductList, Product};
