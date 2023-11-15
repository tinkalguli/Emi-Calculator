import React from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';

const Calculator = ({
  downPayment,
  setDownPayment,
  interestRate,
  setInterestRate,
  loanPeriod,
  setLoanPeriod,
  marketPrice,
  setOnRoadPrice
}) => {
  const handleSliderChange = (setter) => (event, newValue) => {
    setter(newValue);
  };

  return (
    <Box sx={{ pt: 3 }}>
      <form>
        <FormControl fullWidth sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
          <div class="row">
            <div style={{ width: "75%" }}>
              <Typography>Down Payment (Rs.):</Typography>
              <Slider
                size="small"
                sx={{ marginTop: 1 }}
                color="secondary"
                value={downPayment}
                onChange={handleSliderChange(setDownPayment)}
                min={0}
                max={50000}
                step={1000}
              />
            </div>
            <OutlinedInput
              size="small"
              startAdornment={<InputAdornment position="start">₹</InputAdornment>}
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value === '' ? '' : Number(e.target.value))}
              onBlur={() => {
                if (downPayment < 0) {
                  setDownPayment(0);
                } else if (downPayment > 50000) {
                  setDownPayment(50000);
                }
              }}
              sx={{ maxWidth: '25%', width: "max-content", marginLeft: 4 }}
              inputProps={{ step: 1000, min: 0, max: 50000, type: 'number' }}
            />
          </div>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 1 }}>
          <div class="row">
            <div style={{ width: "75%" }}>
              <Typography>Bank Interest Rate (%):</Typography>
              <Slider
                sx={{ marginTop: 1 }}
                value={interestRate}
                onChange={handleSliderChange(setInterestRate)}
                min={0}
                max={20}
                step={1}
                size="small"
                color="secondary"
              />
            </div>
            <OutlinedInput
              size="small"
              endAdornment={<InputAdornment position="end">%</InputAdornment>}
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value === '' ? '' : Number(e.target.value))}
              onBlur={() => {
                if (interestRate < 0) {
                  setInterestRate(0);
                } else if (interestRate > 20) {
                  setInterestRate(20);
                }
              }}
              sx={{ width: '20%', marginLeft: 4 }}
              inputProps={{ step: 1, min: 0, max: 20, type: 'number' }}
            />
          </div>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 1 }}>
          <div class="row">
            <div style={{ width: "75%" }}>
              <Typography>Loan Period (Months):</Typography>
              <Slider
                marks
                value={loanPeriod}
                sx={{ marginTop: 1 }}
                onChange={handleSliderChange(setLoanPeriod)}
                min={0}
                max={60}
                step={6}
                size="small"
                color="secondary"
              />
            </div>
            <OutlinedInput
              size="small"
              endAdornment={<InputAdornment position="end">mos</InputAdornment>}
              value={loanPeriod}
              onChange={(e) => setLoanPeriod(e.target.value === '' ? '' : Number(e.target.value))}
              onBlur={() => {
                if (loanPeriod < 0) {
                  setLoanPeriod(0);
                } else if (loanPeriod > 60) {
                  setLoanPeriod(60);
                }
              }}
              sx={{ width: '20%', marginLeft: 4 }}
              inputProps={{ step: 6, min: 0, max: 60, type: 'number' }}
            />
          </div>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 1 }}>
          <div class="row">
            <div style={{ width: "75%" }}>
              <Typography>Market Price (Rs.):</Typography>
              <Slider
                sx={{ marginTop: 1 }}
                value={marketPrice}
                onChange={handleSliderChange(setOnRoadPrice)}
                min={0}
                max={100000}
                step={5000}
                size="small"
                color="secondary"
              />
            </div>
            <OutlinedInput
              size="small"
              startAdornment={<InputAdornment position="start">₹</InputAdornment>}
              value={marketPrice}
              onChange={(e) => setOnRoadPrice(e.target.value === '' ? '' : Number(e.target.value))}
              onBlur={() => {
                if (marketPrice < 0) {
                  setOnRoadPrice(0);
                } else if (marketPrice > 100000) {
                  setOnRoadPrice(100000);
                }
              }}
              sx={{ width: '20%', marginLeft: 4 }}
              inputProps={{ step: 5000, min: 0, max: 100000, type: 'number' }}
            />
          </div>
        </FormControl>
      </form>
    </Box >
  );
};

export default Calculator;