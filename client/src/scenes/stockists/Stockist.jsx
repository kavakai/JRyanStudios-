import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

function Stockist({ place }) {

  const { storeName, location, storeLogo, link } = place.attributes;
  const {
    data: {
      attributes: { url }
    },
  } = storeLogo;
  
  return (
    <Box 
      sx={{
        '&:hover':{ transform: 'scale(1.1)' },
        cursor: 'pointer'
      }}
      display='flex'
      width='300px'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      border='solid 1px black'
      padding={2}
      onClick={() => window.open(link, '_blank')}
      >
      <img 
        src={`http://localhost:1337${url}`} 
        alt={`${storeName}`}
        width='70px'/>
      <Typography 
        sx={{ mt: '20px' }}
        variant="h3" 
        textAlign="center">
          {storeName}
            <br/>
          {location}
        </Typography>
      </Box>
  )
}

export default Stockist
