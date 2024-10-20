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

const ActionButtons: React.FC = () => {
  return (
    <div className="action-buttons">
      <Tooltip title="Adauga" classes={{ tooltip: "custom-tooltip" }}>
        <button className="action-button">
          <Plus size={20} />
        </button>
      </Tooltip>
      <Tooltip
        title="Modifica inregistrarea selectata"
        classes={{ tooltip: "custom-tooltip" }}
      >
        <button className="action-button">
          <Edit size={20} />
        </button>
      </Tooltip>
      <Tooltip
        title="Sterge inregistrarea selectata"
        classes={{ tooltip: "custom-tooltip" }}
      >
        <button className="action-button">
          <Trash2 size={20} />
        </button>
      </Tooltip>
      <Tooltip
        title="Vizualizeaza inregistrarea selectata"
        classes={{ tooltip: "custom-tooltip" }}
      >
        <button className="action-button">
          <Eye size={20} />
        </button>
      </Tooltip>
      <Tooltip title="Export" classes={{ tooltip: "custom-tooltip" }}>
        <button className="action-button">
          <FileDown size={20} />
        </button>
      </Tooltip>
      <Tooltip title="Import" classes={{ tooltip: "custom-tooltip" }}>
        <button className="action-button">
          <FileUp size={20} />
        </button>
      </Tooltip>
      <Tooltip title="Alte actiuni" classes={{ tooltip: "custom-tooltip" }}>
        <button className="action-button">
          <MoreHorizontal size={20} />
        </button>
      </Tooltip>
    </div>
  );
};

export default ActionButtons;
