import React, { useEffect, useState } from 'react';
import data from '../mock/data.json';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  const pedirDatos = () => {
    // Puedes cargar directamente los datos desde el archivo local
    return Promise.resolve(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await pedirDatos();
        const items = categoryId
          ? data.filter((prod) => prod.category === categoryId)
          : data;
        setProductos(items);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <>
      {productos.length > 0 ? (
        <ItemList productos={productos} />
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </>
  );
};

export default ItemListContainer;
