/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { fetchCategoryData } from "../services/apiProduct";
import { useEffect, useState } from "react";
import { IoChevronBack } from "react-icons/io5";

// Horizontal scrollable categories for mobile
function MobileCategoryHeader({ data }) {
  const [navStack, setNavStack] = useState([{ categories: data, parent: null, label: null }]);
  const current = navStack[navStack.length - 1];

  const handleCategoryClick = (category) => {
    if (category.child_ids && category.child_ids.length > 0) {
      setNavStack((prev) => [
        ...prev,
        { categories: category.child_ids, parent: prev[prev.length - 1], label: category.name },
      ]);
    } else {
      // If no children, reset navStack to top level (optional)
      // setNavStack([{ categories: data, parent: null, label: null }]);
    }
    // No preventDefault! Let NavLink handle navigation
  };

  const handleBack = () => {
    setNavStack((prev) => prev.length > 1 ? prev.slice(0, -1) : prev);
  };

  return (
    <>
      <nav className="md:hidden w-full overflow-x-auto py-2 px-2 flex items-center space-x-4 border-b-2">
        {navStack.length > 1 && (
          <button
            className="flex items-center px-2 py-1 rounded-full text-trippicalBlack"
            onClick={handleBack}
          >
            <IoChevronBack className="mr-1" />
          </button>
        )}
        {current.categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/shop/${category.id}`}
            className={({ isActive }) =>
              `whitespace-nowrap px-3 py-1 rounded-full font-bold font-mogena transition-colors duration-200 ${
                isActive ? "text-logoRed" : "text-trippicalBlack"
              }`
            }
            onClick={() => handleCategoryClick(category)}
          >
            {category.name}
            {category.child_ids && category.child_ids.length > 0 && (
              <span className="ml-2">▶</span>
            )}
          </NavLink>
        ))}
      </nav>
    </>
  );
}
function CategoryList({ categories, level = 0 }) {
  return (
    <ul
      className={`text-xl font-bold font-mogena text-trippicalBlack ${
        level > 0 ? "ml-1  border-gray-200 " : ""
      }`}
    >
      {categories.map((category) => (
        <li className="mb-5" key={category.id}>
          <NavLink
            to={`/shop/${category.id}`}
            className={({ isActive }) =>
              `block whitespace-nowrap overflow-hidden text-ellipsis truncate ${
                isActive ? "text-logoRed font-bold" : ""} ${
                level > 0 ? "pl-5" : ""}`
            }
          >
            {category.name}
          </NavLink>
          {category.child_ids && category.child_ids.length > 0 && (
            <CategoryList categories={category.child_ids} level={level + 1} />
          )}
        </li>
      ))}
    </ul>
  );
}

function ShopSidebar({ data }) {
  // Only show on desktop
  return (
    <aside className="hidden md:flex flex-col w-64 h-full bg-offWhite text-white p-4">
      <div className="w-full ml-4">
        <nav>
          <CategoryList categories={data} />
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