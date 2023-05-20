import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs, Tab, Box, Typography, useMediaQuery } from '@mui/material';
import Item from '../../components/Item';
import { setItems } from '../../scenes/state';


function ShoppingList() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('all');
  const items = useSelector((state) => state.cart.items);
  const isNonMobile = useMediaQuery('(min-width: 600px)');
  console.log(items, 'items')

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const getItems = async () => {
    const items = await fetch(
      'http://localhost:1337/api/items?populate=image',
      { method: 'GET' }
    );
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
  }

  useEffect(() => {
    getItems()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <div>ShoppingList</div>
  )
}

export default ShoppingList