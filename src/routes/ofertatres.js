const express = require('express');
const router = express.Router();



// Models
const Ofertatres = require('../models/ofertatres');
const Cart = require('../models/cart');
const Cartdolar = require('../models/cartdolar');
const Order = require('../models/order');
const request = require('request');

// Helpers
const { isAuthenticated } = require('../helpers/auth');


// const getUrl = async () => {
//   const ofertauno = await Ofertatres.find();
//   let ii = ofertauno.map(item=>item.title)
//   console.log(ii)

//   return ii
// }

 


// const ping =  () =>  

//     request(`${ii}`, (error, response, body) => {

//     console.log('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print body of response received

// });
// setInterval(ping, 20*60*1000); // I have set to 20 mins interval




router.post('/ofertatres/new-ofertatres',  async (req, res) => {
  const { 
    name,
    title,
    image,
    imagedos,
    imagetres,
    imagecuatro,
    imagecinco,
    description,
    filtroprice,
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
    const newNote = new Ofertatres({ 
      name,
      title,
      image,
      imagedos,
      imagetres,
      imagecuatro,
      imagecinco,
      description,
      filtroprice,
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
    res.redirect('/ofertatres/add');
  }
});






router.get('/ofertatresredirect/:id', async (req, res) => {
  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

  const { id } = req.params;
  const ofertatres = await Ofertatres.findById(id);

   res.render('ofertatres/ofertatresredirect', {
     ofertatres,
     products: cart.generateArray(), totalPrice: cart.totalPrice

    });
});








// New producto
router.get('/ofertatres/add',  async (req, res) => {
  //console.log(`${ii}`)
  const ofertatres = await Ofertatres.find();
  res.render('ofertatres/new-ofertatres',  { ofertatres });
});



////////////////////////////like////////////////////////

router.get('/liketres/:id', async (req, res, next) => {
  // let { id } = req.params;
  // const task = await Ofertauno.findById(id);
  const task = await Ofertatres.findById(req.params.id);
  task.like = !task.like;
  await task.save();
 // res.redirect('/pedidos/:1');
  res.json(true);
});



////////////////////////////////////////crud////////////////////////////////////////////////7





//editar


router.get('/ofertatres/edit/:id',  async (req, res) => {
  const ofertatres = await Ofertatres.findById(req.params.id);
  res.render('ofertatres/edit-ofertatres', { ofertatres });
});

router.post('/ofertatres/edit/:id',  async (req, res) => {
  const { id } = req.params;
  await Ofertatres.updateOne({_id: id}, req.body);
  res.redirect('/ofertatres/add');
});


// Delete 
router.get('/ofertatres/delete/:id', async (req, res) => {
  const { id } = req.params;
  await Ofertatres.deleteOne({_id: id});
  res.redirect('/ofertatres/add');
});




////////////////////////////////////////cart////////////////////////////////////////////////7





router.get('/addtocardofertatres/:id', function(req, res, next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});
  var cartdolar = new Cartdolar(req.session.cartdolar ? req.session.cartdolar : {items: {}});

  Ofertatres.findById(productId, function(err, product){
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


 