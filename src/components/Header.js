// Logo component to display logo
import FoodFireLogo from "./../images/FoodFireLogo.png";
import { useState } from "react";

const Logo = () => (
  <a href="/">
    <img className="logo" src={FoodFireLogo} alt="Food Fire Logo" />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(true);
  return (
    <div className="header">
      <Logo />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => setIsLoggedin(true)}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
