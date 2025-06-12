import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { fetchProductListData } from "../services/apiProduct";

const ProductList = () => {
  const { category } = useParams(); // Get the category from the URL
  console.log("category", category);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await fetchProductListData(category);

        setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [category]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  
  const renderData = data.products.map((product) => (
    <li key={product.id} className="p-4 rounded-lg ">
      <NavLink to={`/shop/${category}/${product.id}`} className="text-blue-500">
        <div className="w-52 aspect-square overflow-hidden rounded-md bg-gray-200  group-hover:opacity-75 ">
          <img
            alt={product.name}
            src={product.images[0]?.image_url}
            className="h-full w-full object-cover object-center "
          />
        </div>
        <div>
          <p className="text-lg font-semibold text-trippicalBlack">
            {product.name}
          </p>
          <p className="text-lg font-semibold text-darkRed">
            IDR {Math.round(product.price / 1000)} {" / "}
            {Math.round(product.price / 1000)}
          </p>
        </div>
      </NavLink>
    </li>
  ));

  return (
    <div>
      <h2 className="text-2xl font-bold capitalize font-mogena text-trippicalBlack">
        {data.category}
      </h2>
      <ul className="grid grid-cols-3  mt-6 gap-2 w-4/2">{renderData}</ul>
    </div>
  );
};

export default ProductList;
