const express = require('express');
const router = express.Router();
const mercadopago = require("mercadopago");
const paypal = require('paypal-rest-sdk');
// Models
const Produno = require('../models/produno');
const Cart = require('../models/cart');
const Cartdolar = require('../models/cartdolar');
const Order = require('../models/order');

// Helpers
const { isAuthenticated } = require('../helpers/auth');

const userController=require('../config/controllers');
// const User = require('../models/User');
const nodeMailer = require('../config/nodemailer');


const resetMailer=require('../mailer/resetPasswordmailer');
const resetSuccess=require('../mailer/resetPasswordSuccess');


const venta =require('../mailer/resetPasswordSuccess');
const pago =require('../mailer/resetPasswordSuccess');

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AQc6BTFp8STtOFTt6GTue2HBmoVlSlnJXuLa2i_U2giuOwqCm6wVQB8EP5n925UgXb08pK1a3AE2y6XL',
  'client_secret': 'EFSgKO0QQGE-URzmVMB-9eT9fOxAPXPEpNZ07RiyZOnb5m5PoizR0q7ML3i8RR1X0W9TWCOC-bmM-mPK'
});

const PUBLISHABLE_KEY = 'pk_test_tLOvqVJ7f6zGY6ZQIs8GV0Sa00MVT90sTm'
const SECRET_KEY = 'sk_test_rCp23dn4fDasEqfGiVkhHvii00SyEkd4GS'

const path = require('path');
const { unlink } = require('fs-extra');
const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name:'dernadqrq',
  api_key:'241274546791763',
  api_secret:'EnOvxHpFoTKSdfDybes9Po6OoPI'
  
});




////////////////////////////////////////back/////////////////////////////////////////////////////7


router.get('/produnoback/:page', async (req, res) => {


  let perPage =15;
  let page = req.params.page || 1;

  Produno 
  .find()// finding all documents
  .sort({_id:-1})
  .skip((perPage * page) - perPage) // in the first page the value of the skip is 0
  .limit(perPage) // output just 9 items
  .exec((err, produno) => {
    Produno.countDocuments((err, count) => { // count to calculate the number of pages
      if (err) return next(err);
      res.render('produno/new-produno', {
        produno,
        current: page,
        pages: Math.ceil(count / perPage)
      });
    });
  });
});

router.post('/produno/new-produno',  async (req, res) => {
  const { name, title, filtro, description, enstock, oldprice, color, colorstock, talle, amount, dolarprice, price} = req.body;

  try {
   const resp = await cloudinary.v2.uploader.upload(req.files[0].path)
   const respdos = await cloudinary.v2.uploader.upload(req.files[1].path)
   const resptres = await cloudinary.v2.uploader.upload(req.files[2].path)
   const respcuatro = await cloudinary.v2.uploader.upload(req.files[3].path)
   const respcinco = await cloudinary.v2.uploader.upload(req.files[4].path)
   const respseis = await cloudinary.v2.uploader.upload(req.files[5].path)
   const respsiete = await cloudinary.v2.uploader.upload(req.files[6].path)
   const respocho = await cloudinary.v2.uploader.upload(req.files[7].path)
   const respnueve = await cloudinary.v2.uploader.upload(req.files[8].path)
   const respdiez = await cloudinary.v2.uploader.upload(req.files[9].path)


   const responce = await cloudinary.v2.uploader.upload(req.files[10].path)
   const respdoce = await cloudinary.v2.uploader.upload(req.files[11].path)
   const resptrece = await cloudinary.v2.uploader.upload(req.files[12].path)
   const respcatorce = await cloudinary.v2.uploader.upload(req.files[13].path)
   const respquince = await cloudinary.v2.uploader.upload(req.files[14].path)
   const respdieciseis = await cloudinary.v2.uploader.upload(req.files[15].path)
   const respdiecisiete = await cloudinary.v2.uploader.upload(req.files[16].path)
   const respdieciocho = await cloudinary.v2.uploader.upload(req.files[17].path)
   const respdiecinueve = await cloudinary.v2.uploader.upload(req.files[18].path)
  
   const respveinte = await cloudinary.v2.uploader.upload(req.files[19].path)
   const respveintiuno = await cloudinary.v2.uploader.upload(req.files[20].path)
   const respveintidos = await cloudinary.v2.uploader.upload(req.files[21].path)
   const respveintitres = await cloudinary.v2.uploader.upload(req.files[22].path)
   const respveinticuatro = await cloudinary.v2.uploader.upload(req.files[23].path)
   const respveinticinco = await cloudinary.v2.uploader.upload(req.files[24].path)

   const newNote = new Produno({ 
 
    name, title, description, enstock, oldprice, color, colorstock, talle, amount, dolarprice, filtro,
    imageuno:resp.url,
    imagedos:respdos.url,
    imagetres:resptres.url,
    imagecuatro:respcuatro.url,
    imagecinco:respcinco.url,
    imageseis:respseis.url,
    imagesiete:respsiete.url,
    imageocho:respocho.url,
    imagenueve:respnueve.url,
    imagediez:respdiez.url,


    imageonce:responce.url,
    imagedoce:respdoce.url,
    imagetrece:resptrece.url,
    imagecatorce:respcatorce.url,
    imagequince:respquince.url,
    imagedieciseis:respdieciseis.url,
    imagediecisiete:respdiecisiete.url,
    imagedieciocho:respdieciocho.url,
    imagediecinueve:respdiecinueve.url,
    imageveinte:respveinte.url,

    imageveintiuno:respveintiuno.url,
    imageveintidos:respveintidos.url,
    imageveintitres:respveintitres.url,
    imageveinticuatro:respveinticuatro.url,
    imageveinticinco:respveinticinco.url,

    price
  });
  await newNote.save();

  res.redirect('/produnoback/1');
 
   }catch(err){
       console.log(err)
   }  
});



router.get('/venta/:page', async (req, res) => {

  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

  let perPage = 15;
  let page = req.params.page || 1;
 
  Produno 
  .find({}) // finding all documents
  .sort( {timestamp: -1})
  .skip((perPage * page) - perPage) // in the first page the value of the skip is 0
  .limit(perPage) // output just 9 items
  .exec((err, produno) => {
    Produno.countDocuments((err, count) => { // count to calculate the number of pages
      if (err) return next(err);
      res.render('produno/produno', {
        produno,
        current: page,
        pages: Math.ceil(count / perPage),
        products: cart.generateArray(), totalPrice: cart.totalPrice,
 
      });
    });
  });
});






router.get('/venta-detalles/:id', async (req, res) => {
  const { id } = req.params;
  const produnon = await Produno.find({}) 
  const produno = await Produno.findById(id);
  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

  res.render('produno/produnoredirect', {
    produnon,
    produno,
    products: cart.generateArray(), totalPrice: cart.totalPrice

  });
});




//editar



router.get('/produno/edit/:id',  async (req, res) => {
  const produno = await Produno.findById(req.params.id);
  res.render('produno/edit-produno', { produno });
});

router.post('/produno/edit/:id',  async (req, res) => {
  const { id } = req.params;
  await Produno.updateOne({_id: id}, req.body);
  res.redirect('/produnoback/1');
});




// Delete 
router.get('/produno/delete/:id', async (req, res) => {
  const { id } = req.params;
    const produno = await Produno.deleteOne({_id: id});
   // await unlink(path.resolve('./src/public' + produno.path));

  res.redirect('/produnoback/1');
});
















// router.post('/produno/new-produno', async (req, res) => {


//   try {
//    // console.log(req.files)
//   const resp = await cloudinary.v2.uploader.upload(req.files[0].path)
//   const respdos = await cloudinary.v2.uploader.upload(req.files[0].path)
//   const resptres = await cloudinary.v2.uploader.upload(req.files[0].path)

//   }catch(err){
//       console.log(err)
//   }


//   const image = new Produno();
//   image.title = req.body.title;
//   image.description = req.body.description;
//   image.filenameuno = req.files.filenameuno;
//   image.filenamedos = req.files.filenamedos;
//   image.filenametres = req.files.filenametres;

//   image.imageuno = resp.url
//   image.imagedos = respdos.url
//   image.imagetres = resptres.url

//   // image.imageuno = '/img/uploads/' + req.files[0].filename;
//   // image.imagedos = '/img/uploads/' + req.files[1].filename;
//   // image.imagetres = '/img/uploads/' + req.files[2].filename;
//   image.originalnameuno = req.files.originalnameuno;  
//   image.originalnamedos = req.files.originalnamedos;
//   image.originalnametres = req.files.originalnametres;

//   image.mimetype = req.files.mimetype;
//   image.size = req.files.size;
//   image.enstock = req.body.enstock;
//   image.price = req.body.price;
//   image.oldprice = req.body.oldprice;

//   //image.path = resp.path;


//   await image.save();


//   res.redirect('/produnoback/1');
// });

















router.get("/searchback", function(req, res){
  var noMatch = null;
  if(req.query.search) {
      const regex = new RegExp(escape(req.query.search), 'gi');
      // Get all campgrounds from DB
      console.log(req.query.search)
      Produno.find({title: regex}, function(err, produno){
         if(err){
             console.log(err);
         } else {
            if(produno.length < 1) {
                noMatch = "No campgrounds match that query, please try again.";
            }
            res.render("produno/new-produno",{produno, noMatch: noMatch});
         }
      });

  } else {
      // Get all campgrounds from DB
      Produno.find({}, function(err, produno){
         if(err){
             console.log(err);
         } else {
            res.render("produno/produno",{produno, noMatch: noMatch});
         }
      });
  }
});


  




/////////////////////////////////////////front//////////////////////////////////////////////////







router.get("/search", function(req, res){
  var noMatch = null;
  if(req.query.search) {
      const regex = new RegExp(escape(req.query.search), 'gi');
      // Get all campgrounds from DB
      console.log(req.query.search)
      Produno.find({title: regex}, function(err, produno){
         if(err){
             console.log(err);
         } else {
            if(produno.length < 1) {
                noMatch = "No campgrounds match that query, please try again.";
            }
            res.render("produno/produno",{produno, noMatch: noMatch});
         }
      });

  } else {
      // Get all campgrounds from DB
      Produno.find({}, function(err, produno){
         if(err){
             console.log(err);
         } else {
            res.render("produno/produno",{produno, noMatch: noMatch});
         }
      });
  }
});



/////////////////////////////////filter/////////////////////////////////////////////



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
  var produno = Produno.find(flterParameter);
  produno
  //.find( flterParameter) 
  .sort({ _id: -1 })
  .skip((perPage * page) - perPage) // in the first page the value of the skip is 0
  .limit(perPage) // output just 9 items
  .exec((err, data) => {
    produno.countDocuments((err, count) => {  
  //.exec(function(err,data){
      if(err) throw err;
      res.render("produno/produno",
      {
        produno: data, 
        current: page,
        pages: Math.ceil(count / perPage),
        products: cart.generateArray(), totalPrice: cart.totalPrice
      });
    });
  });
});





   




////////////////////////////like////////////////////////

router.get('/likeproduno/:id', async (req, res, next) => {
  // let { id } = req.params;
  // const task = await Ofertauno.findById(id);
  const task = await Produno.findById(req.params.id);
  task.like = !task.like;
  await task.save();
 // res.redirect('/pedidos/:1');
  res.json(true);
});

///////////////////////////////////////////////////////////////////////////7



// talle y color
router.get('/produno/tallecolor/:id',  async (req, res) => {
  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

  const produno = await Produno.findById(req.params.id);
  res.render('produno/tallecolor-produno', { 
    produno,
    products: cart.generateArray(), totalPrice: cart.totalPrice

   });
});

router.post('/produno/tallecolor/:id',  async (req, res) => {
  const { id } = req.params;
  await Produno.updateOne({_id: id}, req.body);
   const task = await Produno.findById(id);
   task.status = !task.status;
   await task.save();

  res.redirect('/produnoredirect/' + id);
});


















module.exports = router;  