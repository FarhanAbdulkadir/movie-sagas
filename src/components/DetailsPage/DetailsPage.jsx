import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../MovieList/MovieList';

function MovieDetails() {
  const dispatch = useDispatch();
  const history = useHistory();
  const path = history.location.pathname;
  const  id  = path.split('/').pop();
  const movie = useSelector(store => store.movieDetails);
  
console.log('movie Id is:', id);
  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: id });
  }, [id, dispatch]);

 

 return (
    <div data-testid="movieDetails">
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} />
      <p>{movie.description}</p>
      <h3>Genres:</h3>
      <ul>
        {movie.genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
      <button data-testid="toList" onClick={() => history.push('/')}>Back to movie list</button>
    </div>
  );
}

export default MovieDetails;
