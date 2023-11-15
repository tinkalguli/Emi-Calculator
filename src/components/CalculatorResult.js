import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { getCurrencyString } from "../utils/currency";

const CalculatorResult = ({ totalPayment, loanPeriod, emi, principal, totalInterest }) => (
  <div>
    <Card sx={{ mb: 2, borderRadius: 6, textAlign: "center" }}>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ fontFamily: 'Rubik', fontWeight: "bold" }} color="text.secondary" gutterBottom>
          Monthly payable EMI
        </Typography>
        <Typography variant="h4" component="div" sx={{ fontFamily: 'Rubik', pb: 2, fontWeight: "bold" }}>
          {getCurrencyString(emi)}
        </Typography>
        <Typography color="text.secondary" sx={{ fontFamily: 'Rubik' }}>
          Total payable for {loanPeriod} months
          <Typography sx={{ fontFamily: 'Rubik', fontWeight: "bold", display: "inline-block", pl: 1 }}>{`${getCurrencyString(totalPayment)}`}</Typography>
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ borderRadius: 6 }}>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: "flex", mb: 1.5, justifyContent: 'space-between' }}>
          <Typography color="text.secondary" sx={{ fontFamily: 'Rubik' }}>
            Total interest payable
          </Typography>
          <Typography color="text.secondary" sx={{ fontFamily: 'Rubik' }}>
            {getCurrencyString(totalInterest)}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: 'space-between' }}>
          <Typography color="text.secondary" sx={{ fontFamily: 'Rubik' }}>
            Market price
          </Typography>
          <Typography color="text.secondary" sx={{ fontFamily: 'Rubik' }}>
            {getCurrencyString(principal)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  </div >
);

export default CalculatorResult;