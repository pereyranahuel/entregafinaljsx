import React, { useEffect, useState } from 'react';
import data from '../mock/data.json';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  const pedirDatos = () => {
    return Promise.resolve(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        console.log('Fetching data...');

        const data = await pedirDatos();

        if (categoryId) {
          console.log(`Filtering products for category ${categoryId}`);
          const filteredProducts = data.filter((prod) => prod.categoryId === categoryId);

          if (filteredProducts.length > 0) {
            setProductos(filteredProducts);
          } else {
            console.error(`No se encontraron productos para la categoría ${categoryId}`);
          }
        } else {
          console.log('No category specified, showing all products.');
          setProductos(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
        console.log('Data fetching completed.');
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <>
      {loading ? (
        <p>Cargando...</p>
      ) : productos.length > 0 ? (
        <ItemList productos={productos} />
      ) : (
        <p>No hay productos disponibles para la categoría {categoryId}.</p>
      )}
    </>
  );
};

export default ItemListContainer;
