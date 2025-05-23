function getOrCreate(obj, key, fallback) {
  if (!obj[key]) obj[key] = fallback;
  return obj[key];
}

const city = getOrCreate(acc, current.city, {});
const store = getOrCreate(city, current.store, {});
const product = getOrCreate(store, current.product, { quantity: 0, total: 0 });

product.quantity += current.quantity;
product.total += current.quantity * current.price;
