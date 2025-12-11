const express = require("express")
const router = express.Router()
const productsControllers = require("../controllers/products")


//routes for product operations

//get all products
router.get('/', productsControllers.findAll) 

//get one product
router.get('/:id', productsControllers.findOne) 

//create product
router.post('/', productsControllers.createProduct) 

//update product
router.put('/:id', productsControllers.updateProduct) 

//delete product
router.delete('/:id', productsControllers.deleteProduct) 

//exporting the router
module.exports = router