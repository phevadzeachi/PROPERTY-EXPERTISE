import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">

      <div className="header-container">

        <Link to="/" className="logo">
          PROPERTY
          <span>EXPERTISE</span>
        </Link>


        <nav className="nav">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            მთავარი
          </NavLink>

          <NavLink
            to="/standard"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Standard
          </NavLink>

          <NavLink
            to="/premium"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Premium
          </NavLink>

        </nav>

      </div>

    </header>
  );
}

export default Header;