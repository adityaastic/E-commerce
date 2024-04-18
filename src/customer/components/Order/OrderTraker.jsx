import { Stepper, Step, StepLabel } from '@mui/material'; // Import Step and StepLabel components
import React from 'react';

const steps = [
  "Placed",
  "Order Confirmed",
  "Shipped",
  "Out For Delivery",
  "Delivered"
]; // Complete the array declaration with proper closing bracket

const OrderTracker = ({ activeStep }) => { // Corrected component name to OrderTracker
  return (
    <div className='w-full'>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}> {/* Added key prop for each Step */}
            <StepLabel sx={{ color: "#9155FD", fontSize: "44px" }}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

export default OrderTracker; // Corrected export name to OrderTracker
