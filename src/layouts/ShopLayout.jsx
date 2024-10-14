import { Outlet } from "react-router-dom";

import { NavLink } from "react-router-dom";

function ShopSidebar() {
  return (
    <aside className="flex w-64 bg-offWhite text-white p-4 justify-center">
    <div>
      <nav>
        <ul className="text-xl font-bold font-mogena text-trippicalBlack transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:">
          <li className="mb-4">
            <NavLink
              to="/shop/drinks"
              className={({ isActive }) =>
                isActive ? "text-logoRed font-bold" : ""
              }
            >
              Drinks
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/shop/bites"
              className={({ isActive }) =>
                isActive ? "text-logoRed font-bold" : ""
              }
            >
              Bites
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/shop/foodies"
              className={({ isActive }) =>
                isActive ? "text-logoRed font-bold" : ""
              }
            >
              Foodies
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/shop/desserts"
              className={({ isActive }) =>
                isActive ? "text-logoRed font-bold" : ""
              }
            >
              Desserts
            </NavLink>
          </li>
        </ul>
      </nav>
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
