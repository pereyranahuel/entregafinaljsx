import { useEffect, useState } from "react";
import { pedirDatos } from "../../components/utiles/utils";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    pedirDatos()
      .then((data) => {
        const foundItem = data.find((prod) => prod.id === Number(itemId));
        if (foundItem) {
          setItem(foundItem);
        } else {
          console.error(`No se encontró un elemento con el ID: ${itemId}`);
          // Puedes manejar el estado aquí para casos de elementos no encontrados
        }
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error);
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ItemDetail item={item} />
      )}
    </>
  );
};

export default ItemDetailContainer;

