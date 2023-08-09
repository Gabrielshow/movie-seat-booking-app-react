import React from 'react';

const MovieSelector = ({ movie, handleChange }) => {
  return (
    <div>
      <label>Pick a movie:</label>

      <select value={movie} onChange={handleChange}>
        <option value="10">Avengers: Endgame ($10)</option>
        <option value="12">Joker ($12)</option>
        <option value="8">Toy Story 4 ($8)</option>
        <option value="9">The Lion King ($9)</option>
      </select>
    </div>
  );
}

export default MovieSelector;
