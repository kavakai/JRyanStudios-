import React, { useEffect } from 'react';
import { Box, Typography, IconButton, useMediaQuery } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { shades } from '../../theme';
import { useDispatch, useSelector } from 'react-redux';
import { setHeroBanner } from "../../scenes/state";

// Import all images from assets folder
// const importAll = (r) => 
//   r.keys().reduce((acc, item) => {
//     acc[item.replace("./", "")] = r(item);
//     return acc;
//   }, {});

// const heroTextureImports = importAll(
//   require.context('../../assets', false, /\.(png|jpe?g|svg)$/)
// );

function MainCarousel() {
  const isNonMobile = useMediaQuery('(min-width: 600px)')
  const dispatch = useDispatch();
  const heroBannerImages = useSelector((state) => state.cart.heroBanner);

  async function getHeroBanner() {
    const banner = await fetch(
      "http://localhost:1337/api/hero-banners?populate=deep",
      { method: "GET" }
    );
    const data = await banner.json();
    console.log(data, 'data')
    dispatch(setHeroBanner(data.data));
  };

  useEffect(() => {
    getHeroBanner();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  console.log(heroBannerImages, 'heroBannerImages')

  return (
    // <Carousel
    //   infiniteLoop={true}
    //   showThumbs={false}
    //   showIndicators={false}
    //   showStatus={false}
    //   renderArrowPrev={(onClickHandler, hasPrev, label) => (
    //     <IconButton
    //       onClick={onClickHandler}
    //       sx={{
    //         position: 'absolute',
    //         top: '50%',
    //         left: '0',
    //         color: 'white',
    //         padding: '5px',
    //         zIndex: '10',
    //       }}
    //     >
    //       <NavigateBeforeIcon sx={{ fontSize: 40 }} />
    //     </IconButton>
    //   )}
    //   renderArrowNext={(onClickHandler, hasNext, label) => (
    //     <IconButton
    //       onClick={onClickHandler}
    //       sx={{
    //         position: 'absolute',
    //         top: '50%',
    //         right: '0',
    //         color: 'white',
    //         padding: '5px',
    //         zIndex: '10',
    //       }}
    //     >
    //       <NavigateNextIcon sx={{ fontSize: 40 }} />
    //     </IconButton>
    //   )}
    // >
    //   {heroBannerImages.map((texture, index) => (
    //     <Box key={`carousel-image-${index}`}>
    //       <img 
    //         src={texture}
    //         alt={`carousel-${index}`}
    //         style={{
    //           width: '100%',
    //           height: '500px',
    //           objectFit: 'cover',
    //           backgroundAttachment: 'fixed',
    //         }}
    //       />
    //     </Box>
    //   ))}
    // </Carousel>
    <div></div>
  )
}

export default MainCarousel