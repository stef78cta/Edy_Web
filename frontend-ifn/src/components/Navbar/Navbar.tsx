import React from "react";
import SearchBar from "./SearchBar";
import NotificationsButton from "./NotificationsButton";
import UserMenuButton from "./UserMenuButton";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <span className="navbar__logo-text">FinanceDash</span>
        </div>
        <SearchBar />
        <div className="navbar__actions">
          <NotificationsButton />
          <UserMenuButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
