/* eslint-disable react/prop-types */

import Navbar from "../components/Navbar";
import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import { FaCheck } from "react-icons/fa6";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import  StoreNavigation  from "../components/StoreNavigation";

const productDetail = {
      "id": 26382105,
      "photo_md": "https://d1d8o7q9jg8pjk.cloudfront.net/p/md_635d0e344fa92.jpeg",
      "photo_xs": "https://d1d8o7q9jg8pjk.cloudfront.net/p/xs_635d0e344fa92.jpeg",
      "name": "Espresso",
      "sku": "",
      "klasifikasi_id": 1107760,
      "klasifikasi": "Coffee",
      "category_id": 9901,
      "category_name": "Others",
      "published_date": "2022-04-16",
      "fpublished_date": "16-Apr-2022",
      "stock_qty": 0,
      "has_variant": 1,
      "with_lpoint": 0,
      "variant": [
          {
              "id": 19367293,
              "product_id": 26382105,
              "parent_id": null,
              "sku": "90129",
              "name": "Hot,Single",
              "stock_qty": 1,
              "hold_qty": 0,
              "is_out_stock": 0,
              "market_price": "0.00",
              "buy_price": "1759.60",
              "last_buy_price": "0.00",
              "sell_price": "12000.00",
              "sell_price_pos": "12000.00",
              "comission": "0.00",
              "loyalty_points": "0.00",
              "photo_id": 0,
              "view_order": 9999,
              "status": "A",
              "created_from": "180.244.223.153",
              "created_by": "tripicalcoffee@icloud.com",
              "created_time": "2022-09-04 19:17:32",
              "modified_from": "182.253.57.133",
              "modified_by": "ojan@tripical.com",
              "modified_time": "2024-09-01 16:36:56",
              "stock_sync_time": "2024-09-01 16:36:56",
              "vweight": "0.0000",
              "is_default": 0,
              "fmarket_price": "IDR 0",
              "fbuy_price": "IDR 1.759,60",
              "fsell_price": "IDR 12.000",
              "fsell_price_pos": "IDR 12.000",
              "flast_buy_price": "IDR 0",
              "length_dimension": 0,
              "width_dimension": 0,
              "high_dimension": 0,
              "weight_dimension": 0
          },
          {
              "id": 19367294,
              "product_id": 26382105,
              "parent_id": null,
              "sku": "90130",
              "name": "Hot,Double",
              "stock_qty": 1,
              "hold_qty": 0,
              "is_out_stock": 0,
              "market_price": "0.00",
              "buy_price": "4319.20",
              "last_buy_price": "0.00",
              "sell_price": "17000.00",
              "sell_price_pos": "17000.00",
              "comission": "0.00",
              "loyalty_points": "0.00",
              "photo_id": 0,
              "view_order": 9999,
              "status": "A",
              "created_from": "180.244.223.153",
              "created_by": "tripicalcoffee@icloud.com",
              "created_time": "2022-09-04 19:17:32",
              "modified_from": "182.253.57.133",
              "modified_by": "ojan@tripical.com",
              "modified_time": "2024-09-01 16:36:56",
              "stock_sync_time": "2024-09-01 16:36:56",
              "vweight": "0.0000",
              "is_default": 0,
              "fmarket_price": "IDR 0",
              "fbuy_price": "IDR 4.319,20",
              "fsell_price": "IDR 17.000",
              "fsell_price_pos": "IDR 17.000",
              "flast_buy_price": "IDR 0",
              "length_dimension": 0,
              "width_dimension": 0,
              "high_dimension": 0,
              "weight_dimension": 0
          },
          {
              "id": 23168948,
              "product_id": 26382105,
              "parent_id": null,
              "sku": "90131",
              "name": "Ice,Single",
              "stock_qty": 1,
              "hold_qty": 0,
              "is_out_stock": 0,
              "market_price": "0.00",
              "buy_price": "2159.60",
              "last_buy_price": "0.00",
              "sell_price": "14000.00",
              "sell_price_pos": "14000.00",
              "comission": "0.00",
              "loyalty_points": "0.00",
              "photo_id": 0,
              "view_order": 9999,
              "status": "A",
              "created_from": "182.253.87.214",
              "created_by": "tripicalcoffee@icloud.com",
              "created_time": "2023-02-08 09:18:41",
              "modified_from": "182.253.57.133",
              "modified_by": "ojan@tripical.com",
              "modified_time": "2024-09-01 16:36:56",
              "stock_sync_time": "2024-09-01 16:36:56",
              "vweight": "0.0000",
              "is_default": 0,
              "fmarket_price": "IDR 0",
              "fbuy_price": "IDR 2.159,60",
              "fsell_price": "IDR 14.000",
              "fsell_price_pos": "IDR 14.000",
              "flast_buy_price": "IDR 0",
              "length_dimension": 0,
              "width_dimension": 0,
              "high_dimension": 0,
              "weight_dimension": 0
          },
          {
              "id": 23168949,
              "product_id": 26382105,
              "parent_id": null,
              "sku": "90132",
              "name": "Ice,Double",
              "stock_qty": 1,
              "hold_qty": 0,
              "is_out_stock": 0,
              "market_price": "0.00",
              "buy_price": "4319.20",
              "last_buy_price": "0.00",
              "sell_price": "19000.00",
              "sell_price_pos": "19000.00",
              "comission": "0.00",
              "loyalty_points": "0.00",
              "photo_id": 0,
              "view_order": 9999,
              "status": "A",
              "created_from": "182.253.87.214",
              "created_by": "tripicalcoffee@icloud.com",
              "created_time": "2023-02-08 09:18:41",
              "modified_from": "182.253.57.133",
              "modified_by": "ojan@tripical.com",
              "modified_time": "2024-09-01 16:36:56",
              "stock_sync_time": "2024-09-01 16:36:56",
              "vweight": "0.0000",
              "is_default": 0,
              "fmarket_price": "IDR 0",
              "fbuy_price": "IDR 4.319,20",
              "fsell_price": "IDR 19.000",
              "fsell_price_pos": "IDR 19.000",
              "flast_buy_price": "IDR 0",
              "length_dimension": 0,
              "width_dimension": 0,
              "high_dimension": 0,
              "weight_dimension": 0
          }
      ],
      "photos": [
          {
              "id": 8005012,
              "file_name": "635d0e344fa92.jpeg",
              "photo_md": "https://d1d8o7q9jg8pjk.cloudfront.net/p/md_635d0e344fa92.jpeg",
              "photo_xs": "https://d1d8o7q9jg8pjk.cloudfront.net/p/xs_635d0e344fa92.jpeg",
              "product_id": 26382105,
              "title": null,
              "width": 1024,
              "height": 683,
              "view_order": 1,
              "status": "A"
          }
      ],
      "collections": [],
      "store_id": 126907,
      "store_name": "Tripical Coffee",
      "product_group_id": 1107760,
      "description": "",
      "notes": "",
      "market_price": "0.00",
      "fmarket_price": "IDR 0",
      "buy_price": "1759.60",
      "last_buy_price": "0.00",
      "sell_price": "12000.00",
      "sell_price_pos": "12000.00",
      "fbuy_price": "IDR 1.759,60",
      "flast_buy_price": "IDR 0",
      "fsell_price": "IDR 12.000",
      "fsell_price_pos": "IDR 12.000",
      "comission": "0.00",
      "fcomission": "IDR 0",
      "is_comission_percentage": 0,
      "loyalty_points": "0.00",
      "condition_id": "N",
      "brand_id": null,
      "is_featured": 0,
      "is_sale": 0,
      "is_new_release": 1,
      "is_popular": 0,
      "is_preorder": 0,
      "is_out_stock": 0,
      "is_raw_material": 0,
      "track_inventory": 0,
      "variant_label": "Suhu,Ukuran",
      "default_variant_id": null,
      "require_shipping": 1,
      "non_taxable": 0,
      "weight": "0.3000",
      "fweight": "0.3 kg",
      "min_order": 1,
      "max_order": 0,
      "hold_qty": 0,
      "low_stock_alert": 0,
      "photo_id": 8005012,
      "published": 1,
      "pos_sell_price_dynamic": 0,
      "pos_hidden": 0,
      "copy_product_id": null,
      "predefined_order_notes": null,
      "order_with_serial": 0,
      "has_material": 1,
      "supplier_id": null,
      "status": "A",
      "meta_keywords": "",
      "meta_description": "",
      "reviewer_rating": "0.00",
      "reviewer_total": 0,
      "viewed": 0,
      "viewed_time": "2022-04-16 05:09:50",
      "created_from": "118.96.108.56",
      "created_by": "tripicalcoffee@icloud.com",
      "created_time": "2022-04-15 22:09:50",
      "modified_from": "182.253.57.133",
      "modified_by": "ojan@tripical.com",
      "modified_time": "2024-09-01 16:36:56",
      "modified_sync_time": "2024-07-09 21:21:58",
      "stock_sync_time": "2022-04-16 05:09:50",
      "condition_name": "New",
      "brand_name": null,
      "uom": "",
      "max_sell_price": "19000.00",
      "min_sell_price": "12000.00",
      "max_sell_price_pos": "19000.00",
      "min_sell_price_pos": "12000.00",
      "fmax_sell_price": "IDR 19.000",
      "fmin_sell_price": "IDR 12.000",
      "fmax_sell_price_pos": "IDR 19.000",
      "fmin_sell_price_pos": "IDR 12.000",
      "has_branches_stock_info": 0,
      "branches_stock_info": [],
      "length_dimension": 0,
      "width_dimension": 0,
      "high_dimension": 0,
      "weight_dimension": 0
}
const VariantSelector = ({variants}) => {
  const [selectedVariant, setSelectedVariant] = useState(null);
  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
  };
  console.log(variants)
  return (
    <div className="mt-4">
      <label className="text-sm font-bold">Choose a variant:</label>
      <div className="mt-2 grid grid-cols-2 gap-2">

      <RadioGroup value={selectedVariant} onChange={setSelectedVariant} aria-label="Variant">
      {variants.map((item) => (
        <Field key={item.id} className="flex items-center gap-2">
          <Radio value={item.name} className="group flex size-5 items-center justify-center rounded-md border border-trippicalBlack bg-transparent data-[checked]:bg-trippicalBlack">
          <FaCheck  className="invisible rounded-sm text-offWhite text-xs  group-data-[checked]:visible"/> 

          </Radio>
          <Label>{item.name}</Label>
        </Field>
          ))}
      </RadioGroup>
      </div>
    </div>
  );
};
const ProductDetailSection = () => {
  const { id } = useParams();
  const location = useLocation();

  const { product } = location.state;
  // const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  console.log("product", productDetail);

  useEffect(() => {
    // Fetch product data by ID (from API or state)
    // Example: fetchProductById(id).then(data => setProduct(data));
    // For now, assume product is fetched or passed as prop.
  }, [id]);


  const handleAddToCart = () => {
    if (!selectedVariant) {
      alert("Please select a variant!");
      return;
    }

    // Add product with selected variant and quantity to cart
    // You can manage the cart state using React Context or another state management approach.
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <img
          src={productDetail.photo_md}
          alt={productDetail.imageAlt}
          className="w-full lg:w-1/4 object-cover object-center aspect-square"
        />
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-mogena text-trippicalBlack">
            {product.name}
          </h1>
          <p className="text-lg text-logoRed">
            IDR {Math.round(productDetail.min_sell_price / 1000)} /{" "}
            {Math.round(productDetail.max_sell_price / 1000)}
          </p>
          <p className="text-md text-trippicalBlack">
            {productDetail.description ? productDetail.description : "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "}
          </p>

          {/* Variant Selector */}
          <VariantSelector variants={productDetail.variant} />

          {/* Quantity Selector */}
          <div className="mt-4">
            <label className="text-sm font-medium">Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="mt-2 p-2 border border-gray-300"
            />
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="mt-6 w-full p-3 bg-logoRed text-white font-semibold"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  return (
    <>
      <ProductDetailSection />
    </>
  );
};

export default ProductDetail;
