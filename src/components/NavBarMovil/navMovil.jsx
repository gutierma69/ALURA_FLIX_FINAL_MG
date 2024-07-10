import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./navMovil.css";
const NavegacionMovil = styled.nav`
  display: flex;
  justify-content: space-evenly;
  gap: 15px;
  alignitems: center;
  border-top: 2px solid #2271D1;
  margin-top: 5rem;
  padding-top: 1rem;
`;
const NavMovil = () => {
  const [showMenu, setShowMenu] = useState(false);

  const mostrarOpciones = () => {
    setShowMenu(!showMenu);
  };
  return (
    <NavegacionMovil>
      <Link to="/" className="navbar-link-mobile">
        <i className="fas fa-home"></i> HOME
      </Link>
      <div className="nav-more">
        <button className="menu-button" onClick={mostrarOpciones}>
            <i className="fas fa-plus"></i>
        </button>
        {showMenu && (
            <div className="menu-dropdown">
            <Link
                to="/nuevo-video"
                className="menu-item"
                onClick={mostrarOpciones}
            >
                NUEVO VIDEO
            </Link>
            </div>
        )}
      </div>
      
    </NavegacionMovil>
  );
};
export default NavMovil;
