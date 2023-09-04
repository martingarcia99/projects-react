import './App.css'
import { Movies } from './components/movies'
import { useMovies } from './hooks/useMovies'

function App() {

  const { mappedMovies } = useMovies()

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form'>
          <input placeholder='Avengers, Star Wars, The Matrix...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        {
          <Movies movies={mappedMovies}/>
        }
      </main>
    </div>
  )
}

export default App
