import React from "react";
import { Bell } from "lucide-react";
import "./NotificationsButton.scss";

const NotificationsButton: React.FC = () => {
  return (
    <button className="notifications-button">
      <Bell size={20} />
    </button>
  );
};

export default NotificationsButton;
