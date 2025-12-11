const database = require("../models/database")
const Think = require("../models/Think")


//controller to handle product-related requests
//get all products
exports.findAll = (req, res)=>{
      Think.find()
      .then((think)=>{
            const products = {products: think};
            res.status(200).json(products)
      }) 
      .catch(err=>console.log(err)) 
}
//get one product
exports.findOne = (req, res)=>{
      Think.findOne({_id:req.params.id})
      .then((think)=>{
            const products = {product: think};
            res.status(200).json(products)
      }) 
      .catch(err=>console.log(err)) 
      
}

//create product
exports.createProduct = (req, res, next)=>{
      const think = new Think({
            ...req.body
      });
      console.log(think)
      think.save()
      .then(()=>console.log("super"))
      .catch(err => console.log(err))
      const products = {product: think};

      res.json(products)
      next()
}

exports.updateProduct = (req, res, next)=>{
      
      Think.updateOne({_id:req.params.id}, {...req.body, _id:req.params.id})
      .then(()=>console.log("modifié"))
      .catch(err => console.log(err))

      res.status(200).json({message:"Modified!"})
      next()
}


exports.deleteProduct = (req, res, next)=>{
      
      Think.deleteOne({_id:req.params.id})
      .then(()=>console.log("modifié"))
      .catch(err => console.log(err))

      res.status(200).json({message:"Deleted!"})
      next()
}