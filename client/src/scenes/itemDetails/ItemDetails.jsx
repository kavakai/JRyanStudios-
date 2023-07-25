import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, Button, Tabs, Tab, InputLabel, MenuItem, FormControl, Select, SelectChangeEvent, FormHelperText, ImageList, ImageListItem } from "@mui/material";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../scenes/state";
import { useParams } from "react-router-dom";
import Item from '../../components/Item';

function ItemDetails() {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState('description'); 
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  }
  
  async function getItem() {
    const item = await fetch(
      `http://localhost:1337/api/items/${itemId}?populate=*`,
      {method: 'GET'}
    );
    const itemJson = await item.json();
    setItem(itemJson.data);
  }

  async function getItems() {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image",
      { method: "GET" }
    );
    const itemsJson = await items.json();
    setItems(itemsJson.data);
  }

  useEffect(() => {
    getItem();
    getItems();
  }, [itemId]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box width="80%" m="80px auto">
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        {/* IMG SELECTOR */}
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {item?.attributes?.thumbnails.data.map((item) => (
            <ImageListItem key={item?.attributes?.name}>
              <img
                src={`http://localhost:1337${item?.attributes?.url}`}
                srcSet={`http://localhost:1337${item?.attributes?.url}`}
                alt={item?.attributes?.name}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        {/* IMAGES */}
        <Box flex="1 1 30%" mb="40px">
          <img
            alt={item?.name}
            width="100%"
            height="100%"
            src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.url}`}
            style={{ objectFit: "contain" }}
          />
        </Box>
        {/* ACTIONS */}
        <Box flex="1 1 50%" mb="40px">
          {/* <Box display="flex" justifyContent="space-between">
            <Box>Home/Item</Box>
            <Box>Prev Next</Box>
          </Box> */}

          <Box m="65px 0 25px 0">
            <Typography variant="h3">{item?.attributes?.name}</Typography>
            <Typography>${item?.attributes?.price}</Typography>
            <Typography sx={{ mt: "20px" }}>
              {item?.attributes?.shortDescription}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" minHeight="50px">
            <Box
              display="flex"
              alignItems="center"
              border={`1.5px solid ${shades.neutral[300]}`}
              mr="20px"
              p="2px 5px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 0))}>
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ p: "0 5px" }}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            

            {/* COLOR SELECTOR */}
            {item?.attributes?.colorOptions === 'Yes' ?
            <Box sx={{ minWidth: 120 }} mr="20px" p="2px 5px">
              <FormControl required fullWidth>
                <InputLabel id="color-label">Color</InputLabel>
                <Select
                  labelId="color-label"
                  id="color"
                  label="Color"
                  defaultValue='warm'
                  onChange={(e) => {
                    setItem({...item, attributes: {...item.attributes, color: e.target.value}});
                  }}
                  >
                  <MenuItem value="warm">Warm</MenuItem>
                  <MenuItem value="cool">Cool</MenuItem>
                  <MenuItem value="bright">Bright</MenuItem> 
                  <MenuItem value="soft">Soft</MenuItem>   
                </Select>
              </FormControl>
            </Box> 
            : null} 
            <Button
              sx={{
                backgroundColor: "#222222",
                color: "white",
                borderRadius: 0,
                minWidth: "150px",
                padding: "10px 40px",
              }}
              onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
            >
              ADD TO CART
            </Button>
          </Box>
          {/* <Box>
            <Box m="20px 0 5px 0" display="flex">
              <FavoriteBorderOutlinedIcon />
              <Typography sx={{ ml: "5px" }}>ADD TO WISHLIST</Typography>
            </Box>
            <Typography>CATEGORIES: {item?.attributes?.category.replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}</Typography>
          </Box> */}
        </Box>
      </Box>

      {/* INFORMATION */}
      <Box m="20px 0">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="DESCRIPTION" value="description" />
          {/* <Tab label="REVIEWS" value="reviews" /> */}
        </Tabs>
      </Box>
      <Box display="flex" flexWrap="wrap" gap="15px">
        {value === "description" && (
          <div>{item?.attributes?.longDescription}</div>
        )}
        {value === "reviews" && <div>reviews</div>}
      </Box>

      {/* RELATED ITEMS */}
      <Box mt="50px" width="100%">
        <Typography variant="h3" fontWeight="bold">
          Related Products
        </Typography>
        <Box
          mt="20px"
          display="flex"
          flexWrap="wrap"
          columnGap="1.33%"
          justifyContent="space-between"
        >
          {items.filter((i) => i.attributes.category === item.attributes.category).map((item, i) => (
            <Item key={`${item.name}-${i}`} item={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ItemDetails