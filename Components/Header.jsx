import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1 className="header">Fake News</h1>
      <nav className="nav-bar">
        <Link to="/categories" className="nav-bar-link">
          Categories
        </Link>
        <Link to="/latest" className="nav-bar-link">
          Latest
        </Link>
        <Link to="/users" className="nav-bar-link">
          Users
        </Link>
      </nav>
    </div>
  );
}

export default Header;
