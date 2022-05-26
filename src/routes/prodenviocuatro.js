const express = require('express');
const router = express.Router();


// Models 
const Prodenviocuatro = require('../models/prodenviocuatro');
const Cart = require('../models/cart');

// Helpers
const { isAuthenticated } = require('../helpers/auth');

const Prodenviocinco = require('../models/prodenviocinco');



////////////////////////////////////////////////////////////////////////////





router.post('/prodenviocuatro/new-enviocuatro',  async (req, res) => {
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
    const newNote = new Prodenviocuatro({ name, title, image, imagedos, imagetres, description, price });
    //newNote.user = req.user.id;
    await newNote.save();
    req.flash('success_msg', 'Note Added Successfully');
    res.redirect('/enviocuatroback/1');
  }
});










//////////////////////////////////////////////////////////////////////




router.get('/enviocuatro', isAuthenticated,  async (req, res) => {
  const { id } = req.params;
  const prodenviocuatro = await Prodenviocuatro.find({}) 
  const prodenviocinco = await Prodenviocinco.find({}) 

  res.render('prodenviocuatro/enviocuatro', {prodenviocuatro, prodenviocinco});
});



router.get('/envioprecios/:id', async (req, res) => {
    const { id } = req.params;
    const prodenviocuatro = await Prodenviocuatro.findById(id);
    res.render('prodenviocuatro/envioprecio', {prodenviocuatro});
  });





//////////////////////////////////////////////////////////////////////

router.get('/enviocuatroback/:page', async (req, res) => {
let perPage = 8;
let page = req.params.page || 1;

Prodenviocuatro
.find({}) // finding all documents
.sort({ timestamp: -1 })
.skip((perPage * page) - perPage) // in the first page the value of the skip is 0
.limit(perPage) // output just 9 items
.exec((err, prodenviocuatro) => {
  Prodenviocuatro.countDocuments((err, count) => { // count to calculate the number of pages
    if (err) return next(err);
    res.render('prodenviocuatro/new-prodenviocuatro', {
      prodenviocuatro,
      current: page,
      pages: Math.ceil(count / perPage)
    });
  });
});
});






/////////////////////////////////////////////////////////////////////




//editar


router.get('/prodenviocuatro/edit/:id',  async (req, res) => {
  const prodenviocuatro = await Prodenviocuatro.findById(req.params.id);
  res.render('prodenviocuatro/edit-prodenviocuatro', { prodenviocuatro });
});

router.post('/prodenviocuatro/edit/:id',  async (req, res) => {
  const { id } = req.params;
  await Prodenviocuatro.updateOne({_id: id}, req.body);
  res.redirect('/enviocuatroback/1');
});




// Delete 
router.get('/prodenviocuatro/delete/:id', async (req, res) => {
  const { id } = req.params;
    await Prodenviocuatro.deleteOne({_id: id});
  res.redirect('/prodenviocuatro/1');
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






router.get('/addtocardprodenviocuatro/:id', function(req, res, next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

  Prodenviocuatro.findById(productId, function(err, product){
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
