import React from "react";

const PhoneDetails = ({ data, onAddToCart }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="h-48">
        <img className="w-full h-full object-cover" src={data.image_url} alt={data.name} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{data.name}</div>
        <p className="text-gray-700 text-base">{data.brand}</p>
        <p className="text-gray-900 font-bold text-xl">${data.price_usd}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Storage: {data.specs.storage}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          RAM: {data.specs.ram}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Camera: {data.specs.camera}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Display: {data.specs.display}
        </span>
      </div>
      <div className="px-6 py-4">
        <button
          onClick={() => onAddToCart(data)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PhoneDetails;
