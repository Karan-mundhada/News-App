import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import NewsSection from "./components/NewsSection";
import axios from "axios";

function App() {
  const [articles1, setArticles1] = useState([]);
  const [articles2, setArticles2] = useState([]);

  const handleSearch = async (query) => {
    try {
      const apiKey = "030d44c1ff904d7092c04163671281e7";
      const response = await axios.get("https://newsapi.org/v2/everything", {
        params: {
          q: `${query}`,
          apiKey: apiKey,
        },
      });
      setArticles1(response.data.articles);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
    try {
      const apiKey = "030d44c1ff904d7092c04163671281e7";
      const response = await axios.get("https://newsapi.org/v2/everything", {
        params: {
          q: `${query}`,
          apiKey: apiKey,
        },
      });
      setArticles2(response.data.articles);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  return (
    <div className="p-4 bg-black">
      <div className="container mx-auto bg-white rounded shadow-md p-4">
        <SearchBar onSearch={handleSearch} />
        <div className="mt-4 flex gap-4">
          <NewsSection npage="Adv" articles={articles1} />
          <NewsSection npage="Dis" articles={articles2} />
        </div>
      </div>
    </div>
  );
}

export default App;
