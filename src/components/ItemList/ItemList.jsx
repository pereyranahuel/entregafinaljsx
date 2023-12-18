import React from 'react';
import PropTypes from 'prop-types';
import ItemCard from '../ItemCard/ItemCard';

const ItemList = ({ productos }) => {
  // Validación de propiedades
  if (!Array.isArray(productos)) {
    console.error('Error: Los productos no son un arreglo válido.', productos);
    return <p>Error: Los productos no son un arreglo válido.</p>;
  }

  console.log('Renderizando ItemList con productos:', productos);

  return (
    <section className="container m-auto mt-8">
      <h2 className="text-4xl font-bold">Productos</h2>
      <hr />

      <div className="flex flex-wrap justify-start gap-10 items-stretch">
        {productos.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

// PropTypes para la validación de propiedades
ItemList.propTypes = {
  productos: PropTypes.array.isRequired,
};

export default ItemList;

