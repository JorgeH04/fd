const express = require('express');
const router = express.Router();


// Models 
const Prodenviocinco = require('../models/prodenviocinco');
const Cart = require('../models/cart');

// Helpers
const { isAuthenticated } = require('../helpers/auth');

const Prodenviotres = require('../models/prodenviotres');



////////////////////////////////////////////////////////////////////////////





router.post('/prodenviocinco/new-enviocinco',  async (req, res) => {
  const { name, title, image, imagedos, imagetres, description, price } = req.body;
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
    const newNote = new Prodenviocinco({ name, title, image, imagedos, imagetres, description, price });
    //newNote.user = req.user.id;
    await newNote.save();
    req.flash('success_msg', 'Note Added Successfully');
    res.redirect('/enviocincoback/1');
  }
});










//////////////////////////////////////////////////////////////////////




router.get('/enviocinco', isAuthenticated,  async (req, res) => {
  const { id } = req.params;
  const prodenviocuatro = await Prodenviocuatro.find({}) 
  res.render('prodenviocinco/enviocinco', {prodenviocinco});
});



router.get('/envioprecios/:id', async (req, res) => {
    const { id } = req.params;
    const prodenviocinco = await Prodenviocinco.findById(id);
    res.render('prodenviocinco/envioprecio', {prodenviocinco});
  });





//////////////////////////////////////////////////////////////////////

router.get('/enviocincoback/:page', async (req, res) => {
let perPage = 8;
let page = req.params.page || 1;

Prodenviocinco
.find({}) // finding all documents
.sort({ timestamp: -1 })
.skip((perPage * page) - perPage) // in the first page the value of the skip is 0
.limit(perPage) // output just 9 items
.exec((err, prodenviocinco) => {
  Prodenviocinco.countDocuments((err, count) => { // count to calculate the number of pages
    if (err) return next(err);
    res.render('prodenviocinco/new-prodenviocinco', {
      prodenviocinco,
      current: page,
      pages: Math.ceil(count / perPage)
    });
  });
});
});






/////////////////////////////////////////////////////////////////////




//editar


router.get('/prodenviocinco/edit/:id',  async (req, res) => {
  const prodenviocinco = await Prodenviocinco.findById(req.params.id);
  res.render('prodenviocinco/edit-prodenviocinco', { prodenviocinco });
});

router.post('/prodenviocinco/edit/:id',  async (req, res) => {
  const { id } = req.params;
  await Prodenviocinco.updateOne({_id: id}, req.body);
  res.redirect('/enviocincoback/1');
});




// Delete 
router.get('/prodenviocinco/delete/:id', async (req, res) => {
  const { id } = req.params;
    await Prodenviocinco.deleteOne({_id: id});
  res.redirect('/prodenviocinco/1');
});








///////////////////////////////////////cart//////////////////////////////////////777




// router.get('/addtocardprodcuatro/:id', function(req, res, next){
//   var productId = req.params.id;
//   var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

//   Prodcuatro.findById(productId, function(err, envio){
//     if(err){
//       return res-redirect('/');
//     }
//     cart.addd(envio, envio.id);
//     req.session.cart = cart;
//     console.log(req.session.cart);
//     res.redirect('/prepagar');
//   });
// });






router.get('/addtocardprodenviocinco/:id', function(req, res, next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

  Prodenviocinco.findById(productId, function(err, product){
    if(err){
      return res-redirect('/');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/prepagar');

  });
});



module.exports = router;
