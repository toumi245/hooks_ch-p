import React,{useState}  from 'react';
import {movieData} from './MovieData';
import MoviesList from './MoviesList';
import AppNavbar from './AppNavbar';
import AddMovie from './AddMovie';
import './App.css'
function App() {
  const [searchRating,setSearchRating]=useState(0);
 const [movies,setMovies]=useState(movieData);
 const [searchName,setSearchName]=useState("");
const handleMovie=(movie)=>{
  setMovies([...movies,movie])
}
 console.log(searchName);
 return (
    <div >
      <AppNavbar setSearRating={setSearchRating} setSearchName={setSearchName}/>
      <AddMovie  handleMovie={handleMovie} />
    <MoviesList movies={movies} searchRating={searchRating} searchName={searchName}/> 

    </div>
  );

}

export default App;
