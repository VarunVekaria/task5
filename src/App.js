import * as React from 'react';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import Recipes from './Recipe.js';

function App() {
  const [data, setData] = useState({ categories: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/v2/recipes?q=Italian&page=1',);
      setData(result.data.recipes);
    };

    fetchData();
  }, []);
  console.log(data);
  

  
//   const getRecipeInfo = async () => {
//     var result = await Axios.get(url);
//     setRecipes(result.data.hits);
//     console.log(result.data.hits);
//   };

//   const onSubmit = (e) => {
//     e.preventDefault(); //this will prevent page from reloading.
//     fetchData();
//   };

  return (
    <div>
    {/* {data.map((recipe) => {
        return(
        console.log(recipe.title)
    )})} */}
  </div>
  );
}


export default App;