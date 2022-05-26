const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
  name: String,
  title: String,
  image: String,
  imagedos: String,
  imagetres: String,
  description: String,
  filtro: String,
  enstock:String,
  color: String,
  colorstock: String,
  talle: String,
  tallestock: String,
  oldprice: Number,
  price: Number,
  amount: Number,
  like: {
    type: Boolean,
    default: false
  },

  status: {
    type: Boolean,
    default: false
  },
});

module.exports = mongoose.model('Prodveinticuatro', NoteSchema);
