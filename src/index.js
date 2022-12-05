if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}      
 
const multer = require('multer');
const  uuid  = require('uuid/v4');
const { format } = require('timeago.js');
const express = require('express');  
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');  
const mongoose = require('mongoose');
const engine = require('ejs-mate');


const MongoStore = require('connect-mongo')(session);
const app = express();
require('./database');
require('./config/passport');
const middleware=require('./config/middleware');

 
//settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');


   
// middlewares
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
  

const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/img/uploads'), 
  filenameuno: (req, files, cb, filenameuno) => {
    console.log(files);
       cb(null, uuid() + path.extname(files.originalnameuno));
  },
  filenamedos: (req, files, cb, filenamedos) => {
    console.log(files)
     cb(null, uuid() + path.extname(files.originalnamedos));
},
   filenametres: (req, files, cb, filenametres) => {
  console.log(files);
   cb(null, uuid() + path.extname(files.originalnametres));
},
}) 
   

app.use(multer({ storage: storage }).array('files', 12))

//app.use(multer({ storage: storage }).array('filesdos', 12))

 



//var uploadMultiple = upload.fields([{ name: 'file1', maxCount: 10 }, { name: 'file2', maxCount: 10 }])

 // app.use(multer({storage}).single('file'));
// app.use(multer({storage}).single('imagedos'));
  
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection}),
  cookie: { maxAge: 180 * 60 * 1000 }
}));   
app.use(passport.initialize());      
app.use(passport.session());
app.use(flash());
app.use(middleware.setFlash);

app.use(function(req, res, next){
  res.locals.session = req.session;
  //res.locals.sessio = req.sessio;  
  next();
})

// Global Variables
app.use((req, res, next) => {
    app.locals.format = format;
    res.locals.carro = req.flash('carro') || null;
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
  });
   
// routes
app.use(require('./routes'));
app.use(require('./routes/ofertauno'));
app.use(require('./routes/ofertados'));
app.use(require('./routes/ofertatres'));
app.use(require('./routes/produno'));
app.use(require('./routes/proddos'));

  
// server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});          


