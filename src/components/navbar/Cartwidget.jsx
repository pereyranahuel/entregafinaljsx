import React from 'react';

const CartWidget = () => {
  const handleCartClick = () => {
    // Lógica a realizar cuando se hace clic en la imagen del carrito
    alert('Mostrar carrito de compras o realizar alguna acción');
  };

  // Constante para el estilo de la imagen del carrito
  const imgStyle = {
    width: '30px',
    height: '30px'
  };

  return (
    <div>
      {/* Contenido del componente CartWidget */}
      <img style={imgStyle}
        src="../src/components/navbar/carrito.png"
        alt="Carrito de compras"
        onClick={handleCartClick}
      />
    </div>
  );
}
export default CartWidget;
