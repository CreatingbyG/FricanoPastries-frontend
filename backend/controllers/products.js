const Product = require('../models/product');

const addNewProduct = async (req, res) => {
    const newProduct = new Product({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      imageUrl: req.body.imageUrl
    });
  
    try {
      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct); // Asegúrate de enviar una respuesta
    } catch (error) {
      console.error('Error saving product:', error);
      res.status(500).json({ error: 'Error saving product' }); // Envía una respuesta en caso de error
    }
  };


module.exports = {
addNewProduct
  };