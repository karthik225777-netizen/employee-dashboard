import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Employee Portal
        </Link>

        <div className="navbar-nav ms-auto">
          <NavLink
            className={({ isActive }) =>
              `nav-link ${isActive ? "active fw-bold" : ""}`
            }
            to="/"
            end
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-link ${isActive ? "active fw-bold" : ""}`
            }
            to="/employee-form"
          >
            Employee Form
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;