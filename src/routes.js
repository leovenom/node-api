const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductCOntroller');
// get - ver alguma coisa
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
// post - criar alguma coisa
routes.post('/products', ProductController.store);
// put - atualização
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);


module.exports = routes;