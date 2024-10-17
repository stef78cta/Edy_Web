import React from "react";
import { Search } from "lucide-react";
import "./SearchBar.scss";

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Caută..." />
      <Search className="search-icon" size={20} />
    </div>
  );
};

export default SearchBar;
