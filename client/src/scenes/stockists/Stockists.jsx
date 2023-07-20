import React from 'react';
import { Box, Typography } from '@mui/material';

function Stockists() {
 
  const importAll = (r) => 
    r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

  const heroTextureImports = importAll(
    require.context('../../assets', false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <Box width="80%" margin="80px auto">
      <img 
        src={heroTextureImports['shutterstock_537796069.jpg']}
        alt={'alt'}
        style={{
          width: '100%',
          height: '500px',
          objectFit: 'cover',
          backgroundAttachment: 'fixed',
        }}/>
      <Typography variant="h3" textAlign="center">Ojo Santa Fe</Typography>
      <Typography variant="h3" textAlign="center">Georgia Okeefe Museum</Typography>
      <Typography variant="h3" textAlign="center">Ojo Caliente</Typography>
    </Box>
  )
}

export default Stockists;
