const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');
const commentRoutes = require('./comment-route');

//add prefix /pizzas
router.use('/pizzas', pizzaRoutes);
router.use('/comment', commentRoutes);

module.exports = router;