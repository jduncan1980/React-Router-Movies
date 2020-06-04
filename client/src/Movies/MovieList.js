import React from 'react';
import MovieCard from './MovieCard';

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie) => (
				<MovieCard key={movie.id} movie={movie} />
			))}
		</>
	);
};

export default MovieList;
