import React from "react";
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  FileDown,
  FileUp,
  MoreHorizontal,
} from "lucide-react";
import Tooltip from "@mui/material/Tooltip";
import "./ActionButtons.scss";

const ActionButtons: React.FC = () => {
  return (
    <div className="action-buttons">
      <Tooltip title="Adauga" classes={{ tooltip: "custom-tooltip" }}>
        <button className="action-button">
          <Plus className="action-icon" size={20} />
        </button>
      </Tooltip>
      <Tooltip
        title="Modifica inregistrarea selectata"
        classes={{ tooltip: "custom-tooltip" }}
      >
        <button className="action-button">
          <Edit className="action-icon" size={20} />
        </button>
      </Tooltip>
      <Tooltip
        title="Sterge inregistrarea selectata"
        classes={{ tooltip: "custom-tooltip" }}
      >
        <button className="action-button">
          <Trash2 className="action-icon" size={20} />
        </button>
      </Tooltip>
      <Tooltip
        title="Vizualizeaza inregistrarea selectata"
        classes={{ tooltip: "custom-tooltip" }}
      >
        <button className="action-button">
          <Eye className="action-icon" size={20} />
        </button>
      </Tooltip>
      <Tooltip title="Export" classes={{ tooltip: "custom-tooltip" }}>
        <button className="action-button">
          <FileDown className="action-icon" size={20} />
        </button>
      </Tooltip>
      <Tooltip title="Import" classes={{ tooltip: "custom-tooltip" }}>
        <button className="action-button">
          <FileUp className="action-icon" size={20} />
        </button>
      </Tooltip>
      <Tooltip title="Alte actiuni" classes={{ tooltip: "custom-tooltip" }}>
        <button className="action-button">
          <MoreHorizontal className="action-icon" size={20} />
        </button>
      </Tooltip>
    </div>
  );
};

export default ActionButtons;
