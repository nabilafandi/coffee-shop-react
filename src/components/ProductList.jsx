/* eslint-disable react/prop-types */

const Product = ({ product }) => {
  return (
    <div key={product.id} className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200  group-hover:opacity-75 ">
        <img
          alt={product.imageAlt}
          src={product.imageSrc}
          className="h-full w-full object-cover object-center "
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price}</p>
      </div>
    </div>
  );
};
const ProductList = ({ items }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {items.name}
        </h2>

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 ">
          {items.products.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <Product product={item}/>

          ))}
        </div>
      </div>
    </div>
  );
};

export {ProductList, Product};
