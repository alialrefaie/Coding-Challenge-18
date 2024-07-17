import React from 'react';
import './App.css';
import RateMovieButton from './RateMovieButton';
import MovieSelector from './MovieSelector';
import UploadButton from './UploadButton';

function App() {
  const movies = [
    { id: '1', title: 'Movie 1', description: 'Description 1' },
    { id: '2', title: 'Movie 2', description: 'Description 2' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <RateMovieButton />
        <MovieSelector movies={movies} />
        <UploadButton />
      </header>
    </div>
  );
}

export default App;