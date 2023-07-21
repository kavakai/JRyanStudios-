import React from 'react';
import { Box, Typography } from '@mui/material';
import Stockist from './Stockist';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStockists } from "../../scenes/state";


function Stockists() {
  const dispatch = useDispatch();
  const stockers = useSelector((state) => state.cart.stockists);

  const getStores = async () => {
    const stores = await fetch(
      "http://localhost:1337/api/stockists?populate=image",
      { method: "GET" }
    );
    const data = await stores.json();
    console.log(stores, 'storesJson.data')
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

  // const places = stockers.map((place) => (
  //   <Stockist key={Date.Now()} place={place} />
  // ));

  return (
    <Box 
      width="80%" 
      margin="80px auto" 
      >
      <img 
        src={heroTextureImports['shutterstock_537796069.jpg']}
        alt={'alt'}
        style={{
          width: '100%',
          height: '500px',
          objectFit: 'cover',
          backgroundAttachment: 'fixed',
        }}/>
      {console.log(stockers, 'stockers')}
      {/* {places} */}
    </Box>
  )
}

export default Stockists;
