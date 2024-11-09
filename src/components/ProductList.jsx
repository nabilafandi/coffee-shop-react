import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
// import dummyProducts from "../data/dummyProducts";

const CLASSIFICATION_ID = {
  drinks: 1107755,
  bites: 1107774,
  foodies: 1107418,
  desserts: 1107419,
};
const ProductList = () => {
  const { category } = useParams(); // Get the category from the URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_REACT_API_URL;
    console.log("started useeffect", apiUrl);
    console.log(CLASSIFICATION_ID[category]);
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get( apiUrl + `/products/classification/` + CLASSIFICATION_ID[category] );
        console.log('respomnse', response)
        setProducts(response.data.data.data); // Adjust based on API response structure
      } catch (error) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category]);
  console.log(products);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  // useEffect(() => {
  //   // Set the products based on the category from the URL
  //   if (dummyProducts[category]) {
  //     setProducts(dummyProducts[category]);
  //   }
  // }, [category]);

  return (
    <div>
      <h2 className="text-2xl font-bold capitalize font-mogena text-trippicalBlack">
        {category}
      </h2>
      <ul className="grid grid-cols-3  mt-6 gap-2 w-4/2">
        {products.map((product) => (
          <li key={product.id} className="p-4 rounded-lg ">
            <NavLink
              to={`/shop/${category}/${product.id}`}
              className="text-blue-500"
            >
              <div className="w-52 aspect-square overflow-hidden rounded-md bg-gray-200  group-hover:opacity-75 ">
                <img
                  alt={product.imageAlt}
                  src={product.photo_md}
                  className="h-full w-full object-cover object-center "
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-trippicalBlack">
                  {product.name}
                </p>
                <p className="text-lg font-semibold text-darkRed">
                  IDR {Math.round(product.min_sell_price / 1000)} {" / "}
                  {Math.round(product.max_sell_price / 1000)}
                </p>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
