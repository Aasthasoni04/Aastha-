let orders = [];

exports.getOrders = (req, res) => {
  res.json(orders);
};

exports.createOrder = (req, res) => {
  const { userId, items } = req.body;

  const order = {
    id: orders.length + 1,
    userId,
    items
  };

  orders.push(order);
  res.status(201).json(order);
};
