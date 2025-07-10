import { Container, Row } from "reactstrap";
import logo from "../../assets/images/logo.jpg";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom"
import "./header.css";
import { useRef } from "react";

const nav__links = [
  {
    path: "/classes",
    display: "Classes",
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
  return (
    <header className="header ">
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
              <button className="btn btn-secondary"><Link to="/login">Login</Link></button>
              <button className="btn btn-primary"><Link to="/register">Register</Link></button>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
