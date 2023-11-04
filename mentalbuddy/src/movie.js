import React, { useState } from 'react';
import Search from './search';
import MovieDetail from './moviedetail';
import MovieRecommendations from './movierec';

function Movie() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  return (
    <div>
      <h1>Movie Recommender System</h1>
      <Search setSelectedMovie={setSelectedMovie} />
      <MovieDetail selectedMovie={selectedMovie} />
      <MovieRecommendations
        selectedMovie={selectedMovie}
        recommendedMovies={recommendedMovies}
        setRecommendedMovies={setRecommendedMovies}
      />
    </div>
  );
}

export default Movie;
