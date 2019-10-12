import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFilm } from '../states/actionCreators';
import { Link } from 'react-router-dom';

const FilmLover = ({ movies,  getFilm }) => {
	useEffect(
		() => {
			getFilm();
		},
		[ getFilm ]
	);

	return (
		<div className='all-movie'>
			<h4><i>Click on Individual Movie for more details on it!</i></h4>
			{movies.map((film) => {
				return (
					<div key={film.id} >
					<Link to={`/FilmDetailed/${film.id}`} key={film.id}>           
						<p className='special'>{film.title}</p>
					</Link>
					</div>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		movies: state.reducer.films,
	};
};

export default connect(mapStateToProps, { getFilm })(FilmLover);

// export default connect( state => state, {getFilm})(FilmLover);