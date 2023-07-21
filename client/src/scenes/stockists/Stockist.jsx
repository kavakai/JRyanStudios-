import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

function Stockist({ place }) {
  const [isHovered, setIsHovered] = useState(false);

  const { storeName, location, storeLogo, link } = place.attributes;
  // const {
  //   data: {
  //     attributes: { url }
  //   },
  // } = image;
  
  return (
    <Box 
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}>
        <Typography 
          sx={isHovered ? { mt: '5px', transform: 'scale(1.1)' } : { mt: '5px' }}
          variant="h3" 
          textAlign="center">

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
