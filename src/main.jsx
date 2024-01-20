import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './AppRouter.jsx';
import { UserProvider } from './components/context/UserContext.jsx'
import { CartProvider } from "./components/context/CartContext.jsx";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <UserProvider>
    <CartProvider>
     <AppRouter />
    </CartProvider>
    </UserProvider> 
  </React.StrictMode>,
)/*
import React from 'react';
import AppRouter from './AppRouter.jsx';  // Cambié el nombre de la importación y la función

import { UserProvider } from './components/context/UserContext.jsx';
import { CartProvider } from "./components/context/CartContext.jsx";

function App() {  // Cambié el nombre de la función
  return (
    <UserProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </UserProvider>
  );
}

export default App;  // Cambié el nombre de la exportación*/
