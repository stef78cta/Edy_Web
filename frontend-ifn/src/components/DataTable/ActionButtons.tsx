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

const ActionButtons: React.FC = () => {
  return (
    <div className="action-buttons">
      <button className="action-button add">
        <Plus size={16} /> Add
      </button>
      <button className="action-button edit">
        <Edit size={16} /> Edit
      </button>
      <button className="action-button delete">
        <Trash2 size={16} /> Delete
      </button>
      <button className="action-button view">
        <Eye size={16} /> View
      </button>
      <button className="action-button export">
        <FileDown size={16} /> Export
      </button>
      <button className="action-button import">
        <FileUp size={16} /> Import
      </button>
      <button className="action-button more">
        <MoreHorizontal size={16} /> More
      </button>
    </div>
  );
};

export default ActionButtons;
