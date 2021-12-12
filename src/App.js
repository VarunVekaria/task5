import * as React from 'react';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import "./style.css";
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import "./card.css";
//import Recipes from './Recipe.js';
import Recipetile from './RecipeTile.js';
import { maxHeight } from '@mui/system';

function App() {
  const [data, setData] = useState({ categories: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/v2/recipes?q=Pasta&page=1',);
      setData(result.data);
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
    
    <div >
        {data.recipes.map((recipe) => {
        //   return <Recipetile recipe={recipe} />;
        return (
            <Grid container spacing={2}>
            <Grid item xs={4}>
            <Card sx={{ minWidth: 40 , minHeight:500 }}>
            <div className="recipeTile">
              <img
                className="recipeTile__image"
                src={recipe["imageUrl"]}
                alt="tile-image"
               onClick={() => window.open(recipe["sourceUrl"])}
              />
              <p className="recipeTile__name">{recipe["title"]}</p>
            </div>
            </Card>
            </Grid>
</Grid>
        );
        })}
      </div>
  
  );
}


export default App;