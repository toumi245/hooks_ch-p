import React from "react";
import MovieCard from "./MovieCard";
import './App.css'

const MoviesList=(props)=>{
    return(
        <div style={{display:'flex' }} >
            {
                props.movies
                .filter((Movie)=>
                Movie.rating >= props.searchRating && Movie.title.toLowerCase().includes(props.searchName.toLowerCase().trim())
                 )
                .map((Movie)=>(
                    <MovieCard movie={Movie} key={Movie.id}/>
                    
                ))
            }
        </div>
    )
}
export default MoviesList