import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const links = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Departamento",
    href: "/productos/departamento",
  },
  {
    label: "Casas",
    href: "/productos/casa",
  },
  {
    label: "Oportunidades",
    href: "/productos/oportunidad",
  },
];

const Navbar = () => {
  return (
    <header className="bg-gray-800">
      <div className="container m-auto py-6 flex justify-between items-center">
        <img src={logo} alt="Logo" />

        <nav className="flex gap-4">
          {links.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) => (
                `text-lg uppercase font-semibold ${isActive ? "text-gray-400" : "text-white"}`
              )}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* <CartWidget /> */}
      </div>
    </header>
  );
};

export default Navbar;
