import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../img/logo.png";
import "./header.css";

const BarraNavegacion = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #262626;
  padding: 2rem 2rem;
  border-bottom: 2px solid #00f;
`;
const NavbarLogo = styled.div`
  max-width: 20rem;
`;
const NavbarLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const Header = () => {
  return (
    <BarraNavegacion>
      <NavbarLogo>
        <Link to="/">
          <img src={logo} alt="Banner de la pagina" />
        </Link>
      </NavbarLogo>
      <NavbarLinks>
        <Link to="/" className="navbar-link">
          PRINCIPAL
        </Link>
        <Link to="/nuevo-video" className="navbar-link">
          NUEVO VIDEO
        </Link>
      </NavbarLinks>
    </BarraNavegacion>
  );
};

export default Header;
