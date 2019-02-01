export const formatPrice = (price) => {
  let amt = String(price),
    amtArray = amt.split(""),
    index = amtArray.length - 1, i = 0;
  while (index !== -1) {
    i++;
    if (i === 3) {
      i = 0;
      amtArray.splice(index, 0, ",");
    }
    index--;
  }
  if (amt.length % 3 === 0) {
    amtArray.shift();
  }
  amtArray.splice(0, 0, '₦');
  return amtArray.join("");
};
export const unformatPrice = (price) => {
  let rawPrice = price.replace(',', '');
  rawPrice = rawPrice.replace('₦', '');
  return rawPrice;
};
