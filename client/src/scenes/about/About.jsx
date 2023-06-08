import React from 'react';
import { Box, Typography } from '@mui/material';
import image from '/Users/kaikuller/Projects/StainGlass2/StainGlass2/client/src/assets/shutterstock_422707990.jpg'

function About() {
  return (
    <Box width="80%" m="80px auto">
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        <Box flex="1 1 40%" mb="40px">
          <img
            alt={image.name}
            width="100%"
            height="100%"
            src={image}
            style={{ objectFit: "contain" }}
          />
        </Box>
        <Box flex="1 1 50%" mb="40px">
          <Box m="65px 0 25px 0">
            <Typography sx={{ mt: "20px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit aliquam urna id semper. Duis ante magna, rhoncus nec blandit ultrices, venenatis nec lectus. Vestibulum vel eros id erat maximus cursus. Curabitur quis efficitur enim. Quisque vitae consectetur arcu. Donec elit velit, blandit in auctor in, rhoncus tincidunt ligula. Quisque vulputate, nisl ut tristique egestas, justo magna sollicitudin felis, sit amet tristique leo lorem eget ex. Integer interdum nibh quis tempor accumsan. Nulla justo diam, lacinia vel fermentum et, sodales ut justo. Maecenas finibus consequat bibendum. In imperdiet turpis libero, ornare vehicula nunc gravida vehicula.<br/>
Sed gravida lacus vitae nibh pellentesque, sit amet bibendum velit cursus. Duis et laoreet nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque feugiat mi nec leo rhoncus, eget tempus lorem hendrerit. Integer maximus mi tempus varius mattis. Aliquam faucibus tristique imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default About