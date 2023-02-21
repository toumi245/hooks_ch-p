import React, {useState} from "react";
import Rating from '@mui/material/Rating';


     const MovieCard=({movie})=>{
        return(
            
            <div  key={movie.id} className="Ch" style={{backgroundColor:'blueviolet',textAlign:'center'}}  >
            <h2  style={{color:'#36B37E',display:'inline-block'}}>{movie.title}</h2>
            <p  style={{display:'flex',width:'30vb' ,color:'#00B8D9'}}>{movie.Description}</p>
            <img  style={{height:'40vb',width:'30vb',textAlign:'center'}} src={movie.posterURL}/>
            <Rating  name="read-only" value={movie.rating} readOnly/>
            </div>
        )
     }
    
    

export default MovieCard;