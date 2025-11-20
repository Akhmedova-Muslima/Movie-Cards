import React from 'react'
import '../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard';

export default function Favorites() {

  const { favorites } = useMovieContext();
  if (favorites) {
    return(
      <div className="favorites">
        <h2>Your favorites</h2>
        <div className="favorites_grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))

          }
        </div>
      </div>
    )
  }

  return (
    
    <div className='favorites_empty'>
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies to your favorites and they will appear here!~</p>
    </div>
  )
}
