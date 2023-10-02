import { NavLink } from "react-router-dom";

function NavBar() {
  let activeStyle = "underline underline-offset-4";
  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ropa"
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            Ropa
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronicos"
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            Electronicos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/golosinas"
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            Golosinas
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          <i>945-589-482</i>
        </li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            Ingresar
          </NavLink>
        </li>
        <li>🛒 0</li>
      </ul>
    </nav>
  );
}

export default NavBar;
