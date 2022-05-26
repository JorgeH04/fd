const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary');


// Models
const Prodveinticuatro = require('../models/prodveinticuatro');
const Cart = require('../models/cart');
//const Order = require('../models/order');

// Helpers
const { isAuthenticated } = require('../helpers/auth');

  



/////////////////////////////////////////////////////////////////////7


router.post('/prodveinticuatro/new-prodveinticuatro',  async (req, res) => {
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
    price
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
    const newNote = new Prodveinticuatro({ 
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
        price
    });
    //newNote.user = req.user.id;
    await newNote.save();
    req.flash('success_msg', 'Note Added Successfully');
    res.redirect('/prodveinticuatroback/1');
  }
});







router.get('/prodveinticuatroredirect/:id', async (req, res) => {
  var cart = new Cart(req.session.cart ? req.session.cart : 0);

  const { id } = req.params;
  const prodveinticuatro = await Prodveinticuatro.findById(id);
  res.render('prodveinticuatro/prodveinticuatroredirect', {
    prodveinticuatro,
    products: cart.generateArray(), totalPrice: cart.totalPrice
  });
});
//////////////////////////////////////////////////////////////////


router.get('/prodveinticuatroindex/:page', async (req, res) => {
  var cart = new Cart(req.session.cart ? req.session.cart : 0);

   let perPage = 8;
  let page = req.params.page || 1;

  Prodveinticuatro
  .find({}) // finding all documents
  .sort({ timestamp: -1 })
  .skip((perPage * page) - perPage) // in the first page the value of the skip is 0
  .limit(perPage) // output just 9 items
  .exec((err, prodveinticuatro) => {
    Prodveinticuatro.countDocuments((err, count) => { // count to calculate the number of pages
      if (err) return next(err);
      res.render('prodveinticuatro/prodveinticuatro', {
        prodveinticuatro,
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



router.get('/prodveinticuatroback/:page', async (req, res) => {
  let perPage = 8;
  let page = req.params.page || 1;

  Prodveinticuatro
  .find({}) // finding all documents
  .sort({ timestamp: -1 })
  .skip((perPage * page) - perPage) // in the first page the value of the skip is 0
  .limit(perPage) // output just 9 items
  .exec((err, prodveinticuatro) => {
    Prodveinticuatro.countDocuments((err, count) => { // count to calculate the number of pages
      if (err) return next(err);
      res.render('prodveinticuatro/new-prodveinticuatro', {
        prodveinticuatro,
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
 

router.get('/prodveinticuatro/edit/:id',  async (req, res) => {
  const prodveinticuatro = await Prodveinticuatro.findById(req.params.id);
  res.render('prodveinticuatro/edit-prodveinticuatro', { prodveinticuatro });
});

router.post('/prodveinticuatro/edit/:id',  async (req, res) => {
  const { id } = req.params;
  await Prodveinticuatro.updateOne({_id: id}, req.body);
  res.redirect('/prodveinticuatroback/:1');
});




// Delete 
router.get('/prodveinticuatro/delete/:id', async (req, res) => {
  const { id } = req.params;
    await Prodveinticuatro.deleteOne({_id: id});
  res.redirect('/prodveinticuatroback/:1');
});






router.get('/addtocardprodveinticuatro/:id', function(req, res, next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

  Prodveinticuatro.findById(productId, function(err, product){
    if(err){
      return res-redirect('/');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    req.flash('success', 'Producto agregado al carro exitosamente');
    //res.redirect('/prodsieteredirect/' + productId);
    res.redirect('/shopcart');
  });
});



module.exports = router;
