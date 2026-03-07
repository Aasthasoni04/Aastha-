const Cart = require("../models/Cart");


exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.find().populate("productId");
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.addToCart = async (req, res) => {
  try {
    const cartItem = new Cart(req.body);

    const savedItem = await cartItem.save();

    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.updateCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedCart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.deleteCartItem = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.json({ message: "Cart item deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};