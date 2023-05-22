import React from 'react';
import { useTheme } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { shades } from '../../theme';

function Footer() {
  const { 
    palette: { neutral }
  } = useTheme();
  return (
    <Box mt='70px' p='40px 0' backgroundColor={neutral.light}>
      <Box
        width='80%'
        m='auto'
        display='flex'
        justifyContent='space-between'
        flexWrap='wrap'
        rowGap='30px'
        columnGap='clamp(20px, 30px, 40px)'
      >
        <Box width='clamp(20%, 30%, 40%)'>
          <Typography 
            variant='h4' 
            fontWeight='bold' 
            mb='30px' 
            color={shades.secondary[500]}
          >
            J.Ryan Studios
          </Typography>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper. Cras semper auctor neque vitae tempus quam pellentesque. Lobortis scelerisque fermentum dui faucibus in ornare quam. Feugiat nisl pretium fusce id velit ut tortor pretium.
          </div>
        </Box>
        <Box>
          <Typography variant='h4' fontWeight='bold' mb='30px'>About</Typography>
          <Typography mb='30px'>Terms and Conditions</Typography>
          <Typography mb='30px'>Privacy Policy</Typography>
        </Box>
        <Box>
          <Typography variant='h4' fontWeight='bold' mb='30px'>Customer Care</Typography>
          <Typography mb='30px'>FAQ</Typography>
          <Typography mb='30px'>Track Your Order</Typography>
          <Typography mb='30px'>Returns & Refunds</Typography>
        </Box>
        <Box width='clamp(20%, 25%, 30%)'>
          <Typography variant='h4' fontWeight='bold' mb='30px'>Contact Us</Typography>
          <Typography mb='30px'>Email: jryanreeves@gmail.com</Typography>
          <Typography mb='30px'>@jryanreeves</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer