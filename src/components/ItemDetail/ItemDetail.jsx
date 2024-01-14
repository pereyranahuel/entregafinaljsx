import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Boton from "../../components/renderprops/Boton";
import QuantitySelector from "./QuantitySelector";

const ColorSelector = ({ setColor }) => {
  const handleSelect = ({ target: { value } }) => {
    setColor(value);
  };

  /*return (
    <select onChange={handleSelect} className="border p-2">
      <option value="negro">Negro</option>
      <option value="gris">Gris</option>
      <option value="blanco">Blanco</option>
    </select>
  );*/
};

const ItemDetail = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [cantidad, setCantidad] = useState(1);
  const [color, setColor] = useState("");

  const handleAgregar = () => {
    const itemToCart = {
      ...item,
      cantidad,
      color,
    };

    addToCart(itemToCart);
  };

  const handleVolver = () => {
    navigate(-1);
  };

  return (
    <>
      <Boton onClick={handleVolver}>Volver</Boton>
      <div className="container m-auto mt-8">
        <h3 className="mt-4 text-2xl font-semibold">{item.name}</h3>
        <hr />

        <div className="flex gap-8 pt-4">
          <img src={item.img} alt={item.name} />

          <div>
            <p>{item.description}</p>
            <p className="text-xl font-bold">Precio: ${item.price}</p>

            <ColorSelector setColor={setColor} />
            {/* Agregar el componente QuantitySelector si es necesario */}
            <QuantitySelector cantidad={cantidad} setCantidad={setCantidad} />

            <button onClick={handleAgregar} className="bg-blue-500 text-white p-2 mt-4">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
