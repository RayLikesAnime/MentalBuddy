import React from 'react';

function MovieDetail({ selectedMovie }) {
  if (!selectedMovie) {
    return null;
  }

  return (
    <div className="movie-detail">
      <h2 className="movie-title">{selectedMovie.title}</h2>
      <p className="movie-description">{selectedMovie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
        alt={selectedMovie.title}
        className="movie-poster"
      />
    </div>
  );
}

export default MovieDetail;
