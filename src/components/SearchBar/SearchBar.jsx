import { useState } from "react";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSearch, initialQuery = "" }) => {
  const [query, setQuery] = useState(initialQuery);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className={s.btn} type="submit">
          Search movie
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
