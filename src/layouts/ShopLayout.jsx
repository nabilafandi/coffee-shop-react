/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { fetchCategoryData } from "../services/apiProduct";
import { useEffect, useState } from "react";

// Horizontal scrollable categories for mobile
function MobileCategoryHeader({ data }) {
  return (
    <nav className="md:hidden w-full overflow-x-auto  py-2 px-2 flex space-x-4  border-b-2">
      {data.map((category) => (
        <NavLink
          key={category.id}
          to={`/shop/${category.id}`}
          className={({ isActive }) =>
            `whitespace-nowrap px-3 py-1 rounded-full font-bold font-mogena  transition-colors duration-200 ${
              isActive ? " text-logoRed" : "text-trippicalBlack"
            }`
          }
        >
          {category.name}
        </NavLink>
      ))}
    </nav>
  );
}

function ShopSidebar({ data }) {
  // Only show on desktop
  return (
    <aside className="hidden md:flex flex-col w-64 h-full bg-offWhite text-white p-4">
      <div className="w-full ml-20">
        <nav>
          <ul className="text-xl font-bold font-mogena text-trippicalBlack">
            {data.map((category) => (
              <li className="mb-4" key={category.id}>
                <NavLink
                  to={`/shop/${category.id}`}
                  className={({ isActive }) =>
                    `block whitespace-nowrap overflow-hidden text-ellipsis truncate ${
                      isActive ? "text-logoRed font-bold" : ""
                    }`
                  }
                >
                  {category.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

function ShopMain() {
  return (
    <main className="flex-1 p-4 md:mx-14 mx-2">
      <Outlet />
    </main>
  );
}

const ShopLayout = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCategoryData();
        if (data.length === 0) {
          throw new Error("No categories has been added yet.");
        }
        setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col md:flex-row min-h-screen relative">
      {/* Mobile horizontal category header */}
      <MobileCategoryHeader data={data} />
      {/* Desktop sidebar */}
      <ShopSidebar data={data} />
      <ShopMain />
    </div>
  );
};

export default ShopLayout;