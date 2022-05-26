const express = require('express');
const router = express.Router();

const cloudinary = require('cloudinary');

// Models
const Prodocho = require('../models/prodocho');
const Cart = require('../models/cart');
//const Order = require('../models/order');
const Cartdolar = require('../models/cartdolar');

// Helpers
const { isAuthenticated } = require('../helpers/auth');

  



/////////////////////////////////////////////////////////////////////7





router.post('/prodocho/new-prodocho',  async (req, res) => {

  const { title, description, price} = req.body;

  try {
    // console.log(req.files)
   const resp = await cloudinary.v2.uploader.upload(req.files[0].path)
   const respdos = await cloudinary.v2.uploader.upload(req.files[1].path)
   const resptres = await cloudinary.v2.uploader.upload(req.files[2].path)
       
   const newNote = new Prodocho({ 
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

  res.redirect('/prodochoback/1');
 
   }catch(err){
       console.log(err)
   }  
});




router.get('/literatura-preadolescente-detalles/:id', async (req, res) => {
  var cart = new Cart(req.session.cart ? req.session.cart : 0);

  const { id } = req.params;
  const prodocho = await Prodocho.findById(id);
  res.render('prodocho/prodochoredirect', {
    prodocho,
    products: cart.generateArray(), totalPrice: cart.totalPrice
  });
});
//////////////////////////////////////////////////////////////////


router.get('/literatura-preadolescente/:page', async (req, res) => {
  var cart = new Cart(req.session.cart ? req.session.cart : 0);

   let perPage = 15;
  let page = req.params.page || 1;

  Prodocho
  .find({}) // finding all documents
  .sort({ timestamp: -1 })
  .skip((perPage * page) - perPage) // in the first page the value of the skip is 0
  .limit(perPage) // output just 9 items
  .exec((err, prodocho) => {
    Prodocho.countDocuments((err, count) => { // count to calculate the number of pages
      if (err) return next(err);
      res.render('prodocho/prodocho', {
        prodocho,
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



router.post("/filtroprodonce", function(req, res){
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
  var prodocho = Prodocho.find(flterParameter);
  prodocho
  //.find( flterParameter) 
  .sort({ _id: -1 })
  .skip((perPage * page) - perPage) // in the first page the value of the skip is 0
  .limit(perPage) // output just 9 items
  .exec((err, data) => {
    prodocho.countDocuments((err, count) => {  
  //.exec(function(err,data){
      if(err) throw err;
      res.render("prodocho/prodocho",
      {
        prodocho: data, 
        current: page,
        pages: Math.ceil(count / perPage),
        products: cart.generateArray(), totalPrice: cart.totalPrice
      });
    });
  });
});



////////////////////////////////////////////////////////////////////7



router.get('/prodochoback/:page', async (req, res) => {
  let perPage = 8;
  let page = req.params.page || 1;

  Prodocho
  .find({}) // finding all documents
  .sort({ timestamp: -1 })
  .skip((perPage * page) - perPage) // in the first page the value of the skip is 0
  .limit(perPage) // output just 9 items
  .exec((err, prodocho) => {
    Prodocho.countDocuments((err, count) => { // count to calculate the number of pages
      if (err) return next(err);
      res.render('prodocho/new-prodocho', {
        prodocho,
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
 

router.get('/prodocho/edit/:id',  async (req, res) => {
  const prodocho = await Prodocho.findById(req.params.id);
  res.render('prodocho/edit-prodocho', { prodocho });
});

router.post('/prodocho/edit/:id',  async (req, res) => {
  const { id } = req.params;
  await Prodocho.updateOne({_id: id}, req.body);
  res.redirect('/prodochoback/:1');
});




// Delete 
router.get('/prodocho/delete/:id', async (req, res) => {
  const { id } = req.params;
    await Prodocho.deleteOne({_id: id});
  res.redirect('/prodochoback/:1');
});

  

 ////////////////////////////like////////////////////////
 
 router.get('/likeprodocho/:id', async (req, res, next) => {
  // let { id } = req.params;
  // const task = await Ofertauno.findById(id);
  const task = await Prodocho.findById(req.params.id);
  task.like = !task.like; 
  await task.save();
 // res.redirect('/pedidos/:1');
  res.json(true);
});  


router.get('/addtocardprodocho/:id', function(req, res, next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});
  var cartdolar = new Cartdolar(req.session.cartdolar ? req.session.cartdolar : {items: {}});
  Prodocho.findById(productId,async function(err, product){
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
