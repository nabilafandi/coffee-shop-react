/* eslint-disable react/prop-types */
"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,

  // XMarkIcon,
} from "@heroicons/react/24/outline";
import { FaInstagram } from "react-icons/fa";

import {useLocation,  NavLink } from "react-router-dom";

const navigations = [ { id: "about", string: "About us", to: "/about", }, { id: "shop", string: "Shop", to: "/shop", }, { id: "locations", string: "Locations", to: "/locations", }, { id: "promo", string: "Promo", to: "/promo", }, ];
const NavigationLinks = ({ isDialog = false }) => {
  const location = useLocation();

  // Determine if the current route is the homepage
  const isHomePage = location.pathname === "/";

  if (!isDialog) {
    return (
      <div className="hidden lg:flex lg:gap-x-12">
        {navigations.map((item) => (
          <NavLink
            key={item.id}
            to={item.to}
            className={({ isActive }) =>
              isActive
                ? "text-sm font-bold leading-6 text-logoRed " 
                : `text-sm  leading-6  ${
                    isHomePage ? "text-trippicalWhite" : "text-trippicalBlack"
                  }`
            }
          >
            {item.string}
          </NavLink>
        ))}
      </div>
    );
  } else {
    return (
      <div className="-my-6 divide-y divide-gray-500/10 ">
        <div className="space-y-2 py-6">
          {navigations.map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-trippicalBlack hover:bg-gray-50"
            >
              {item.string}
            </NavLink>
          ))}
        </div>
      </div>
    );
  }
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-transparent  inset-x-0 top-0  z-50">
      <nav
        aria-label="Global"
        className="mx-auto flex  items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-trippicalWhite"
          >
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        <div className="flex lg:mr-10 lg:items-center justify-start">
          <a href="/" className="hidden lg:flex -m-1.5 p-1.5">
            <img
              alt=""
              src="/src/assets/Logo/LogoTripical.png"
              className="h-6 w-auto"
            />
          </a>
        </div>

        <NavigationLinks isDialog:false />
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-logoRed">
            <FaInstagram aria-hidden="true" className="h-6 w-6" />
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10 " />
        <DialogPanel className="fixed inset-y-0 left-0 z-10 w-1/2 overflow-y-auto bg-offWhite px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-md">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className=" text-trippicalWhite"
            >
              <img
                alt=""
                src="/src/assets/Logo/LogoTripical.png"
                className="h-6 w-auto"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <NavigationLinks isDialog />
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
