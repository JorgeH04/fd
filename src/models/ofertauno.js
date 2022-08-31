const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
  name: String,
  title: String,
  
  imageuno: String,
  imagedos: String,
  imagetres: String,
  imagecuatro: String,
  imagecinco: String,
  imageseis: String,
  imagesiete: String,
  imageocho: String,
  imagenueve: String,
  imagediez: String,

  imageonce: String,
  imagedoce: String,
  imagetrece: String,
  imagecatorce: String,
  imagequince: String,
  imagedieciseis: String,
  imagediecisiete: String,
  imagedieciocho: String,
  imagediecinueve: String,
  imageveinte: String,

  imageveintiuno: String,
  imageveintidos: String,
  imageveintitres: String,
  imageveinticuatro: String,
  imageveinticinco: String,

  path: String,


  // filenameuno: {type: String},
  // filenamedos: {type: String},
  // filenametres: {type: String},

  // originalnameuno: {type: String},
  // originalnamedos: {type: String},
  // originalnametres: {type: String},

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
  oldprice: String, 
  price: Number,
  dolarprice: String,
  amount: String,
  like: {
    type: Boolean,
    default: false
  },

  status: {
    type: Boolean,
    default: false
  } 
});

module.exports = mongoose.model('Ofertauno', NoteSchema);
