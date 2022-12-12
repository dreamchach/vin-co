import { Link } from "react-router-dom";
import { MdMenu, MdSearch } from "react-icons/md";
import { Container, StyledHeader } from "./styles";
import { useToggle } from "../../hooks/useToggle";

const Header = () => {
  const [isToggle, toggle] = useToggle();

  console.log(isToggle);
  return (
    <StyledHeader>
      <Container>
        <nav className="mobile-nav">
          <button type="button" onClick={toggle}>
            <MdMenu />
          </button>
          <h1>
            <Link to="/">Vin-co &copy;</Link>
          </h1>
          <div>
            <Link to="/cart">Cart</Link>
          </div>
        </nav>
        <nav className="nav">
          <div className="left-wrapper">
            <h1>
              <Link to="/">Vin-co</Link>
            </h1>
            {/* LEFT NAV */}
            <ul>
              <li>
                <Link to="/shop">SHOP</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
            </ul>
          </div>

          {/* RIGHT NAV */}
          <ul>
            <li>
              <button type="button">
                <MdSearch />
              </button>
            </li>
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </StyledHeader>
  );
};
export default Header;
