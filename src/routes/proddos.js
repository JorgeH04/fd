const express = require('express');
const router = express.Router();

const path = require('path');
const { unlink } = require('fs-extra'); 
    
// Models
const Proddos = require('../models/proddos');
const Cart = require('../models/cart');
const Order = require('../models/order');
const Cartdolar = require('../models/cartdolar');
// Helpers
const { isAuthenticated } = require('../helpers/auth');
 
 const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name:'dernadqrq',
  api_key:'241274546791763',
  api_secret:'EnOvxHpFoTKSdfDybes9Po6OoPI'
  
});


 





router.post('/proddos/new-proddos',  async (req, res) => {
  const { name, title, filtro, description, enstock, oldprice, color, colorstock, talle, amount, dolarprice, price} = req.body;

  try {
  //  const resp = await cloudinary.v2.uploader.upload(req.files[0].path)
  //  const respdos = await cloudinary.v2.uploader.upload(req.files[1].path)
  //  const resptres = await cloudinary.v2.uploader.upload(req.files[2].path)
  //  const respcuatro = await cloudinary.v2.uploader.upload(req.files[3].path)
  //  const respcinco = await cloudinary.v2.uploader.upload(req.files[4].path)
  //  const respseis = await cloudinary.v2.uploader.upload(req.files[5].path)
  //  const respsiete = await cloudinary.v2.uploader.upload(req.files[6].path)
  //  const respocho = await cloudinary.v2.uploader.upload(req.files[7].path)
  //  const respnueve = await cloudinary.v2.uploader.upload(req.files[8].path)
  //  const respdiez = await cloudinary.v2.uploader.upload(req.files[9].path)

   const newNote = new Proddos({ 
 
    name, title, description, enstock, oldprice, color, colorstock, talle, amount, dolarprice, filtro,
    // imageuno:resp.url,
    // imagedos:respdos.url,
    // imagetres:resptres.url,
    // imagecuatro:respcuatro.url,
    // imagecinco:respcinco.url,
    // imageseis:respseis.url,
    // imagesiete:respsiete.url,
    // imageocho:respocho.url,
    // imagenueve:respnueve.url,
    // imagediez:respdiez.url,
    // price
  });
  await newNote.save();

  res.redirect('/proddosback/1');
 
   }catch(err){
       console.log(err)
   }  
});




     

  router.get('/alquileres/:page', async (req, res) => {

    var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

    let perPage = 15;
    let page = req.params.page || 1;
  
    Proddos
    .find({}) // finding all documents
    .sort({ timestamp: -1 })
    .skip((perPage * page) - perPage) // in the first page the value of the skip is 0
    .limit(perPage) // output just 9 items
    .exec((err, proddos) => {
      Proddos.countDocuments((err, count) => { // count to calculate the number of pages
        if (err) return next(err);
        res.render('proddos/proddos', {
          proddos,
          current: page,
          pages: Math.ceil(count / perPage),
          products: cart.generateArray(), totalPrice: cart.totalPrice

        });
      });
    });
  });
  
  
  


router.get('/alquileres-detalles/:id', async (req, res) => {

  const { id } = req.params;
  const proddos = await Proddos.findById(id);
  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

  res.render('proddos/proddosredirect', {
    proddos,
    products: cart.generateArray(), totalPrice: cart.totalPrice

  });
});




router.get('/proddosback/:page', async (req, res) => {

  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

  let perPage = 8;
  let page = req.params.page || 1;

  Proddos
  .find({}) // finding all documents
  .sort({ timestamp: -1 })
  .skip((perPage * page) - perPage) // in the first page the value of the skip is 0
  .limit(perPage) // output just 9 items
  .exec((err, proddos) => {
    Proddos.countDocuments((err, count) => { // count to calculate the number of pages
      if (err) return next(err);
      res.render('proddos/new-proddos', {
        proddos,
        current: page,
        pages: Math.ceil(count / perPage),
        products: cart.generateArray(), totalPrice: cart.totalPrice

      });
    });
  });
});




router.get('/proddosback/:page', async (req, res) => {


  let perPage =12;
  let page = req.params.page || 1;

  Proddos 
  .find()// finding all documents
  .sort({_id:-1})
  .skip((perPage * page) - perPage) // in the first page the value of the skip is 0
  .limit(perPage) // output just 9 items
  .exec((err, proddos) => {
    Proddos.countDocuments((err, count) => { // count to calculate the number of pages
      if (err) return next(err);
      res.render('proddos/new-proddos', {
        proddos,
        current: page,
        pages: Math.ceil(count / perPage)
      });
    });
  });
});





router.post("/filtroprod", function(req, res){
  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

  let perPage = 15;
  let page = req.params.page || 1;

  var flrtName = req.body.filtroprod;

  if(flrtName!='' ) {

    var flterParameter={ $and:[{ filtro:flrtName},
      {$and:[{},{}]}
      ]
       
    }
    }else{
      var flterParameter={}
  }
  var proddos = Proddos.find(flterParameter);
  proddos
  //.find( flterParameter) 
  .sort({ _id: -1 })
  .skip((perPage * page) - perPage) // in the first page the value of the skip is 0
  .limit(perPage) // output just 9 items
  .exec((err, data) => {
    proddos.countDocuments((err, count) => {  
  //.exec(function(err,data){
      if(err) throw err;
      res.render("proddos/proddos",
      {
        proddos: data, 
        current: page,
        pages: Math.ceil(count / perPage),
        products: cart.generateArray(), totalPrice: cart.totalPrice
      });
    });
  });
});







 ////////////////////////////like////////////////////////

router.get('/likeproddos/:id', async (req, res, next) => {
  // let { id } = req.params;
  // const task = await Ofertauno.findById(id);
  const task = await Proddos.findById(req.params.id);
  task.like = !task.like;
  await task.save();
 // res.redirect('/pedidos/:1');
  res.json(true);
});  
 

// talle y color
router.get('/proddos/tallecolor/:id',  async (req, res) => {
  const proddos = await Proddos.findById(req.params.id);
  res.render('proddos/tallecolor-proddos', { proddos });
});

router.post('/proddos/tallecolor/:id',  async (req, res) => {
//router.post('/addtocardproddos/:id',  async (req, res) => {
  const { id } = req.params;
  await Proddos.updateOne({_id: id}, req.body);
  // const task = await Proddos.findById(id);
  // task.status = !task.status;
  // await task.save();

  //res.redirect('/proddosredirect/' + id);
  //res.redirect('/shopcart');
});




router.get("/searchback", function(req, res){
  var noMatch = null;
  if(req.query.search) {
      const regex = new RegExp(escape(req.query.search), 'gi');
      // Get all campgrounds from DB
      console.log(req.query.search)
      Proddos.find({title: regex}, function(err, proddos){
         if(err){
             console.log(err);
         } else {
            if(proddos.length < 1) {
                noMatch = "No campgrounds match that query, please try again.";
            }
            res.render("produno/new-produno",{proddos, noMatch: noMatch});
         }
      });

  } else {
      // Get all campgrounds from DB
      Proddos.find({}, function(err, proddos){
         if(err){
             console.log(err);
         } else {
            res.render("produno/produno",{proddos, noMatch: noMatch});
         }
      });
  }
});




//editar


router.get('/proddos/edit/:id',  async (req, res) => {
  const proddos = await Proddos.findById(req.params.id);
  res.render('proddos/edit-proddos', { proddos });
});

router.post('/proddos/edit/:id',  async (req, res) => {
  const { id } = req.params;
  await Proddos.updateOne({_id: id}, req.body);
 // res.redirect('/proddosback/' + id);
 res.redirect('/proddosback/1');
});
// router.post('/addtocardproddos/:id',  async (req, res) => {
//   const { id } = req.params;
//   await Proddos.updateOne({_id: id}, req.body);
//   res.redirect('/shopcart');
// });


// Delete 
router.get('/proddos/delete/:id', async (req, res) => {
  const { id } = req.params;
    await Proddos.deleteOne({_id: id});
  res.redirect('/proddosback/1');
});




router.get('/shopcart', function (req, res, next){

  if(!req.session.cart){
    return res.render('cart/shopcart', {products:null})
  }

  var cart = new Cart(req.session.cart);
  res.render('cart/shopcart', {products: cart.generateArray(), totalPrice: cart.totalPrice})
});
 


router.get('/shopcart', function (req, res, next){
  if(!req.session.cart){
    return res.render('cart/shopcart', {products:null})
  }
  var cartdolar = new Cartdolar(req.session.cartdolar);
  var cart = new Cart(req.session.cart);
  res.render('cart/shopcart', {
    products: cart.generateArray(), 
    totalPrice: cart.totalPrice,
    totalPriceDolar: cartdolar.totalPrice
  })
});

 
router.get('/addtocardproddos/:id', async function(req, res, next){
  const { id } = req.params;
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});
   Proddos.findById(productId,async function(err, product){
    if(err){
      return res-redirect('/');
    }


  //  if(product.status == true) {
       cart.add(product, product.id);
      req.session.cart = cart;
     //  product.status = !product.status;
  //    await product.save();
  // }else{
    //  req.flash('success', 'Elija su color y talle primero');
    //  res.redirect('/produnoredirect/' + productId);
  // }


    console.log(req.session.cart);
     req.flash('success', 'Producto agregado al carro exitosamente');
    //res.redirect('/produnoredirect/' + productId);
    
    res.redirect('/shopcart');
  //  await Proddos.deleteOne({_id: id});

  });
});




router.get('/addtocardproddos/:id', function(req, res, next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});
  var cartdolar = new Cartdolar(req.session.cartdolar ? req.session.cartdolar : {items: {}});
  Proddos.findById(productId,async function(err, product){
    if(err){
      return res-redirect('/');
    }


  //  if(product.status == true) {
      cartdolar.add(product, product.id);
      cart.add(product, product.id);
      req.session.cart = cart;
      req.session.cartdolar = cartdolar;
    //  product.status = !product.status;
  //    await product.save();
  // }else{
    //  req.flash('success', 'Elija su color y talle primero');
    //  res.redirect('/produnoredirect/' + productId);
  // }


    console.log(req.session.cart);
    console.log(req.session.cartdolar);
    req.flash('success', 'Producto agregado al carro exitosamente');
    //res.redirect('/produnoredirect/' + productId);
    res.redirect('/shopcart');
  });
});


module.exports = router;
