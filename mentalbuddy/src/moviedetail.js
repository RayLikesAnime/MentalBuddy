import React from 'react';

function MovieDetail({ selectedMovie }) {
  if (!selectedMovie) {
    return null;
  }

  return (
    <div>
      <h2>{selectedMovie.title}</h2>
      <p>{selectedMovie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
        alt={selectedMovie.title}
      />
    </div>
  );
}

export default MovieDetail;
