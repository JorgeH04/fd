const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
  name: String,
  title: String,
  
  imageuno: String,
  imagedos: String,
  imagetres: String,

  path: String,


  filenameuno: {type: String},
  filenamedos: {type: String},
  filenametres: {type: String},

  originalnameuno: {type: String},
  originalnamedos: {type: String},
  originalnametres: {type: String},

  public_id: String,

  mimetype: {type: String},
  size: { type: Number},
  description: String,
  filtro: String,
  enstock:String,
  color: String,
  colorstock: String,
  talle: String,
  tallestock: String,
  oldprice: Number, 
  price: Number,
  dolarprice: Number,
  amount: Number,
  like: {
    type: Boolean,
    default: false
  },

  status: {
    type: Boolean,
    default: false
  } 
});

module.exports = mongoose.model('Prodcatorce', NoteSchema);
