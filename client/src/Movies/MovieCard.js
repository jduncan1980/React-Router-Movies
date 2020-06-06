import React from 'react';
import { Link } from 'react-router-dom';
import {
	Card,
	CardHeader,
	ListItem,
	Typography,
	CardContent,
	Box,
} from '@material-ui/core';

function MovieCard({ movie }) {
	const { title, director, metascore, stars } = movie;
	return (
		<Link to={`/movies/${movie.id}`}>
			<Card raised variant='outlined'>
				<CardHeader title={title} subheader={`Directed by ${director}`} />
				<CardContent>
					<Typography component='h3' gutterBottom>
						Metascore: <strong>{metascore}</strong>
					</Typography>
					<Typography color='textSecondary'>Starring...</Typography>
					{stars.map((star) => (
						<ListItem key={star} className='movie-star'>
							{star}
						</ListItem>
					))}
				</CardContent>
			</Card>
		</Link>
	);
}

export default MovieCard;
