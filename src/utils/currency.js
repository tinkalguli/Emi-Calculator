export const getCurrencyString = (value) => {
  if (isNaN(value)) return "₹0";

  return `₹${Number(value)?.toFixed(2)}`;
};