import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import NewsSection from "./components/NewsSection";
import axios from "axios";

function App() {
  const [articles1, setArticles1] = useState([]);
  const [articles2, setArticles2] = useState([]);
  const [topHeadlines, setTopHeadlines] = useState([]);
  const [searched, setSearched] = useState(false);
  const apiKey = "030d44c1ff904d7092c04163671281e7";

  useEffect(() => {
    const fetchCountryAndHeadlines = async () => {
      try {
        // Fetch user's country using a geolocation API
        const geoRes = await axios.get("https://ipapi.co/json/");
        const userCountry = geoRes.data.country_code.toLowerCase();

        // Fetch top headlines for user's country
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=${userCountry}&apiKey=${apiKey}`, {
            headers: {
              'Content-Type': 'application/json'
            },
        }
        );
        setTopHeadlines(response.data.articles); // Assuming you want to display top headlines in articles1
      } catch (error) {
        console.error("Error fetching headlines:", error);
      }
    };

    fetchCountryAndHeadlines();
  }, []);

  const handleSearch = async (query) => {
    setSearched(true);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}+benefits&SearchIn=description&apiKey=${apiKey}`,
      );
      setArticles1(response.data.articles);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}+problems&SearchIn=description&apiKey=${apiKey}`
      );
      setArticles2(response.data.articles);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  return (
    <div className="p-4 bg-black">
      <div className="container mx-auto bg-white rounded shadow-md p-4">
        <SearchBar onSearch={handleSearch} />
        <div className="mt-4">
          {!searched && (
            <NewsSection npage="Top Headlines" articles={topHeadlines} />
          )}
          {searched && (
            <div className="flex gap-4">
              <NewsSection npage="Pros" articles={articles1} />
              <NewsSection npage="Cons" articles={articles2} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
