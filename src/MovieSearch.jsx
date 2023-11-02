import { useState } from "react"

export const MovieSearch = () => {


    const url_base = 'https://api.themoviedb.org/3/search/movie'
    const img_base = 'https://image.tmdb.org/t/p/w500'
    const API_KEY = '70a4f9f1812acbe8876b6c584e8fddb8'

    const [movie, setMovie] = useState('')
    const [movieList, setMovieList] = useState([])
    
    const handleInputChange = (e) => {
        setMovie(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchMovie()
    }

    const fetchMovie = async () => {
        try {
            const response = await fetch(`${url_base}?query=${movie}&api_key=${API_KEY}`)
            const data = await response.json()
            setMovieList(data.results)
        } catch (error) {
            console.log('There is an error', error)
        }
    }
  
    return (
    

    <div className="container">
        <h1 className="title">MovieSearcher</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Write a movie" value={movie} onChange={handleInputChange} />
            <button type="submit" className="search-button">Go for it!</button>
        </form>

       <div className="movie-list">
            {movieList.map(
                (movie) => (
                    <div key={movie.id}
                    className="movie-card">
                        <img src={`${img_base}${movie.poster_path}`} alt={movie.title} />
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                    </div>
                )
            )}
        </div>
         
        </div>

  )
}
