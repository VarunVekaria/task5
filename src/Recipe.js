import * as React from 'react';
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import "./card.css";
// const bull = (
//     <Box
//       component="span"
//       sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
//       •
//     </Box>
//   );

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));
function Recipes({recipe}){
return(<div>
<Grid container spacing={2}>
  <Grid item xs={4}>
  <Card sx={{ minWidth: 40 }}>
        <CardContent>
        <CardMedia className="overlay" 
        component="img"
        height="250"
        opacity= "0.4"
        image= {recipe[1].sourceUrl}
        alt="green iguana"
      />
       <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        </CardContent>
        
      </Card>
  </Grid>
  <Grid item xs={4}>
  <Card sx={{ minWidth: 275 }}>
        <CardContent>
        <CardMedia className="overlay" 
        component="img"
        height="250"
       
        image="https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/cover-for-street-food-in-sydney.jpg"
        alt="green iguana"
      />
       <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        </CardContent>
        
      </Card>
  </Grid>
  <Grid item xs={4}>
  <Card sx={{ minWidth: 275 }}>
        <CardContent>
        <CardMedia className="overlay" 
        component="img"
        height="250"
       
        image="https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/cover-for-street-food-in-sydney.jpg"
        alt="green iguana"
      />
       <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        </CardContent>
        
      </Card>
  </Grid>
</Grid>
</div>)


}
export default Recipes;