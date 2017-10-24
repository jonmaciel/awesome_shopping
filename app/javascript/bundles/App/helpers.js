export const normalizeById = products => {
  let normalizedProducts = {};
  products.forEach(product => (normalizedProducts[product.id] = product));
  return normalizedProducts;
};
