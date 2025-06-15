/* eslint-disable react/prop-types */

export const ProductImageGallery = ({ images }) => (
  <>
    <div >
      <img
        className="h-auto w-full object-cover object-center aspect-square rounded-lg"
        src={images[0]?.image_url || "http://localhost:6903/web/image/product.image/"} 
        alt={images[0]?.image_url ? "Product Image" : "No Image Available"} 
      />
    </div>
    <div className="grid grid-cols-3 gap-4">
      {images.map((image) => (
        <div key={image.id}>
          <img
            className="h-auto w-full object-cover object-center aspect-square rounded-lg"
            src={image.image_url || "http://localhost:6903/web/image/product.image"} 
            alt={image.image_url ? "Product Image" : "No Image Available"} 
          />
        </div>
      ))}
    </div>
  </>
);