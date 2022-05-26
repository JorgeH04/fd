const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary');


// Models
const Prodcuatro = require('../models/prodcuatro');
const Cart = require('../models/cart');
const Cartdolar = require('../models/cartdolar');
 
// Helpers
const { isAuthenticated } = require('../helpers/auth');


router.get('/suspenso/:page', async (req, res) => {

  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

  let perPage = 15;
  let page = req.params.page || 1;

  Prodcuatro
  .find({}) // finding all documents
  .sort({ timestamp: -1 })
  .skip((perPage * page) - perPage) // in the first page the value of the skip is 0
  .limit(perPage) // output just 9 items
  .exec((err, prodcuatro) => {
    Prodcuatro.countDocuments((err, count) => { // count to calculate the number of pages
      if (err) return next(err);
      res.render('prodcuatro/prodcuatro', {
        prodcuatro,
        current: page,
        pages: Math.ceil(count / perPage),
        products: cart.generateArray(), totalPrice: cart.totalPrice

      });
    });
  });
});








router.post('/prodcuatro/new-prodcuatro',  async (req, res) => {
  const { title, description, price} = req.body;

  try {
    // console.log(req.files)
   const resp = await cloudinary.v2.uploader.upload(req.files[0].path)
   const respdos = await cloudinary.v2.uploader.upload(req.files[1].path)
   const resptres = await cloudinary.v2.uploader.upload(req.files[2].path)
       
   const newNote = new Prodcuatro({ 
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

  res.redirect('/prodcuatroback/1');
 
   }catch(err){
       console.log(err)
   }  
});





router.get('/suspenso-detalles/:id', async (req, res) => {
  const { id } = req.params;
  const prodcuatro = await Prodcuatro.findById(id);
  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

  res.render('prodcuatro/prodcuatroredirect', {
    prodcuatro,
    products: cart.generateArray(), totalPrice: cart.totalPrice

  });
});




router.post("/filtroprodcuatro", function(req, res){
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
  var prodcuatro = Prodcuatro.find(flterParameter);
  prodcuatro
  //.find( flterParameter) 
  .sort({ _id: -1 })
  .skip((perPage * page) - perPage) // in the first page the value of the skip is 0
  .limit(perPage) // output just 9 items
  .exec((err, data) => {
    prodcuatro.countDocuments((err, count) => {  
  //.exec(function(err,data){
      if(err) throw err;
      res.render("prodcuatro/prodcuatro",
      {
        prodcuatro: data, 
        current: page,
        pages: Math.ceil(count / perPage),
        products: cart.generateArray(), totalPrice: cart.totalPrice
      });
    });
  });
});








 ////////////////////////////like////////////////////////

 router.get('/likeprodcuatro/:id', async (req, res, next) => {
  // let { id } = req.params;
  // const task = await Ofertauno.findById(id);
  const task = await Prodcuatro.findById(req.params.id);
  task.like = !task.like;
  await task.save();
 // res.redirect('/pedidos/:1');
  res.json(true);
});



// New product
router.get('/prodcuatroback/:page', async (req, res) => {
  let perPage = 8;
  let page = req.params.page || 1;

  Prodcuatro
  .find({}) // finding all documents
  .sort({ timestamp: -1 })
  .skip((perPage * page) - perPage) // in the first page the value of the skip is 0
  .limit(perPage) // output just 9 items
  .exec((err, prodcuatro) => {
    Prodcuatro.countDocuments((err, count) => { // count to calculate the number of pages
      if (err) return next(err);
      res.render('prodcuatro/new-prodcuatro', {
        prodcuatro,
        current: page,
        pages: Math.ceil(count / perPage)
      });
    });
  });
});




// talle y color
router.get('/prodcuatro/tallecolor/:id',  async (req, res) => {
  const prodcuatro = await Prodcuatro.findById(req.params.id);
  res.render('prodcuatro/tallecolor-prodcuatro', { prodcuatro });
});

router.post('/prodcuatro/tallecolor/:id',  async (req, res) => {
  const { id } = req.params;
  await Prodcuatro.updateOne({_id: id}, req.body);
  res.redirect('/prodcuatroredirect/' + id);
});




//editar


router.get('/prodcuatro/edit/:id',  async (req, res) => {
  const prodcuatro = await Prodcuatro.findById(req.params.id);
  res.render('prodcuatro/edit-prodcuatro', { prodcuatro });
});

router.post('/prodcuatro/edit/:id',  async (req, res) => {
  const { id } = req.params;
  await Prodcuatro.updateOne({_id: id}, req.body);
  res.redirect('/prodcuatroback/:1');
});




// Delete 
router.get('/prodcuatro/delete/:id', async (req, res) => {
  const { id } = req.params;
    await Prodcuatro.deleteOne({_id: id});
  res.redirect('/prodcuatroback/:1');
});






router.get('/addtocardprodcuatro/:id', function(req, res, next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});
  var cartdolar = new Cartdolar(req.session.cartdolar ? req.session.cartdolar : {items: {}});
  Prodcuatro.findById(productId,async function(err, product){
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
 