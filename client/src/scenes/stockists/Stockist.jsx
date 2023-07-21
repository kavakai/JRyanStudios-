import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

function Stockist({ place }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Box 
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}>
        <Typography 
          sx={isHovered ? { mt: '5px', transform: 'scale(1.1)' } : { mt: '5px' }}
          variant="h3" 
          textAlign="center">

          <a style={{ cursor: 'pointer', 'text-decoration': 'none', 'color': 'inherit' }} rel='noreferrer' target='_blank' href='https://ojosparesorts.com/ojo-santa-fe/'>
            {place.name}
            <br/>
            {place.location}
          </a> 

        </Typography>
      </Box>
  )
}

export default Stockist
