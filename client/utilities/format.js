export const formatPrice = price => `₦${price.toLocaleString()}`;

export const unformatPrice = (price) => {
  let rawPrice = price.replace(',', '');
  rawPrice = rawPrice.replace('₦', '');
  return rawPrice;
};
