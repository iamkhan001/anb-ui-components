export function formatAmount(amount: number, decimalPlaces: number): string {
  if (isNaN(amount) || isNaN(decimalPlaces)) {
    return '-';
  }
  const [value, decimal] = amount.toFixed(decimalPlaces).toString().split('.');
  console.log(value, decimal);
  return value?.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.' + decimal || '-';
}
