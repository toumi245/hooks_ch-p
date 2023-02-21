import React,  {useState} from "react";
const Rating=()=> {
    const[rating,setRating]=useState(0);
    const handleRatingChange=(event)=>{
        setRating(parseInt(event.target.value));

    };

return(
    <div>
        <input type="radio" id="rating1" name="rating" value="1" onChange={handleRatingChange}/>
        <label htmlFor="rating1">1</label>
      <input type="radio" id="rating2" name="rating" value="2" onChange={handleRatingChange} />
      <label htmlFor="rating2">2</label>
      <input type="radio" id="rating3" name="rating" value="3" onChange={handleRatingChange} />
      <label htmlFor="rating3">3</label>
      <input type="radio" id="rating4" name="rating" value="4" onChange={handleRatingChange} />
      <label htmlFor="rating4">4</label>
      <input type="radio" id="rating5" name="rating" value="5" onChange={handleRatingChange} />
      <label htmlFor="rating5">5</label>
    </div>
);
};
export default Rating