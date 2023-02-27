import React,{useState}  from 'react';
import {movieData} from './MovieData';
import MoviesList from './MoviesList';
import AppNavbar from './AppNavbar';
import AddMovie from './AddMovie';
import Trailer from './Trailer';
import { Route,Routes } from 'react-router-dom';
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
      <AppNavbar  setSearRating={setSearchRating} setSearchName={setSearchName}/>
      <Routes>
        <Route path="/add" element={<AddMovie handleMovie={handleMovie} />}/>
        <Route path="/movies" element={<MoviesList movies={movies} searchRating={searchRating} searchName={searchName}/>}/>
        <Route path="/movies/trailer/:id" element={<Trailer movies={movies}/>}/>
    </Routes>
    </div>
  );

}

export default App;
