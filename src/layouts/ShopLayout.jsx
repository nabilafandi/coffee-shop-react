import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { fetchCategoryData } from "../services/apiProduct";
import { useEffect, useState } from "react";

function ShopSidebar() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState({});


  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCategoryData();
        if (data.length === 0) {
          throw new Error("No categories found");
        }
        setData(data);
      } catch (err) {
        console.error("Error fetching category data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderCategories = (categories, isChild = false) => {
    return (
      <ul className={`text-xl font-bold font-mogena text-trippicalBlack transition-colors duration-200 ease-out hover:text-gray-800 ${isChild ? '' : ''}`}>
        {categories.map((category) => (
          <li className={`${isChild ? ' text-lg font-avenir font-normal' : 'mb-4'}`} key={category.id}>
            <div onClick={() => toggleExpand(category.id)} className="cursor-pointer">
              <NavLink
                to={`/shop/${category.id}`}
                className={({ isActive }) =>
                  isActive ? "text-logoRed font-bold" : ""
                }
              >
                {category.name}
              </NavLink>
            </div>
            {expanded[category.id] && category.child_ids.length > 0 && (
              <div className="">
                {renderCategories(category.child_ids, true)}
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  };

 
  return (
    <aside className="flex w-64 bg-offWhite text-white p-4 justify-center">
      <div className="w-full ml-20">
        <nav>{renderCategories(data)}</nav>
      </div>
    </aside>
  );
}

function ShopMain() {
  return (
    <main className="flex-1 bg-offWhite p-4 mx-14">
      <Outlet />
    </main>
  );
}

const ShopLayout = () => {
  return (
    <div className="flex min-h-screen">
      <ShopSidebar />
      <ShopMain />
    </div>
  );
};

export default ShopLayout;
