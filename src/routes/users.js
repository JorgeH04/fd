const router = require('express').Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');

// Models
const User = require('../models/User');
const Order = require('../models/order');
const Cart = require('../models/cart');

const nodemailer = require('nodemailer')

const userController=require('../config/controllers');

const hello =require('../mailer/resetPasswordSuccess');


const { isAuthenticated } = require('../helpers/auth');




  


 





// Delete  
router.get('/account/delete/:id', async (req, res) => {
  const { id } = req.params;
    await User.findByIdAndRemove({_id: id});
  res.redirect('/');
});

module.exports = router;



