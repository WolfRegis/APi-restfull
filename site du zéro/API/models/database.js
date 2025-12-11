require('dotenv').config()

const mongoose = require("mongoose")



//database connection setup
const db = mongoose.connect(process.env.DB_URI)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((err) => console.log('Connexion à MongoDB échouée !'+err));

module.exports = db