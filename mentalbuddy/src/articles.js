import React, { useState, useEffect } from 'react';
import './mental.css';

const MentalHealthArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch and load articles data from the JSON file
    fetch('/mentalhealtharticles.json')
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2 className=" flex justify-center ">Mental Health Articles</h2>
      <div className="article-container">
        {articles.map((article, index) => (
          <div key={index} className="article ">
            <h3>{article.title}</h3>
            <p>{article.content}</p>
            <button className="read-more-button">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentalHealthArticles;
