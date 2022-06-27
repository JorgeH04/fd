const express = require('express');
const router = express.Router();
 
// Models
const Ofertauno = require('../models/ofertauno');
const Cart = require('../models/cart');
const Cartdolar = require('../models/cartdolar');
const Order = require('../models/order');
// Helpers
const { isAuthenticated } = require('../helpers/auth');



const path = require('path');
const { unlink } = require('fs-extra');
const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name:'dernadqrq',
  api_key:'241274546791763',
  api_secret:'EnOvxHpFoTKSdfDybes9Po6OoPI'
  
});


router.post('/ofertauno/new-ofertauno',  async (req, res) => {
  const { name, title, description, enstock, oldprice, color, colorstock, talle, amount, dolarprice, price} = req.body;

   try {
    // console.log(req.files)
   const resp = await cloudinary.v2.uploader.upload(req.files[0].path)
   const respdos = await cloudinary.v2.uploader.upload(req.files[1].path)
   const resptres = await cloudinary.v2.uploader.upload(req.files[2].path)
       
   const newNote = new Ofertauno({ 
 
    name, title, description, enstock, oldprice, color, colorstock, talle, amount, dolarprice,
    description,
    imageuno:resp.url,
    imagedos:respdos.url,
    imagetres:resptres.url,
    price


  });
  //newNote.user = req.user.id;
  await newNote.save();
  // await unlink(resp[0])
  // await unlink(respdos[1])
  // await unlink(resptres[2])

  res.redirect('/ofertauno/add');
 
   }catch(err){
       console.log(err)
   }  
});











router.get('/ofertaunoredirect/:id', async (req, res) => {
  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

  const { id } = req.params;
  const ofertauno = await Ofertauno.findById(id);
  res.render('ofertauno/ofertaunoredirect', {
    ofertauno,
    products: cart.generateArray(), totalPrice: cart.totalPrice

  });
});








// New product
router.get('/ofertauno/add',  async (req, res) => {
  const ofertauno = await Ofertauno.find();
  res.render('ofertauno/new-ofertauno',  { ofertauno });
});



////////////////////////////like////////////////////////

router.get('/like/:id', async (req, res, next) => {
  // let { id } = req.params;
  // const task = await Ofertauno.findById(id);
  const task = await Ofertauno.findById(req.params.id);
  task.like = !task.like;
  await task.save();
 // res.redirect('/pedidos/:1');
  res.json(true);
});
 


////////////////////////////////////////crud////////////////////////////////////////////////7



//editar


router.get('/ofertauno/edit/:id',  async (req, res) => {
  const ofertauno = await Ofertauno.findById(req.params.id);
  res.render('ofertauno/edit-ofertauno', { ofertauno });
});

router.post('/ofertauno/edit/:id',  async (req, res) => {
  const { id } = req.params;
  await Ofertauno.updateOne({_id: id}, req.body);
  res.redirect('/ofertauno/add');
});



// Delete 
router.get('/ofertauno/delete/:id', async (req, res) => {
  const { id } = req.params;
    await Ofertauno.deleteOne({_id: id});
  res.redirect('/ofertauno/add');
});




////////////////////////////////////////cart////////////////////////////////////////////////7


router.get('/addtocardofertauno/:id', function(req, res, next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});
  var cartdolar = new Cartdolar(req.session.cartdolar ? req.session.cartdolar : {items: {}});

  Ofertauno.findById(productId, function(err, product){
    if(err){
      return res-redirect('/');
    }
    cartdolar.add(product, product.id);
    cart.add(product, product.id);
    req.session.cart = cart;
    req.session.cartdolar = cartdolar;
    console.log(req.session.cart);
    res.redirect('/shopcart');

  });
});


module.exports = router;
