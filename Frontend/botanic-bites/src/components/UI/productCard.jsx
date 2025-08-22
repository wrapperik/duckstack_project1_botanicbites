import React from 'react';

export default function ProductCard({ name, price, image }) {
  return (
    <div className="rounded p-2 bg-white">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded" />
      <h3 className="text-lg font-semibold text-black mt-2">{name}</h3>
      <p className="text-gray-600">R{price}</p>
    </div>
  );
}
