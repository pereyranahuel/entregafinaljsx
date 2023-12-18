import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ item }) => {
  return (
    <article className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white shadow-lg p-4 rounded-md mx-auto text-center mb-4">
      <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
      
      <img className="w-full h-48 object-cover mb-4 rounded-md" src={item.img} alt={item.name} />

      <hr className="border-t-2 border-gray-300 mb-4" />
      
      <p className="text-gray-700 mb-4">{item.description}</p>
      
      <p className="text-xl font-bold text-blue-500">Precio: ${item.price}</p>

      <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
        <Link to={`/item/${item.id}`}>Ver más</Link>
      </button>
    </article>
  );
};

export default ItemCard;
