import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

function Stockist({ place }) {
  const [isHovered, setIsHovered] = useState(false);

  const { storeName, location, storeLogo, link } = place.attributes;
  const {
    data: {
      attributes: { url }
    },
  } = storeLogo;
  
  return (
    <Box 
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}>
        <Typography 
          sx={isHovered ? { mt: '20px', transform: 'scale(1.1)', display:'flex', flexDirection: 'column' } : { mt: '20px', display:'flex', flexDirection: 'column', alignItems: 'center'  }}
          variant="h3" 
          textAlign="center">
          
          <img 
            src={`http://localhost:1337${url}`} 
            alt={`${storeName}`}
            width='70px'/>

          <a style={{ cursor: 'pointer', 'text-decoration': 'none', 'color': 'inherit' }} rel='noreferrer' target='_blank' href={link}>
            {storeName}
            <br/>
            {location}
          </a> 
        
        </Typography>
      </Box>
  )
}

export default Stockist
