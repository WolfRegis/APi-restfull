const express = require("express")
const productsRouter = require("./routes/products")
require('dotenv').config()


//server setup
const server = express()


//middlewares for CORS and bodyParser
server.use(express.json());
server.use(express.urlencoded())
server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


//routes
server.use('/api/products/', productsRouter)   



//server launch
server.listen(process.env.PORT, (req, res)=>{
      console.log("server démarré")
})