import { useContext } from 'react';
import { UserContext } from './components/context/UserContext';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartView from './components/CartView/CartView';
import Checkout from './components/Checkout/Pago';
import LoginScreen from './components/LoginScreen/LoginScreen';

const AppRouter = () => {
  const { user } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {user.logged ? (
          <>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/productos/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartView />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <Route path="/" element={<LoginScreen />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
