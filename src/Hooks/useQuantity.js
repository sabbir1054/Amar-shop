const quantity = (product) => {
    let totalQuantity = totalQuantity + product.quantity;
    if (!product.quantity) {
      product.quantity = 1;
  }
  return quantity;
}