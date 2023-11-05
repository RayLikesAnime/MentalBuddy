import React, { useEffect, useState } from 'react';

function MovieRecommendations({ selectedMovie }) {
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    if (selectedMovie) {
      // Fetch recommended movies based on the selected movie's genre
      const apiKey = '364e788680344b23cda8f9cade81e966'; // Replace with your TMDb API key
      const genreId = selectedMovie.genre_ids[0]; // Assuming the first genre is the primary genre
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}&sort_by=popularity.desc`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setRecommendedMovies(data.results);
        })
        .catch((error) => {
          console.error('Error fetching recommended movies:', error);
        });
    }
  }, [selectedMovie]);

  return (
    <div className="movie-recommendations">
      <h3 className="recommendations-title">Recommended Movies</h3>
      <ul>
        {recommendedMovies.map((movie) => (
          <li key={movie.id} className="recommendation-item">
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieRecommendations;
