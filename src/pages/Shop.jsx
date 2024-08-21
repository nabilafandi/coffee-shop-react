/* eslint-disable react/prop-types */
import // Bars3Icon,
// MagnifyingGlassIcon,
// ShoppingBagIcon,
// XMarkIcon,
"@heroicons/react/24/outline";
import {
  // Dialog,
  // DialogBackdrop,
  // DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  // Tab,
  // TabGroup,
  // TabList,
  // TabPanel,
  // TabPanels,
} from "@headlessui/react";

import Navbar from "../components/Navbar";
import {ProductList} from "../components/ProductList";

const navigation = {
  categories: [
    {
      id: "es_kopi",
      name: "Es Kopi",
      products: [
        {
          id: 1,
          name: "Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
          price: "$35",
          color: "Black",
        },
        {
          id: 2,
          name: "New Wave",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
          price: "$40",
          color: "Black",
        },
        {
          id: 1,
          name: "Post Punk",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
          price: "$35",
          color: "Black",
        },
      ],
    },
    {
      id: "lightBites",
      name: "Light Bites",
      products: [
        {
          id: 1,
          name: "Basic Tee",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
        {
          id: 2,
          name: "Basic Tee",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
        {
          id: 3,
          name: "Basic Tee",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
        {
          id: 4,
          name: "Basic Tee",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
        // More products...
      ],
    },
    {
      id: "merchandise",
      name: "Merchandise",
      products: [
        {
          id: 1,
          name: "Basic Tee",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
        {
          id: 2,
          name: "Basic Tee",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
        {
          id: 3,
          name: "Basic Tee",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
        {
          id: 4,
          name: "Basic Tee",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
        // More products...
      ],
    },
    {
      id: "eventTickets",
      name: "Event Tickets",
      products: [
        {
          id: 1,
          name: "Basic Tee",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
        {
          id: 2,
          name: "Basic Tee",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
        {
          id: 3,
          name: "Basic Tee",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
        {
          id: 4,
          name: "Basic Tee",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
        // More products...
      ],
    },
  ],
};


const StoreNavigation = () => {
  return (
    <div className="bg-white">
      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center justify-evenly">
              {/* Flyout menus */}
              <PopoverGroup className="flex overflow-x-auto overflow-y-clip">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <div className="relative flex">
                        <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:border-indigo-600 data-[open]:text-indigo-600">
                          {category.name}
                        </PopoverButton>
                      </div>

                      <PopoverPanel
                        transition
                        className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                      >
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 top-1/2 bg-white shadow"
                        />
                        <ProductList items={category} />
                      </PopoverPanel>
                    </Popover>
                  ))}
                </div>
              </PopoverGroup>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

const Shop = () => {
  return (
    <>
      <Navbar />
      <StoreNavigation />
    </>
  );
};

export default Shop;
