const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary');


// Models
const Proddieciocho = require('../models/proddieciocho');
const Cart = require('../models/cart');
//const Order = require('../models/order');
const Cartdolar = require('../models/cartdolar');

// Helpers
const { isAuthenticated } = require('../helpers/auth');

  



/////////////////////////////////////////////////////////////////////7


router.post('/proddieciocho/new-proddieciocho',  async (req, res) => {
  const { 
    name,
    title,
    image,
    imagedos,
    imagetres,
    imagecuatro,
    imagecinco,
    description,
    filtro,
    enstock,
    color,
    coloruno,
    colordos,
    colortres,
    colorcuatro,
    talle,
    talleuno,
    talledos,
    talletres,
    tallecuatro,
    tallecinco,
    talleseis,
    oldprice,
    price,
    dolarprice
        } = req.body;
  const errors = [];
  if (!image) {
    errors.push({text: 'Please Write a Title.'});
  }
  if (!title) {
    errors.push({text: 'Please Write a Description'});
  }
  if (!price) {
    errors.push({text: 'Please Write a Description'});
  }
  if (errors.length > 0) {
    res.render('notes/new-note', {
      errors,
      image,
      title,
      price
    });
  } else {
    const newNote = new Proddieciocho({ 
      name,
      title,
      image,
      imagedos,
      imagetres,
      imagecuatro,
      imagecinco,
      description,
      filtro,
      enstock,
      color,
      coloruno,
      colordos,
      colortres,
      colorcuatro,
      talle,
      talleuno,
      talledos,
      talletres,
      tallecuatro,
      tallecinco,
      talleseis,
      oldprice,
      price,
      dolarprice
    });
    //newNote.user = req.user.id;
    await newNote.save();
    req.flash('success_msg', 'Note Added Successfully');
    res.redirect('/proddieciochoback/1');
  }
});







router.get('/portaincienso-detalles/:id', async (req, res) => {
  var cart = new Cart(req.session.cart ? req.session.cart : 0);

  const { id } = req.params;
  const proddieciocho = await Proddieciocho.findById(id);
  res.render('proddieciocho/proddieciochoredirect', {
    proddieciocho,
    products: cart.generateArray(), totalPrice: cart.totalPrice
  });
});
//////////////////////////////////////////////////////////////////


router.get('/portaincienso/:page', async (req, res) => {
  var cart = new Cart(req.session.cart ? req.session.cart : 0);

   let perPage = 8;
  let page = req.params.page || 1;

  Proddieciocho
  .find({}) // finding all documents
  .sort({ timestamp: -1 })
  .skip((perPage * page) - perPage) // in the first page the value of the skip is 0
  .limit(perPage) // output just 9 items
  .exec((err, proddieciocho) => {
    Proddieciocho.countDocuments((err, count) => { // count to calculate the number of pages
      if (err) return next(err);
      res.render('proddieciocho/proddieciocho', {
        proddieciocho,
        current: page,
        pages: Math.ceil(count / perPage),
        products: cart.generateArray(), totalPrice: cart.totalPrice
      });
    });
  });
});






router.get("/search", function(req, res){
  let perPage = 8;
  let page = req.params.page || 1;

  var noMatch = null;
  if(req.query.search) {
      const regex = new RegExp(escape(req.query.search), 'gi');
      // Get all campgrounds from DB
      console.log(req.query.search)
      Prodtres
      // finding all documents
      .find({title: regex}) 
      .sort({ _id: -1 })
      .skip((perPage * page) - perPage) // in the first page the value of the skip is 0
      .limit(perPage) // output just 9 items
      .exec((err, produno) => {
       Prodtres.countDocuments((err, count) => {
        if (err) return next(err);
            res.render("prodtres/prodtres",{
              prodtres, 
              current: page,
              pages: Math.ceil(count / perPage)
            });
          });
        });
  } else {
      // Get all campgrounds from DB
      Prodtres.find({}, function(err, prodtres){
         if(err){
             console.log(err);
         } else {
            res.render("prodtres/prodtres",{
              prodtres,
              current: page,
              pages: Math.ceil(count / perPage)
              });
         }
      });
  }
});







////////////////////////////////////////////////////////////////////7



router.get('/proddieciochoback/:page', async (req, res) => {
  let perPage = 8;
  let page = req.params.page || 1;

  Proddieciocho
  .find({}) // finding all documents
  .sort({ timestamp: -1 })
  .skip((perPage * page) - perPage) // in the first page the value of the skip is 0
  .limit(perPage) // output just 9 items
  .exec((err, proddieciocho) => {
    Proddieciocho.countDocuments((err, count) => { // count to calculate the number of pages
      if (err) return next(err);
      res.render('proddieciocho/new-proddieciocho', {
        proddieciocho,
        current: page,
        pages: Math.ceil(count / perPage)
      });
    });
  });
});


router.get("/searchback", function(req, res){
  let perPage = 8;
  let page = req.params.page || 1;

  var noMatch = null;
  if(req.query.search) {
      const regex = new RegExp(escape(req.query.search), 'gi');
      // Get all campgrounds from DB
      console.log(req.query.search)
      Produno
      // finding all documents
      .find({title: regex}) 
      .sort({ _id: -1 })
      .skip((perPage * page) - perPage) // in the first page the value of the skip is 0
      .limit(perPage) // output just 9 items
      .exec((err, produno) => {
       Produno.countDocuments((err, count) => {
        if (err) return next(err);
            res.render("produno/new-produno",{
              produno, 
              current: page,
              pages: Math.ceil(count / perPage)
            });
          });
        });
  } else {
      // Get all campgrounds from DB
      Produno.find({}, function(err, produno){
         if(err){
             console.log(err);
         } else {
            res.render("produno/new-produno",{
              produno,
              current: page,
              pages: Math.ceil(count / perPage)
              });
         }
      });
  }
});







router.get('/likeproddieciocho/:id', async (req, res, next) => {
  // let { id } = req.params;
  // const task = await Ofertauno.findById(id);
  const task = await Proddieciocho.findById(req.params.id);
  task.like = !task.like;
  await task.save();
 // res.redirect('/pedidos/:1');
  res.json(true);
});  




router.post("/filtroproddieciocho", function(req, res){
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
  var proddieciocho = Proddieciocho.find(flterParameter);
  proddieciocho
  //.find( flterParameter) 
  .sort({ _id: -1 })
  .skip((perPage * page) - perPage) // in the first page the value of the skip is 0
  .limit(perPage) // output just 9 items
  .exec((err, data) => {
    proddieciocho.countDocuments((err, count) => {  
  //.exec(function(err,data){
      if(err) throw err;
      res.render("proddieciocho/proddieciocho",
      {
        proddieciocho: data, 
        current: page,
        pages: Math.ceil(count / perPage),
        products: cart.generateArray(), totalPrice: cart.totalPrice
      });
    });
  });
});

 


///////////////////////////////////////////////////////////////////////7


// // talle y color
// router.get('/prodtres/tallecolor/:id',  async (req, res) => {
//   const prodtres = await Prodtres.findById(req.params.id);
//   res.render('prodtres/tallecolor-prodtres', { prodtres });
// });

// router.post('/prodtres/tallecolor/:id',  async (req, res) => {
//   const { id } = req.params;
//   await Prodtres.updateOne({_id: id}, req.body);
//   res.redirect('/prodtresredirect/' + id);
// });




//editar
 

router.get('/proddieciocho/edit/:id',  async (req, res) => {
  const proddieciocho = await Proddieciocho.findById(req.params.id);
  res.render('proddieciocho/edit-proddieciocho', { proddieciocho });
});

router.post('/proddieciocho/edit/:id',  async (req, res) => {
  const { id } = req.params;
  await Proddieciocho.updateOne({_id: id}, req.body);
  res.redirect('/proddieciochoback/:1');
});




// Delete 
router.get('/proddieciocho/delete/:id', async (req, res) => {
  const { id } = req.params;
    await Proddieciocho.deleteOne({_id: id});
  res.redirect('/proddieciochoback/:1');
});






router.get('/addtocardproddieciocho/:id', function(req, res, next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});
  var cartdolar = new Cartdolar(req.session.cartdolar ? req.session.cartdolar : {items: {}});
  Proddieciocho.findById(productId,async function(err, product){
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
