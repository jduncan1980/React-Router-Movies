import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MovieCard from './MovieCard';

const Movie = ({ savedList, addToSavedList }) => {
	const [movie, setMovie] = useState();
	const params = useParams();
	useEffect(() => {
		const id = params.id;

		axios
			.get(`http://localhost:5000/api/movies/${id}`)
			.then((response) => {
				setMovie(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [params]);

	const saveMovie = (newSaved) => {
		const newList = savedList.filter((mov) => mov.id === newSaved.id);
		console.log(newList);
		if (!newList[0]) {
			addToSavedList(newSaved);
		}
	};

	if (!movie) {
		return <div>Loading movie information...</div>;
	}
	return (
		<>
			<MovieCard key={movie.id} movie={movie} saveMovie={saveMovie} />
			<button onClick={() => saveMovie(movie)} className='save-button'>
				Save Movie
			</button>
		</>
	);
};

export default Movie;
