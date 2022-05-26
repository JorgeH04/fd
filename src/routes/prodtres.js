const express = require('express');
const router = express.Router();
 
const path = require('path');
const { unlink } = require('fs-extra');
// Models
const Prodtres = require('../models/prodtres');
const Cart = require('../models/cart');
const Cartdolar = require('../models/cartdolar');
 
// Helpers
const { isAuthenticated } = require('../helpers/auth');

const cloudinary = require('cloudinary');

router.get('/drama/:page', async (req, res) => {

  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

  let perPage = 15;
  let page = req.params.page || 1;

  Prodtres
  .find({}) // finding all documents
  .sort({ timestamp: -1 })
  .skip((perPage * page) - perPage) // in the first page the value of the skip is 0
  .limit(perPage) // output just 9 items
  .exec((err, prodtres) => {
    Prodtres.countDocuments((err, count) => { // count to calculate the number of pages
      if (err) return next(err);
      res.render('prodtres/prodtres', {
        prodtres,
        current: page,
        pages: Math.ceil(count / perPage),
        products: cart.generateArray(), totalPrice: cart.totalPrice

      });
    });
  });
});



router.post('/prodtres/new-prodtres',   async (req, res) => {
  const image = new Prodtres();
  image.title = req.body.title;
  image.description = req.body.description;
  image.filenameuno = req.files.filenameuno;
  image.filenamedos = req.files.filenamedos;
  image.filenametres = req.files.filenametres;
  image.imageuno = '/img/uploads/' + req.files[0].filename;
  image.imagedos = '/img/uploads/' + req.files[1] || [0].filename;
  image.imagetres = '/img/uploads/' + req.files[2] || [0].filename;

 
  image.originalnameuno = req.files.originalnameuno;
  image.originalnamedos = req.files.originalnamedos;
  image.originalnametres = req.files.originalnametres;

  image.mimetype = req.files.mimetype;
  image.size = req.files.size;
  image.enstock = req.body.enstock;
  image.price = req.body.price;
  image.oldprice = req.body.oldprice;
  await image.save();
  console.log(image)
  res.redirect('/prodtresback/1');
});




router.post('/prodtres/new-prodtres',   async (req, res) => {
  const { title, description, price} = req.body;

  try {
    // console.log(req.files)
   const resp = await cloudinary.v2.uploader.upload(req.files[0].path)
   const respdos = await cloudinary.v2.uploader.upload(req.files[1].path)
   const resptres = await cloudinary.v2.uploader.upload(req.files[2].path)
       
   const newNote = new Prodtres({ 
    title,
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

  res.redirect('/prodtresback/1');
 
   }catch(err){
       console.log(err)
   }  
});







router.get('/drama-detalles/:id', async (req, res) => {
  const { id } = req.params;
  const prodtres = await Prodtres.findById(id);
  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

  res.render('prodtres/prodtresredirect', {
    prodtres,
    products: cart.generateArray(), totalPrice: cart.totalPrice

  });
});




 ////////////////////////////like////////////////////////

 router.get('/likeprodtres/:id', async (req, res, next) => {
  // let { id } = req.params;
  // const task = await Ofertauno.findById(id);
  const task = await Prodtres.findById(req.params.id);
  task.like = !task.like;
  await task.save();
 // res.redirect('/pedidos/:1');
  res.json(true);
});



// New product
router.get('/prodtresback/:page', async (req, res) => {

  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

  let perPage = 15;
  let page = req.params.page || 1;

  Prodtres
  .find({}) // finding all documents
  .sort({ timestamp: -1 })
  .skip((perPage * page) - perPage) // in the first page the value of the skip is 0
  .limit(perPage) // output just 9 items
  .exec((err, prodtres) => {
    Prodtres.countDocuments((err, count) => { // count to calculate the number of pages
      if (err) return next(err);
      res.render('prodtres/new-prodtres', {
        prodtres,
        current: page,
        pages: Math.ceil(count / perPage),
        products: cart.generateArray(), totalPrice: cart.totalPrice

      });
    });
  });
});






router.post("/filtroprodtres", function(req, res){
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
  var prodtres = Prodtres.find(flterParameter);
  prodtres
  //.find( flterParameter) 
  .sort({ _id: -1 })
  .skip((perPage * page) - perPage) // in the first page the value of the skip is 0
  .limit(perPage) // output just 9 items
  .exec((err, data) => {
    prodtres.countDocuments((err, count) => {  
  //.exec(function(err,data){
      if(err) throw err;
      res.render("prodtres/prodtres",
      {
        prodtres: data, 
        current: page,
        pages: Math.ceil(count / perPage),
        products: cart.generateArray(), totalPrice: cart.totalPrice
      });
    });
  });
});






// talle y color
router.get('/prodtres/tallecolor/:id',  async (req, res) => {
  const prodtres = await Prodtres.findById(req.params.id);
  res.render('prodtres/tallecolor-prodtres', { prodtres });
});

router.post('/prodtres/tallecolor/:id',  async (req, res) => {
  const { id } = req.params;
  await Prodtres.updateOne({_id: id}, req.body);
  res.redirect('/prodtresredirect/' + id);
});




//editar


router.get('/prodtres/edit/:id',  async (req, res) => {
  const prodtres = await Prodtres.findById(req.params.id);
  res.render('prodtres/edit-prodtres', { prodtres });
});

router.post('/prodtres/edit/:id',  async (req, res) => {
  const { id } = req.params;
  await Prodtres.updateOne({_id: id}, req.body);
  res.redirect('/prodtresback/1');
});




// Delete 
router.get('/prodtres/delete/:id', async (req, res) => {
  const { id } = req.params;
    await Prodtres.deleteOne({_id: id});
  res.redirect('/prodtresback/1');
});






router.get('/addtocardprodtres/:id', function(req, res, next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});
  var cartdolar = new Cartdolar(req.session.cartdolar ? req.session.cartdolar : {items: {}});
  Prodtres.findById(productId,async function(err, product){
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
 