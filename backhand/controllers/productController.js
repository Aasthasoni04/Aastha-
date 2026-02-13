let products = [
  { id: 1, name: "Headphones", price: 1999 },
  { id: 2, name: "Smart Watch", price: 2999 }
];

exports.getProducts = (req, res) => {
  res.json(products);
};

exports.addProduct = (req, res) => {
  const { name, price } = req.body;

  const product = {
    id: products.length + 1,
    name,
    price
  };

  products.push(product);
  res.status(201).json(product);
};
