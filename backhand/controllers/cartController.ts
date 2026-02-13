let cart = [];

exports.getCart = (req, res) => {
  res.json(cart);
};

exports.addToCart = (req, res) => {
  const { productId, qty } = req.body;

  const item = {
    id: cart.length + 1,
    productId,
    qty
  };

  cart.push(item);
  res.status(201).json(item);
};
