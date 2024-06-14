import React from 'react';
import './Card.css';


const ProductCard = () => {
  return (
    <div
      id="ProductCard"
      className="
    card rounded-3xl
    flex flex-col justify-between
    min-h-cardHeight max-h-cardHeight min-w-cardwidth p-cardpad
    my-5 desktop:my-3 table:my-3
     "
    >
      <div id="top-text" className="flex flex-row justify-between text-topTxt">
        <div id="warrant-status" className="text-base">
          Warranted
        </div>
        <div id="productPrice" className="text-base">
          $15
        </div>
      </div>
      <img src="" />
      <div id="product-info" className="items-center text-center">
        <div id="productName" className="p-0.5 text-xl">
          Leather Bag
        </div>
        <div id="sellerName" className="p-0.5 text-sm">
          <span className="text-gray-500">Seller:</span> <span className="text-fuchsia-400">Satoru</span>
        </div>
        <button
          id="addCart"
          className="rounded-2xl border-2 border-nextbtn p-btnpad mt-2 text-xs"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard