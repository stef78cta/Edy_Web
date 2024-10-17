import React from "react";
import SearchBar from "./SearchBar";
import NotificationsButton from "./NotificationsButton";
import UserMenuButton from "./UserMenuButton";
import "./Navbar.scss";

interface NavbarProps {
  children?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        {children}
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
