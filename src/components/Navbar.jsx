import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          POSTABLES
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Posts
              </Link>
            </li>
            {isAuthenticated && (
              <li className="nav-item">
                <Link className="nav-link" to="/post">
                  Add Book
                </Link>
              </li>
            )}
          </ul>

          <ul className="navbar-nav">
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <span className="nav-link">
                    Welcome, {user?.name || user?.username}
                  </span>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-light btn-sm ms-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
