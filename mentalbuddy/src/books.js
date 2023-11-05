import React, { useState } from 'react';

function BookRecommender() {
  const [recommendedBook, setRecommendedBook] = useState(null);

  const fetchRandomFeelGoodBook = async () => {
    try {
      const response = await fetch(
        'https://www.googleapis.com/books/v1/volumes?q=feel+good&maxResults=10'
      );
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.items.length);
      const book = data.items[randomIndex].volumeInfo;
      setRecommendedBook(book);
    } catch (error) {
      console.error('Error fetching book:', error);
    }
  };

  return (
    <div>
      <h1>Feel-Good Book Recommender</h1>
      <button onClick={fetchRandomFeelGoodBook}>Recommend me a book</button>
      {recommendedBook && (
        <div>
          <h2>{recommendedBook.title}</h2>
          {recommendedBook.imageLinks && (
            <img
              src={recommendedBook.imageLinks.thumbnail}
              alt={`${recommendedBook.title} cover`}
            />
          )}
          <p>{recommendedBook.description}</p>
          <p>Author: {recommendedBook.authors && recommendedBook.authors.join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default BookRecommender;
