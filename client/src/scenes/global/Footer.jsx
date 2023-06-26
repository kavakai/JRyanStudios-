import React from 'react';
import { useTheme } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { shades } from '../../theme';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const { 
    palette: { neutral }
  } = useTheme();
  const navigate = useNavigate();

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
          <Typography
            variant='h4'  
            mb='30px' 
            color={shades.secondary[300]}>
              <a style={{ 'text-decoration': 'none', 'color': 'inherit' }} href='https://www.kai-the-dev.com/' rel='noreferrer' target='_blank'>Website by - Kai Kuller</a>
          </Typography>
        </Box>
        <Box>
          {/* <Typography variant='h4' fontWeight='bold' mb='30px' sx={{ cursor: 'pointer' }} onClick={() => navigate('/about')}>About Me</Typography> */}
          {/* <Typography mb='30px'>Terms and Conditions</Typography>
          <Typography mb='30px'>Privacy Policy</Typography> */}
        </Box>
        {/* <Box>
          <Typography variant='h4' fontWeight='bold' mb='30px'>Customer Care</Typography>
          <Typography mb='30px'>FAQ</Typography>
          <Typography mb='30px'>Track Your Order</Typography>
          <Typography mb='30px'>Returns & Refunds</Typography>
        </Box> */}
        <Box width='clamp(20%, 25%, 30%)'>
          <Typography variant='h4' mb='30px' sx={{ cursor: 'pointer' }} onClick={() => navigate('/about')}>About Me</Typography>
          {/* <Typography variant='h4' mb='30px'>Contact Me</Typography> */}
          <Typography mb='30px'>Email: jryanreeves@gmail.com</Typography>
          <Typography mb='30px' >
            <a style={{ 'text-decoration': 'none', 'color': 'inherit' }} href='https://www.instagram.com/jryanreeves/?hl=en' rel='noreferrer' target='_blank'>@jryanreeves</a>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer