import React from "react";

const CartPopup = ({ onClose, product, selectedVariant, quantity }) => {
  return (
    <div className="absolute  inset-0 flex items-center justify-center  z-50">
      <div className="max-w-2xl bg-offWhite rounded-3xl shadow-lg ">
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-center mb-2">
            Item Added to your Cart!
          </div>
          <div className="">
            <div className="mb-5" >
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                <li key={product.id} className="flex py-6 items-center">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      alt={product.imageAlt}
                      src={product.photo_md}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href={product.href}>Strawberry Bubblegum</a>
                        </h3>
                        <p className="ml-4">1</p>
                        <p className="ml-4">IDR 14</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">Cold</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <hr className="bg-trippicalBlack " />
            <div className="flex flex-row-reverse gap-5">
              <div className="text-lg text-logoRed"> IDR 14</div>
              <div className="text-lg font-bold text-trippicalBlack">
                Subtotal
              </div>
            </div>
            <div className="">
              <button
                type="button"
                className="text-white bg-logoRed font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
              >
                Log in to buy
              </button>
              <button
                type="button"
                className="text-white bg-logoRed font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
              >
                Buy as a guest
              </button>
              <button
                type="button"
                className="text-logoRed bg-offWhite border border-logoRed font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
