import React from "react";
import { User } from "lucide-react";
import "./UserMenuButton.scss";

const UserMenuButton: React.FC = () => {
  return (
    <button className="user-menu-button">
      <User size={20} />
    </button>
  );
};

export default UserMenuButton;
