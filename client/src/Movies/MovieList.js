import React from 'react';
import MovieCard from './MovieCard';
import { Grid } from '@material-ui/core';

const MovieList = (props) => {
	return (
		<Grid container direction='row' spacing={6}>
			{props.movies.map((movie) => (
				<Grid item key={movie.id} lg={4} xs={12}>
					<MovieCard movie={movie} />
				</Grid>
			))}
		</Grid>
	);
};

export default MovieList;
