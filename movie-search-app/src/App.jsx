import './App.css';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';

function App() {

  const handleSearch = (searchTerm) => {
    console.log('Searching for: ' + searchTerm);
  };

  return (
    <div>
       <h1>Movie Search</h1>

       <SearchBar onSearch={handleSearch} />
       
        <MovieCard
         title="Batman Begins"
         description="A young Bruce Wayne is sent to the Far East to learn the art of warfare."
         rating={8.2}
        />
    </div>
  );
}

export default App;