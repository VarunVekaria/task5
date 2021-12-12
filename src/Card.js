import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "./card.css";

//const bull = (
  //<Box
    //component="span"
    //sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  //>
    
  //</Box>
//);
export default function BasicCard() {
    return (
      <Card style={{opacity:"0.5"}} sx={{ minWidth: 275 }}>
        <CardContent>
        <CardMedia className="overlay" 
        component="img"
        height="250"
        image="https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/cover-for-street-food-in-sydney.jpg"
        alt="green iguana"
      />
      </CardContent> 
      </Card>
    );
  }