import React from 'react';
import { Box, Typography } from '@mui/material';
import Stockist from './Stockist';


function Stockists() {
 
  const importAll = (r) => 
    r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

  const heroTextureImports = importAll(
    require.context('../../assets', false, /\.(png|jpe?g|svg)$/)
  );

  const places = stockers.map(place => {
    <Stockist key={Date.Now()} place={place} />
  })

  return (
    <Box 
      width="80%" 
      margin="80px auto" 
      >
      <img 
        src={heroTextureImports['shutterstock_537796069.jpg']}
        alt={'alt'}
        style={{
          width: '100%',
          height: '500px',
          objectFit: 'cover',
          backgroundAttachment: 'fixed',
        }}/>
      
      {places}
    </Box>
  )
}

export default Stockists;
