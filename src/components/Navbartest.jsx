import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, UserIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "PRODUCT", href: "#" },
  { name: "FEATURES", href: "#" },
  { name: "MARKETPLACE", href: "#" },
  { name: "COMPANY", href: "#" },
];

const Company = () => {
  return (
    <div className="flex flex-shrink-0 items-center">
      <img
        alt="Your Company"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
        className="h-8 w-auto"
      />
    </div>
  );
};
const Navigation = () => {
  return (
    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      <MenuButton className="sm:hidden relative inline-flex items-center justify-center rounded-md p-2 text-primary-400 hover:bg-primary-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
        <Bars3Icon
          aria-hidden="true"
          className=" block h-6 w-6 text-white  group-data-[open]:hidden"
        />
      </MenuButton>
      <MenuItems
        anchor="bottom start"
        transition
        className="transition duration-100 ease-out absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5  focus:outline-none "
      >
        {navigation.map((item) => (
          <MenuItem
            key={item.name}
            as="a"
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
            href={item.href}
          >
            {item.name}
          </MenuItem>
        ))}
      </MenuItems>
    </div>
  );
};
const Profile = () => {
  return (
    <div className=" lg:flex lg:flex-1 lg:justify-end absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <button
        type="button"
        className="navbar-item relative rounded-full p-1 text-white  hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-primary-800"
      >
        <span className="absolute -inset-1.5" />
        <span className="sr-only">View notifications</span>
        <BellIcon aria-hidden="true" className="h-6 w-6" />
      </button>

      {/* Profile dropdown */}
      <Menu as="div" className="relative ml-3">
        <div>
          <MenuButton className=" navbar-item relative rounded-full p-1 text-white  hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-primary-800">
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Open user menu</span>
            <UserIcon aria-hidden="true" className="h-6 w-6" />
          </MenuButton>
        </div>
        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
            >
              Your Profile
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
            >
              Settings
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
            >
              Sign out
            </a>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default function Example() {
  return (
    <Menu as="nav" className="absolute inset-x-0 top-0 z-50">
      <div className="flex items-center justify-between p-6 lg:px-8 ">
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
          <Navigation />
          <Company />
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="navbar-item">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <Profile />
        </div>
      </div>
    </Menu>
  );
}
