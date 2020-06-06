import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
	AppBar,
	Toolbar,
	Typography,
	ListItem,
	List,
	Button,
} from '@material-ui/core';

const SavedList = ({ list }) => {
	return (
		<AppBar
			position='sticky'
			style={{ marginBottom: '50px', justifyContent: 'space-between' }}
		>
			<Toolbar>
				<Typography component='h2'>Saved Movies:</Typography>
				<List>
					{list.map((movie, index) => (
						<ListItem key={index}>
							<NavLink
								style={{ color: 'white' }}
								to={`/movies/${movie.id}`}
								activeClassName='saved-active'
							>
								<span className='saved-movie'>{movie.title}</span>
							</NavLink>
						</ListItem>
					))}
				</List>
			</Toolbar>
			<Link to='/'>
				<Button className='home-button'>Home</Button>
			</Link>
		</AppBar>
	);
};

export default SavedList;
