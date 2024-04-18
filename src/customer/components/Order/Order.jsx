import { Grid } from '@mui/material';
import React from 'react';
import OrderCard from './OrderCart';

const orderStatus = [
    { label: "On The Way", value: "on_the_way" },
    { label: "Delivered", value: "delivered" }, // Fixed typo in "value" property
    { label: "Cancelled", value: "cancelled" },
    { label: "Returned", value: "returned" }, // Added missing comma
  ];
  

const Order = () => {
  return (
    <div className='px:5 lg:px-20'>
      <Grid container sx={{ justifyContent: "space-between" }}>
      <Grid item xs={2.5}>
  <div className='h-auto shadow-1g bg-white p-5 sticky top-5'>
    <h1 className='font-bold text-lg'>Filter</h1>

    <div className='space-y-4 mt-10'>
      <h1 className='font-semibold'>ORDER STATUS</h1> {/* Enclosed in curly braces */}
      {orderStatus.map((option) => (
  <div key={option.value} className='flex items-center'>
    <input 
      defaultValue={option.value} 
      type="checkbox" 
      className='h-4 w-4 border-gray-300 focus:ring-indigo-500 text-indigo-600'
      id={option.value} // Added id attribute
    />
    <label htmlFor={option.value} className='ml-3 text-sm text-gray-600'>
      {option.label} {/* Displaying label text */}
    </label>
  </div>
))}

    </div>
  </div>
</Grid>

   <Grid item xs ={9}>

   <div className='space-y-5'> 
{[1,1,1,1,1,1].map((item)=> <OrderCard/>)}
</div>

   </Grid>


      </Grid>
    </div>
  );
}

export default Order;
