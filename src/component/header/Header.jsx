import { Container, Row } from "reactstrap";
import logo from "../../assets/images/logo.jpg";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./header.css";

const nav__links = [
  {
    path: "/workout",
    display: "Workout",
  },
  {
    path: "/training",
    display: "Training",
  },
  {
    path: "/location",
    display: "Locations",
  },
];


const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <Container>
        <Row>
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src={logo} />
            </div>
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((link, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={link.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {link.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="d-flex align-items-center justify-content-between gap-3">
              {!user && (
                <>
                  <Link to="/login" className="btn login_button">
                    Sign in
                  </Link>
                  <Link to="/register" className="btn register_button">
                    Register
                  </Link>
                </>
              )}

              {user && (
                <Link onClick={logout} to="/login" className="btn login_button">
                  Sign out
                </Link>
              )}
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
