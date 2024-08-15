"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
} from "@headlessui/react";
import {
  Bars3Icon,

  // XMarkIcon,
} from "@heroicons/react/24/outline";
import { FaInstagram } from "react-icons/fa";


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-transparent  inset-x-0 top-0  z-50">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        
        <div className="flex lg:mr-10 lg:items-center justify-start">
          <a href="#" className="hidden lg:flex -m-1.5 p-1.5">
            <img
              alt=""
              src="/src/assets/Logo/LogoTripical.png"
              className="h-6 w-auto"
            />
          </a>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            ABOUT US
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            LOCATIONS
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            RESERVATION
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            SHOP
          </a>
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          <FaInstagram aria-hidden="true" className="h-6 w-6" />
   
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className=" text-gray-700"
            >
              <img
              alt=""
              src="/src/assets/Logo/LogoTripical.png"
              className="h-6 w-auto"
            />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  ABOUT US
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  LOCATION
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  RESERVATION
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  SHOP
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
