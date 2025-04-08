export function formatAmount(amount: number, decimalPlaces: number) {
  if (isNaN(amount) || isNaN(decimalPlaces)) {
    return '-';
  }
  const [value, decimal] = amount.toFixed(decimalPlaces).toString().split('.');
  console.log(value, decimal);
  return value?.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.' + decimal || '-';
}

export function formatAmountWithDecimal(amount: number, decimalPlaces: number) {
  if (isNaN(amount) || isNaN(decimalPlaces)) {
    return {
      value: '-',
      decimal: '-',
    };
  }
  const [value, decimal] = amount.toFixed(decimalPlaces).toString().split('.');
  console.log(value, decimal);
  return {
    value: value?.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    decimal: '.' + decimal,
  };
}
