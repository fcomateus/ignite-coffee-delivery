export function formatPriceToBRL(price: number) {
  const splitedPrice = String(parseFloat(price)).split('.')
  const integerPartPrice = splitedPrice[0]
  const floatPartPrice = splitedPrice[1].padEnd(2, '0')

  const priceFormatted = `${integerPartPrice},${floatPartPrice}` 
  return priceFormatted
}