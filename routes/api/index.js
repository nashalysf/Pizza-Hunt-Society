const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');

//add prefix /pizzas
router.use('/pizzas', pizzaRoutes);

module.exports = router;