import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard';
import '../css/Home.css'
import { getPopularMovies, searchMovies } from '../services/api';

export default function Home() {

  const [ searchQuery, setSearchQuery ] = useState("")
  const [ movies, setMovies ] = useState([])
  const [ error, setError ] = useState(null)
  const [ loading, setLoadning ] = useState(true)

  useEffect(() => {
    const loadPopularMovies = async () => {
      try{
        const popularMovies = await getPopularMovies()
        setMovies(popularMovies)
      } catch(err){
        setError("Failed to load movies...")
        console.log(err);
      }
      finally{
        setLoadning(false)
      }
    }
    loadPopularMovies()
  }, [])
  
  const handleSearch = async (e) => {
    e.preventDefault()

    if (!searchQuery.trim()) return
    if (loading) return

    setLoadning(true)
    try{
      const searchResults = await searchMovies(searchQuery)
      setMovies(searchResults)
      setError(null)
    } catch (err) {
      console.log(err);
      setError('Failed to search movies...')
    } finally{
      setLoadning(false)
    }

    setSearchQuery("")
    }

  return (
    <div className='home'>
        <form action="" className="search_form" onSubmit={handleSearch}>
            <input type="text" 
            className="search_input" 
            placeholder='Search for movies...' 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search_button" type='submit'> Search </button>
        </form>
    { error && <div className="error_message">{error}</div> }
      
    { loading ? ( <div className="loading">Loading...</div> ) : (
      <div className="movies_grid">
            {movies.map(movie => 
            movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />)}
        </div>
    )}
        
    </div>
  )
}
