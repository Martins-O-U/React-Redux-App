import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFilm } from '../states/actionCreators';

const FilmLover = ({ movies,  getFilm }) => {
	useEffect(
		() => {
			getFilm();
		},
		[ getFilm ]
	);

	return (
		<div>
			{movies.map((film) => {
				return (
					<div key={film.id}>
						<p>{film.title}</p>
					</div>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state) => {
    debugger
	return {
		movies: state.films,
	};
};

export default connect(mapStateToProps, { getFilm })(FilmLover);

// export default connect( state => state, {getFilm})(FilmLover);