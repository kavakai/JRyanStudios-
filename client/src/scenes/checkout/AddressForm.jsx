import React from 'react';
import { Box, useMediaQuery, TextField } from '@mui/material';
import { getIn } from 'formik';


const AddressForm = ({ type, value, errors, touched, handleBlur, handleChange }) => {
  const isNonMobile = useMediaQuery('(min-width: 600px)');

  // Functions for better readability
  const formattedName = (field) => `${type}.${field}`;
  return (
    <div>AddressForm</div>
  )
}

export default AddressForm