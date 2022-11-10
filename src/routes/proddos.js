const express = require('express');
const router = express.Router();

const path = require('path');
const { unlink } = require('fs-extra'); 
    
// Models
const Proddos = require('../models/proddos');
// const Cart = require('../models/cart');
// const Order = require('../models/order');
// const Cartdolar = require('../models/cartdolar');
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






  router.get('/goldenvisa', async (req, res) => {

 
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



 
 
 
 



 

module.exports = router;
