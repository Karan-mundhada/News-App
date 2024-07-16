import React from "react";

const NewsSection = ({ npage, articles }) => {
  return (
    <div className="flex-1 h-screen p-2 border rounded overflow-y-scroll">
      <h2 className="text-4xl text-slate-800 font-bold mb-2 text-center">
        {npage} <span className="text-gray-800"> - no of articles</span> - {articles.length}
      </h2>
      <div className="space-y-2">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <div key={index} className="p-2 bg-gray-200 rounded">
              <h3 className="font-bold">{article.title}</h3>
              <p>{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Read more
              </a>
            </div>
          ))
        ) : (
          <p>No articles found</p>
        )}
      </div>
    </div>
  );
};

export default NewsSection;
