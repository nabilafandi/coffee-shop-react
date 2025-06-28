import { NavLink, useLocation } from "react-router-dom";
import { FaInstagram, FaUserCircle } from "react-icons/fa";
import { PiHandbag } from "react-icons/pi";

const navigations = [
  { id: "about", string: "About us", to: "/about" },
  { id: "shop", string: "Shop", to: "/shop" },
  { id: "locations", string: "Locations", to: "/locations" },
  { id: "promo", string: "Promo", to: "/promo" },
];

export default function DesktopNavbar(company) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // You can add your own login logic here if needed
  const odooLoginUrl = `${import.meta.env.VITE_ODOO_URL}/web/login`;
  const userProfileUrl = `${import.meta.env.VITE_ODOO_URL}/my/home`;
  return (
    <div className="hidden lg:flex w-full items-center justify-between">
      {/* Left: Logo and Navigation */}
      <div className="flex items-center gap-x-8">
        <a href="/" className="flex items-center justify-center w-14 h-14">
          <span className="flex items-center justify-center w-7 h-7">
            <img
              alt="Tripical Coffee Logo"
              src="/assets/Logo/LogoTripical.png"
              className="w-6 h-6 object-contain"
            />
          </span>
        </a>
        <div className="flex items-center gap-x-8">
          {navigations.map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "text-sm font-bold leading-6 text-logoRed"
                  : `text-sm leading-6 ${
                      isHomePage ? "text-trippicalWhite" : "text-trippicalBlack"
                    }`
              }
            >
              {item.string}
            </NavLink>
          ))}
        </div>
      </div>
      {/* Right: Icons */}
      <div className="flex items-center gap-4">
        <a
          href={userProfileUrl}
          className="text-sm font-semibold leading-6 text-logoRed"
        >
          <span className="flex items-center justify-center w-7 h-7">
            <FaUserCircle aria-hidden="true" className="w-6 h-6" />
          </span>
        </a>
        <a
          href="/cart"
          className="text-sm font-semibold leading-6 text-logoRed"
        >
          <span className="flex items-center justify-center w-7 h-7">
            <PiHandbag aria-hidden="true" className="w-6 h-6" />
          </span>
        </a>
        <a href= {company?.social?.instagram || "https://www.instagram.com/tripicalcoffee/?hl=en"} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold leading-6 text-logoRed">
          <span className="flex items-center justify-center w-7 h-7">
            <FaInstagram aria-hidden="true" className="w-6 h-6" />
          </span>
        </a>
      </div>
    </div>
  );
}
