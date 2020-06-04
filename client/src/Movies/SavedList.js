import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SavedList = ({ list }) => {
	return (
		<div className='saved-list'>
			<h3>Saved Movies:</h3>
			{list.map((movie, index) => (
				<NavLink
					key={index}
					to={`/movies/${movie.id}`}
					activeClassName='saved-active'
				>
					<span className='saved-movie'>{movie.title}</span>
				</NavLink>
			))}
			<Link to='/'>
				<div className='home-button'>Home</div>
			</Link>
		</div>
	);
};

export default SavedList;
