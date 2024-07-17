import React, { useState } from 'react';

const MovieSelector = ({ movies }) => {
    const [selectedMovie, setSelectedMovie] = useState(movies[0]);

    const handleChange = (event) => {
        const movie = movies.find(movie => movie.id === event.target.value);
        setSelectedMovie(movie);
    };

    return (
        <div>
            <select onChange={handleChange} value={selectedMovie.id}>
                {movies.map((movie) => (
                    <option key={movie.id} value={movie.id}>
                        {movie.title}
                    </option>
                ))}
            </select>
            <div>
                <h1>{selectedMovie.title}</h1>
                <p>{selectedMovie.description}</p>
            </div>
        </div>
    );
};

export default MovieSelector;