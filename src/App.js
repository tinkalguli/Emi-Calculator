import React, { useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ColorModeContext from "./contexts/color-mode-context";
import Header from "./components/Header";
import CalculatorResult from "./components/CalculatorResult";
import Calculator from './components/Calculator';
import './App.css';

const getDesignTokens = (mode) => {
  console.log(mode);
  return {
    palette: {
      mode,
      ...(mode === 'light'
        ? {
          // palette values for light mode
          // primary: "rgba(0, 0, 0, 0.87)",
          // secondary: "rgba(0, 0, 0, 0.6)",
          // text: {
          //   primary: "#000",
          //   secondary: "#000",
          // },
          typography: {
            fontFamily: [
              'Rubik',
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
            ].join(','),
          }
        }
        : {
          // palette values for dark mode
          // primary: "#fff",
          // secondary: "rgba(255, 255, 255, 0.7)",
          // background: {
          //   default: deepOrange[900],
          //   paper: deepOrange[900],
          // },
          // text: {
          //   primary: "#fff",
          //   secondary: "rgba(255, 255, 255, 0.7)",
          // },
          typography: {
            fontFamily: [
              'Rubik',
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
            ].join(','),
          }
        }),
    }
  }
};

const calculateEMI = (principal, rate, time) => {
  const interest = rate / (12 * 100);
  const periods = time * 12;
  const emi =
    (principal * interest * Math.pow(1 + interest, periods)) /
    (Math.pow(1 + interest, periods) - 1);
  const totalPayment = emi * periods;
  const totalInterest = totalPayment - principal;

  return { emi, totalPayment, totalInterest };
};

const App = () => {
  const [downPayment, setDownPayment] = React.useState(20000);
  const [interestRate, setInterestRate] = React.useState(8);
  const [loanPeriod, setLoanPeriod] = React.useState(24);
  const [marketPrice, setOnRoadPrice] = React.useState(50000);
  const principal = marketPrice - downPayment;
  const { emi, totalPayment, totalInterest } = calculateEMI(
    principal,
    interestRate,
    loanPeriod
  );

  const [mode, setMode] = useState('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme(getDesignTokens(mode)),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App" sx={{ backgroundColor: "background.primary" }}>
          <Header />
          <Container maxWidth="sm">
            <CalculatorResult totalPayment={totalPayment} emi={emi} loanPeriod={loanPeriod} principal={principal} totalInterest={totalInterest} />
            <Calculator
              downPayment={downPayment}
              setDownPayment={setDownPayment}
              interestRate={interestRate}
              setInterestRate={setInterestRate}
              loanPeriod={loanPeriod}
              setLoanPeriod={setLoanPeriod}
              marketPrice={marketPrice}
              setOnRoadPrice={setOnRoadPrice}
            />
          </Container>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;