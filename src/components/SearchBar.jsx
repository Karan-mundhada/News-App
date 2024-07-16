import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
    setQuery(""); // Clear the search bar after search
  };

  return (
    <div className="w-full md:w-auto p-2 bg-slate-900 rounded">
      <h1 className="text-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
        Search Any News
        <span className="sm:block"> Get both Perspectives </span>
      </h1>

      <form
        onSubmit={handleSearch}
        className="flex items-center max-w-md mx-auto p-2 m-2 rounded"
      >
        <input
          type="text"
          placeholder="Search"
          className="flex-grow p-2 border rounded"
          value={query}
          onChange={handleInputChange}
        />
        <button
          className="p-2 m-2 bg-blue-500 text-white rounded"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;