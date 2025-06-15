import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { fetchCategoryData } from "../services/apiProduct";
import { useEffect, useState } from "react";

function ShopSidebar({ isOpen, onClose }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCategoryData();
        if (data.length === 0) {
          throw new Error("No categories has been added yet.");
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
  if (error) return <p>{error}</p>;

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
                onClick={onClose}
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

  // Sidebar overlay for mobile
  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-30 transition-opacity duration-300 md:hidden ${isOpen ? "block" : "hidden"}`}
        onClick={onClose}
      />
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-offWhite text-white p-4 z-40 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:static md:translate-x-0 md:flex md:w-64 md:h-auto
          flex
        `}
      >
        <div className="w-full ml-0 md:ml-20">
          {/* Close button for mobile */}
          <button
            className="md:hidden mb-4 text-trippicalBlack"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            ✕
          </button>
          <nav>{renderCategories(data)}</nav>
        </div>
      </aside>
    </>
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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen relative">
      {/* Hamburger for mobile */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-offWhite p-2 rounded shadow"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 7h20M4 14h20M4 21h20" />
        </svg>
      </button>
      <ShopSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <ShopMain />
    </div>
  );
};

export default ShopLayout;