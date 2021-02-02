import React, {useState} from 'react'

export const Pokemon = (props) => {
    const [pokemons, setPokemons]= useState([]);

    const handleClick=(e)=>{
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => {
          return response.json();
      }).then(response => {
         setPokemons(response.results);
      }).catch(err=>{
          console.log(err);
      });

    }
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            {   pokemons.map( (item, index)=>
            <p key={index}>{item.name} and username is {item.name}</p>
            )}
        
            
            
        </div>
    )
}
export default Pokemon