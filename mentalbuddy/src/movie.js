import React, { useState } from 'react';
import Search from './search';
import MovieDetail from './moviedetail';
import MovieRecommendations from './movierec';

function Movie() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="container">
      <h1 className="title">Movie Recommender System</h1>
      <Search setSelectedMovie={setSelectedMovie} />
      <MovieDetail selectedMovie={selectedMovie} />
      <MovieRecommendations selectedMovie={selectedMovie} />
    </div>
  );
}

export default Movie;
