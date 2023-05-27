import responseMovies from './mocks/with-results.json'
// import withoutResults from './mocks/no-results.json'
import './App.css'

function App () {
  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0

  const renderMovies = () => {
    return (
      <ul>
        {
          movies.map(movie => (
            <li key={movie.imdbID}>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <img src={movie.Poster} alt={movie.Title} />
            </li>
          ))
        }
      </ul>
    )
  }

  const renderNoResults = () => {
    return (
      <p>No se encontraron resultados para esta busqueda</p>
    )
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form'>
          <input type="text" placeholder='Avengers, Star Wars, Matrix' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        {
          hasMovies
            ? renderMovies()
            : renderNoResults()
        }
    </main>
    </div >
  )
}

export default App
