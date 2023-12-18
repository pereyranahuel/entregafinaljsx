import React from 'react';
import CartWidget from './Cartwidget'; 
import { Link, NavLink } from 'react-router-dom';
import ItemListContainer from '../itemListContainer/ItemListContainer';

const Navbar = () => {
  const links = [
    {
      label: 'Inicio',
      href: '/',
    },
    {
      label: 'Departamentos',
      href: '/productos/departamento',
    },
    {
      label: 'Casas',
      href: '/productos/casa',
    },
    {
      label: 'Oportunidades',
      href: '/productos/oportunidad',
    },
  ];

  console.log('Renderizando Navbar');

  return (
    <div>
      <header className="bg-gray-300 shadow-md">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <Link to="/" className="mr-8">
            <img src="../src/components/navbar/logo.png" alt="logo" className="h-8 w-8" />
          </Link>
          <ul className="flex gap-4">
            {links.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) => (
                  `text-gray-800 hover:text-white hover:bg-gray-500 px-2 py-1 rounded ${isActive ? "font-semibold" : ""}`
                )}
              >
                {link.label}
              </NavLink>
            ))}
          </ul>
          <CartWidget />
        </nav>
      </header>

      <ItemListContainer />
    </div>
  );
};

export default Navbar;
