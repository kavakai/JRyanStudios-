import React from 'react';
import { Box, Typography } from '@mui/material';
import Stockist from './Stockist';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStockists } from "../../scenes/state";


function Stockists() {
  const dispatch = useDispatch();
  const stockers = useSelector((state) => state.cart.stockists);

  async function getStores() {
    const stores = await fetch(
      "http://localhost:1337/api/stockists?populate=*",
      { method: "GET" }
    );
    const data = await stores.json();
    dispatch(setStockists(data.data));
  }

  useEffect(() => {
    getStores();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
 
  const importAll = (r) => 
    r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

  const heroTextureImports = importAll(
    require.context('../../assets', false, /\.(png|jpe?g|svg)$/)
  );

  const places = stockers.map((place) => (
    <Stockist key={place.id} place={place} />
  ));

  return (
    <Box 
      width="80%" 
      margin="80px auto" 
      padding={2}
      >
      <img 
        src={heroTextureImports['rainbow_light_img.jpeg']}
        alt={'alt'}
        style={{
          width: '100%',
          height: '500px',
          objectFit: 'cover',
          backgroundAttachment: 'fixed',
          marginBottom: '20px'
        }}/>
        <Box
          margin="0 auto"
          display="grid"
          gridTemplateColumns="repeat(auto-fill, 300px)"
          justifyContent="space-around"
          rowGap="20px"
          columnGap="1.33%">
            {places}
        </Box>
    </Box>
  )
}

export default Stockists;
