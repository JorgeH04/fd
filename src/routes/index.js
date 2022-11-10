const express = require('express');
const router = express.Router();
const Ofertauno = require('../models/ofertauno');
const Ofertados = require('../models/ofertados');
const Ofertatres = require('../models/ofertatres');
const Ofertacuatro = require('../models/ofertacuatro');
const Produno = require('../models/produno');
const Proddos = require('../models/proddos');
// const Prodtres = require('../models/prodtres');
// const Prodcuatro = require('../models/prodcuatro');
// const Prodcinco = require('../models/prodcinco');
// const Prodseis = require('../models/prodseis');
// const Prodsiete = require('../models/prodsiete');
// const Prodocho = require('../models/prodocho');
// const Prodnueve = require('../models/prodnueve');
// const Proddiez = require('../models/proddiez');
// const Prodonce = require('../models/prodonce');
// const Proddoce = require('../models/proddoce');
// const Prodtrece = require('../models/prodtrece');
// const Prodcatorce = require('../models/prodcatorce');
// const Prodquince = require('../models/prodquince');
// const Proddieciseis = require('../models/proddieciseis');
// const Proddiecisiete = require('../models/proddiecisiete');
// const Proddieciocho = require('../models/proddieciocho');
 


 const nodemailer = require('nodemailer');

const Cart = require('../models/cart');
const Order = require('../models/order');

router.get('/', async (req, res) => {
  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});
 
  const ofertauno = await Ofertauno.find();
  const ofertados = await Ofertados.find();
  const ofertatres = await Ofertatres.find();
  const ofertacuatro = await Ofertacuatro.find();

   res.render('index', { 
    ofertauno, 
    ofertados,
    ofertatres,
    ofertacuatro,
 
    products: cart.generateArray(), totalPrice: cart.totalPrice
 
  });
 
});



router.get('/index', async (req, res) => {
  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});
 
  const ofertauno = await Ofertauno.find();
  const ofertados = await Ofertados.find();
  const ofertatres = await Ofertatres.find();
  const ofertacuatro = await Ofertacuatro.find();

   res.render('index', { 
    ofertauno, 
    ofertados,
    ofertatres,
    ofertacuatro,
 
    products: cart.generateArray(), totalPrice: cart.totalPrice
 
  });
 
});

router.get('/nosotros', async (req, res) => {
  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});
  const ofertatres = await Ofertatres.find();

  res.render('about', {
    ofertatres,
    products: cart.generateArray(), totalPrice: cart.totalPrice
  });
});
  
  
 
 

router.get('/contacto', async (req, res) => {
  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

  res.render('contacto', {

    products: cart.generateArray(), totalPrice: cart.totalPrice
  });
});




router.post('/email', async (req, res) => {
  const { name, email, asunto, message } = req.body;

  contentHTML = `
      <h1>User Information</h1>
      <ul>
          <li>Nombres: ${name}</li>
          <li>Email: ${email}</li>
         
      </ul>
      <ul>
          <li>Asunto: ${asunto}</li>
         
      </ul>
      <p>${message}</p>
  `;

  

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
   user: 'grossicervezas@gmail.com',
   pass: '001Grossi'
   
 }
 });
 
 
 let mailOptions = {
  from: 'lehj09@gmail.com',
  to: 'jhessle04@gmail.com',
  subject: 'email website',
  html: contentHTML
 
 };

 

 
 transporter.sendMail(mailOptions, function(error, info){
  if (error) {
   console.log(error);
  }else{
   console.log('Email sent: ' + info.response);
  }
 });
 res.redirect('/contacto');
});


module.exports = router;
