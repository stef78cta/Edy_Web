import React from "react";
import SearchBar from "./SearchBar";
import NotificationsButton from "./NotificationsButton";
import UserMenuButton from "./UserMenuButton";
import "./Navbar.scss";
import logo from "../../assets/AccessCapitalLogo.png"; // Asigurați-vă că aveți un fișier logo.png în folderul assets

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img
            src={logo}
            alt="Access Capital Logo"
            className="navbar__logo-image"
          />
          <span className="navbar__logo-text">Access Capital</span>
        </div>
        <div className="navbar__search">
          <SearchBar />
        </div>
        <div className="navbar__actions">
          <NotificationsButton />
          <UserMenuButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
