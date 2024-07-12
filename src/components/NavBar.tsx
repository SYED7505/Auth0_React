import { NavLink } from "react-router-dom";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";

const NavBar = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const links = [
    { name: "Home", link: "/" },
    { name: "Playground", link: "/playground" },
    { name: "Profile", link: "/profile" },
  ];
  return (
    <div className="container">
      <header className="d-flex align-items-center justify-content-md-between py-3 mb-4 border-bottom">
        <ul className="nav">
          {links.map((link) => (
            <li key={link.link} className="nav-link px-2">
              <NavLink
                style={{
                  textDecoration: "none",
                }}
                className={({ isActive }) =>
                  isActive ? "text-warning" : "text-secondary"
                }
                to={link.link}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="col-md-3 text-end">
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </div>
      </header>
    </div>
  );
};

export default NavBar;
