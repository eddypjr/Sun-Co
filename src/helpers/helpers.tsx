export const findMatchingStrings = (
  imageArray: string[],
  brand: string,
  name: string
) => {
  const regex = new RegExp(`\\/products\\/${brand}\\/`, 'i');
  const matchingStrings = imageArray.filter((str) => regex.test(str));

  const productName = name.replace(/\s+/g, '').toLowerCase();
  const productNameRegex = new RegExp(`/Nike/${productName}/`, 'i');

  // Nike has two different products, further filtering needed
  const nikeImages = imageArray.filter((str) => productNameRegex.test(str));

  if (brand === 'Nike') {
    return nikeImages;
  }
  return matchingStrings;
};

export const findImagesContainingBrandOrName = (
  imageUrls: string[],
  brand: string,
  name: string
): string[] => {
  const regexBrand = brand.replace(/\s/g, '[\\s-]*'); // Convert the brand to a regular expression pattern
  const regexName = name.replace(/\s/g, '[\\s-]*'); // Convert the name to a regular expression pattern

  const brandRegex = new RegExp(regexBrand, 'i');
  const nameRegex = new RegExp(regexName, 'i');

  return imageUrls.filter((str) => brandRegex.test(str) || nameRegex.test(str));
};
