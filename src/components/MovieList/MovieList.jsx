import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function MovieList() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, [dispatch]);

  const goToDetails = (id)=>{
    history.push(`/movies/${id}`);
  }

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map(movie => {
          return (
            <div data-testid='movieItem' key={movie.id}>
              <h3>{movie.title}</h3>
              <img src={movie.poster} alt={movie.title} data-testid='toDetails' 
              onClick={()=> goToDetails(movie.id)}
              
              />
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
