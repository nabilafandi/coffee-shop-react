
function Promo() {
  return (
    <div className="container mx-auto p-4 w-4/5">
    

      {/* Product Section */}
      <div className="flex space-x-8 mt-8">
        {/* Product Image */}
        <div className="w-1/2">
          <img src="https://d1d8o7q9jg8pjk.cloudfront.net/p/md_635d0e344fa92.jpeg" alt="Espresso" className="w-full h-auto object-cover aspect-square" />
          <div className="flex space-x-2 mt-4">
            <img src="https://d1d8o7q9jg8pjk.cloudfront.net/p/md_635d0e344fa92.jpeg" alt="thumb1" className="w-16 h-16 object-cover" />
            <img src="https://d1d8o7q9jg8pjk.cloudfront.net/p/md_635d0e344fa92.jpeg" alt="thumb2" className="w-16 h-16 object-cover" />
          </div>
        </div>

        {/* Product Details */}
        <div className="w-1/2">
          <h1 className="text-3xl font-bold">Espresso</h1>
          <p className="text-red-500">IDR 12 / 14</p>
          <p className="my-4">Lorem ipsum description here...</p>

          {/* Hot or Cold Options */}
          <div>
            <label className="block">
              <input type="radio" name="temperature" value="hot" /> Hot (IDR 12)
            </label>
            <label className="block">
              <input type="radio" name="temperature" value="cold" checked /> Cold (IDR 14)
            </label>
          </div>

          {/* Add Ons */}
          <div className="mt-4">
            <label className="block">
              <input type="checkbox" /> Oat Milk
            </label>
            <label className="block">
              <input type="checkbox" /> Ice Cream
            </label>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="mt-4 flex space-x-4">
            <input type="number" min="1" className="border w-16 text-center" value="1" />
            <button className="bg-red-500 text-white px-4 py-2 rounded">Add to Cart</button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-8">
        <h2 className="text-xl font-bold">Related Products</h2>
        <div className="flex space-x-4 mt-4">
          <div className="w-1/3">
            <img src="https://d1d8o7q9jg8pjk.cloudfront.net/p/md_635d0e344fa92.jpeg" alt="Long Black" className="w-full h-auto object-cover aspect-square" />
            <p>Long Black</p>
            <p className="text-red-500">IDR 22</p>
          </div>
          <div className="w-1/3">
            <img src="https://d1d8o7q9jg8pjk.cloudfront.net/p/md_635d0e344fa92.jpeg" alt="Americano" className="w-full h-auto object-cover aspect-square" />
            <p>Americano</p>
            <p className="text-red-500">IDR 20/22</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Promo;
