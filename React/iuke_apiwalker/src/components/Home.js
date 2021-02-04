import React from 'react';


const Home = props => {
    return (

        <div>

            <label >search for:</label>
            <select name="cars" id="cars">
                <option value="volvo">people</option>
                <option value="saab">plant</option>
                
            </select>

            <h1>id:</h1>
             <input type="text"></input>
             <button>search</button>

         </div>    
    


    )
}

export default Home