import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative w-full h-56">
        <img src={product.images[0]} alt={product.title} className="object-cover w-full h-full" />
        <span className="absolute top-3 right-3 bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md">
          {product.category.name}
        </span>
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">{product.title}</h2>
        <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>

        {/* Price and Button */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">${product.price}</span>
          <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
