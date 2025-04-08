export function formatAmount(amount: number, decimalPlaces: number): string {
  if (isNaN(amount) || isNaN(decimalPlaces)) {
    throw new Error('Invalid input: amount and decimalPlaces must be numbers');
  }

  return amount.toFixed(decimalPlaces).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
