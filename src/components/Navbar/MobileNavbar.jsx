import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaUserCircle } from "react-icons/fa";
import { PiHandbag } from "react-icons/pi";

const navigations = [
  { id: "about", string: "About us", to: "/about" },
  { id: "shop", string: "Shop", to: "/shop" },
  { id: "locations", string: "Locations", to: "/locations" },
  { id: "promo", string: "Promo", to: "/promo" },
];

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  // You can add your own login logic here if needed
  const odooLoginUrl = `${import.meta.env.VITE_ODOO_URL}/web/login`;
  const userProfileUrl = `${import.meta.env.VITE_ODOO_URL}/my/home`;

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-trippicalWhite"
      >
        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
      </button>
      <Dialog open={open} onClose={() => setOpen(false)} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 left-0 z-10 w-3/4 max-w-xs overflow-y-auto bg-offWhite px-6 py-6 shadow-md">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5 flex items-center">
              <img
                alt="Tripical Coffee Logo"
                src="/assets/Logo/LogoTripical.png"
                className="h-6 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-md p-2.5 text-gray-700"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6">
            <div className="space-y-2">
              {navigations.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-trippicalBlack hover:bg-gray-50"
                >
                  {item.string}
                </NavLink>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-8">
              <a
                href={userProfileUrl}
                className="text-logoRed"
              >
                <FaUserCircle aria-hidden="true" className="h-6 w-6" />
              </a>
              <a href="/cart" className="text-logoRed">
                <PiHandbag aria-hidden="true" className="h-6 w-6" />
              </a>
              <a href="#" className="text-logoRed">
                <FaInstagram aria-hidden="true" className="h-6 w-6" />
              </a>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
}